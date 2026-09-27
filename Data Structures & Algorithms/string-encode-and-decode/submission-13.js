class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = "";
        for (let string of strs) {
            encodedString += string.length + "#" + string;
        }
        return encodedString;
        // ["hello", "world"] => "5#hello5#world"
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // "5#hello5#world" => ["hello", "world"]
        let i = 0;
        let res = [];
        while (i < str.length) {
            let j = i;
            let length = "";
            while (str[j] !== "#") {
                length += str[j];
                j++;
            }
            let intLength = parseInt(length);
            i = j + 1;
            j = i + intLength;
            let string = str.substring(i, j);


            res.push(string);

            i = j;
        }
        return res;
    }
}
