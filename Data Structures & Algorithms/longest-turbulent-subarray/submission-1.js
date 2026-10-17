class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    maxTurbulenceSize(arr) {
        let l = 0;
        let r = 1;
        let res = 1;
        let prev = "";

        while (r < arr.length) {
            if ((arr[r - 1] > arr[r] && prev !== ">") || (arr[r - 1] < arr[r] && prev !== "<")) {
                prev = arr[r - 1] > arr[r] ? ">" : "<";
                res = Math.max(res, r - l + 1);
                r++;
            } else {
                if (arr[r] === arr[r - 1]) {
                    r++;
                }

                l = r - 1;
                prev = "";
            }
        }

        return res;
    }
}
