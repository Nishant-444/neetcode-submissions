class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let values = this.keyStore.get(key) || [];

        let left = 0;
        let right = values.length - 1;
        let res = "";

        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);

            if (values[mid][0] <= timestamp) {
                res = values[mid][1];
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return res;
    }
}
