
class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let row = this.binarySearchRow(
            0, matrix.length - 1, target, matrix
        );

        if (row < 0) return false;

        let col = this.binarySearch(
            0, matrix[row].length - 1, target, matrix[row]
        );

        return col >= 0;
    }

    binarySearchRow(left, right, target, matrix) {
        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);

            if (target < matrix[mid][0]) {
                right = mid - 1;
            } else if (target > matrix[mid][matrix[mid].length - 1]) {
                left = mid + 1;
            } else {
                return mid;
            }
        }

        return -1;
    }

    binarySearch(left, right, target, row) {
        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);

            if (row[mid] > target) {
                right = mid - 1;
            } else if (row[mid] < target) {
                left = mid + 1;
            } else {
                return mid;
            }
        }

        return -1;
    }
}
