class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        const target = new Map();
        for (const c of s1) {
            target.set(c, (target.get(c) || 0) + 1);
        }

        const window = new Map();
        let L = 0, matches = 0;

        for (let R = 0; R < s2.length; R++) {
            const c = s2[R];
            window.set(c, (window.get(c) || 0) + 1);

            if (window.get(c) === target.get(c)) matches++;
            else if (window.get(c) === target.get(c) + 1) matches--;

            if (R - L + 1 > s1.length) {
                const old = s2[L++];

                if (window.get(old) === target.get(old)) matches--;

                window.set(old, window.get(old) - 1);

                if (window.get(old) === target.get(old)) matches++;
            }

            if (R - L + 1 === s1.length && matches === target.size)
                return true;
        }

        return false;
    }
}
