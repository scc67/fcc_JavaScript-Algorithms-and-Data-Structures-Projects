function convertToRoman(number) {
    let romanNumber = '';
    let one = '';
    let five = '';
    let ten = '';
    let num = 0;
    for (let i = 0; i < number.toString().length; i++) {
        if (i === number.toString().length - 1) {
            one = 'I'
            five = 'V'
            ten = 'X'
        } else if (i === number.toString().length - 2) {
            one = 'X'
            five = 'L'
            ten = 'C'
        } else if (i === number.toString().length - 3) {
            one = 'C'
            five = 'D'
            ten = 'M'
        } else if (i === number.toString().length - 4) {
            one = 'M'
            five = '-'
            ten = '_'
        }
        num = Number(String(number).charAt(i));

        function createRomanPart(oneRoman, fiveRoman, tenRoman, numRoman) {
            if (numRoman === 0) {
                return ''
            } else if (numRoman <= 3) {
                return oneRoman.repeat(numRoman);
            } else if (numRoman === 4) {
                return oneRoman + fiveRoman
            } else if (numRoman === 5) {
                return fiveRoman;
            } else if (numRoman <= 8) {
                return fiveRoman + oneRoman.repeat(numRoman - 5);
            } else if (numRoman === 9) {
                return oneRoman + tenRoman;
            }
        }
        romanNumber = romanNumber + createRomanPart(one, five, ten, num)
    }
    return romanNumber;

}

// console.log(convertToRoman(111));
// console.log(convertToRoman(222));
// console.log(convertToRoman(333));
// console.log(convertToRoman(444));
// console.log(convertToRoman(555));
// console.log(convertToRoman(666));
// console.log(convertToRoman(777));
// console.log(convertToRoman(888));
console.log(convertToRoman(2902));
console.log(convertToRoman(3206));