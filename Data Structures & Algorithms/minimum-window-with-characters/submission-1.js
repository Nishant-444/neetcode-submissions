class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length || !t) return "";

        const count = new Map();
        const window = new Map();

        for (const c of t) {
            count.set(c, (count.get(c) || 0) + 1);
        }

        let have = 0, need = count.size;
        let L = 0, resL = 0, resLen = Infinity;

        for (let R = 0; R < s.length; R++) {
            const c = s[R];
            window.set(c, (window.get(c) || 0) + 1);

            if (count.has(c) && window.get(c) === count.get(c)) {
                have++;
            }

            while (have === need) {
                if (R - L + 1 < resLen) {
                    resL = L;
                    resLen = R - L + 1;
                }

                const left = s[L];
                window.set(left, window.get(left) - 1);

                if (count.has(left) && window.get(left) < count.get(left)) {
                    have--;
                }

                L++;
            }
        }

        return resLen === Infinity ? "" : s.substring(resL, resL + resLen);
    }
}
