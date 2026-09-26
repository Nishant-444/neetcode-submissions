class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let L = 0, R = s.length - 1;
        while (L < R) {
            if (
                !((s.charAt(L) >= '0' && s.charAt(L) <= '9') ||
                    (s.charAt(L) >= 'A' && s.charAt(L) <= 'Z') ||
                    (s.charAt(L) >= 'a' && s.charAt(L) <= 'z'))
            ) { L++; continue; }
            if (
                !((s.charAt(R) >= '0' && s.charAt(R) <= '9') ||
                    (s.charAt(R) >= 'A' && s.charAt(R) <= 'Z') ||
                    (s.charAt(R) >= 'a' && s.charAt(R) <= 'z'))
            ) { R--; continue; }

            if (s.charAt(L).toLowerCase() != s.charAt(R).toLowerCase()) {
                return false;
            }
            L++;
            R--;
        }
        return true;
    }
}
