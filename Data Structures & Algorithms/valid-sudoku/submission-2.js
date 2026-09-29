class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = new Array(9).fill(0);
        let cols = new Array(9).fill(0);
        let squares = new Array(9).fill(0);

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] === ".") continue;

                let val = board[r][c] - "1";

                if (
                    rows[r] & (1 << val) ||
                    cols[c] & (1 << val) ||
                    squares[Math.floor(r / 3) * 3 + Math.floor(c / 3)] & (1 << val)
                )
                    return false;

                rows[r] |= 1 << val;
                cols[c] |= 1 << val;
                squares[Math.floor(r / 3) * 3 + Math.floor(c / 3)] |= 1 << val;
            }
        }
        return true;
    }
}
