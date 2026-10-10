class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        let min = r;

        while (l <= r) {
            let k = l + Math.floor((r - l) / 2);
            let hours = 0;

            for (let p of piles) {
                hours += Math.ceil(p / k);
            }

            if (hours <= h) {
                min = Math.min(min, k);
                r = k - 1;
            } else l = k + 1;
        }
        return min;
    }
}
