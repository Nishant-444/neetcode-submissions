class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let left = 0;
        let right = matrix.length - 1;
        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);
            let element = matrix[mid][0];

            if (element > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        let row = right;
        if (row < 0 || target > matrix[row][matrix[row].length - 1]) {
            return false;
        }
        let top = 0;
        let bottom = matrix[row].length - 1;
        while (top <= bottom) {
            let mid = top + Math.floor((bottom - top) / 2);
            let element = matrix[row][mid];

            if (element > target) {
                bottom = mid - 1;
            } else if (element < target) {
                top = mid + 1;
            } else return true;
        }
        return false;
    }
}
