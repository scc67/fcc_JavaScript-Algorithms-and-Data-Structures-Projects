function convertToRoman(num) {
    const one = 'X'
    const five = 'L'
    const ten = 'C'

    function createRomanPart(oneRoman, fiveRoman, tenRoman) {
        if (num === 0) {
            return ''
        } else if (num <= 3) {
            return oneRoman.repeat(num);
        } else if (num === 4) {
            return oneRoman + fiveRoman
        } else if (num === 5) {
            return fiveRoman;
        } else if (num <= 8) {
            return fiveRoman + oneRoman.repeat(num - 5);
        } else if (num === 9) {
            return oneRoman + tenRoman;
        }
    }
    let roman = createRomanPart(one, five, ten)

    return roman;
}

console.log(convertToRoman(1));
console.log(convertToRoman(2));
console.log(convertToRoman(3));
console.log(convertToRoman(4));
console.log(convertToRoman(5));
console.log(convertToRoman(6));
console.log(convertToRoman(7));
console.log(convertToRoman(8));
console.log(convertToRoman(9));
console.log(convertToRoman(0));