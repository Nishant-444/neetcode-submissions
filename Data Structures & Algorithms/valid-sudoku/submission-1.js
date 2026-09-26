class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // 1. Initialize OUTSIDE the loops
        const cols = Array(9).fill(0).map(() => new Set());
        const rows = Array(9).fill(0).map(() => new Set());
        const squares = Array(9).fill(0).map(() => new Set());

        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                const val = board[row][col];

                // 2. Handle Empty Cells (Skip them)
                if (val === '.' || val === 0) continue;

                const boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);

                // 3. Check for duplicates
                if (rows[row].has(val) || cols[col].has(val) || squares[boxIndex].has(val)) {
                    return false;
                }

                // 4. Update state
                rows[row].add(val);
                cols[col].add(val);
                squares[boxIndex].add(val);
            }
        }

        return true;
    }
}
