function convertToRoman2(number) {
    let romanNumber = '';
    let romanArray = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let decimalArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    for (let i = 0; i < romanArray.length; i++) {
        while (decimalArray[i] <= number) {
            romanNumber += romanArray[i]
            number -= decimalArray[i]
        }

    }

    return romanNumber;

}

console.log(convertToRoman2(111));
console.log(convertToRoman2(222));
console.log(convertToRoman2(333));
console.log(convertToRoman2(444));
console.log(convertToRoman2(555));
console.log(convertToRoman2(666));
console.log(convertToRoman2(777));
console.log(convertToRoman2(888));
console.log(convertToRoman2(2902));
console.log(convertToRoman2(3206));