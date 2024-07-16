// 1. Berilgan matnda katta va kichik harflarning sonini toping
// function countCase(str) {
//     // Code here
// }
// console.log(countCase("Hello World!")); // {uppercase: 2, lowercase: 8}



function toUpperAndLowercase() {
    let helloStr = "Hello World!"
    let uppercase = 0
    let lowercase = 0
    let strSpl = helloStr.split("")

    strSpl.forEach(element => {
        if (element >= "a" && element <= "z") {
            lowercase++
        } else if (element >= "A" && element <= "Z") {
            uppercase++
        }
    });

    console.log(`So'zda ${lowercase} ta kichkina harf bor`)
    console.log(`So'zda ${uppercase} ta katta harf bor`)


}
// toUpperAndLowercase()





// 2. Berilgan massivdagi juft va toq indekslardagi elementlarning yig'indisini alohida-alohida hisoblang.
// function evenOddIndexSums(arr) {
//     // Code here
// }
// console.log(evenOddIndexSums([1, 2, 3, 4, 5, 6])); // {evenIndexSum: 9, oddIndexSum: 12}


let arr = [1, 2, 3, 4, 5, 6]
function evenOddIndexSums() {

    let result = arr.filter(num => num % 2 == 0);
    let result1 = arr.filter(num => num % 2 !== 0);

    let evenIndexSum = result1.reduce((a, b) => a + b, 0)
    let oddIndexSum = result.reduce((a, b) => a + b, 0)

    console.log("evenIndexSum: " + evenIndexSum)
    console.log("oddIndexSum: " + oddIndexSum)
}
// evenOddIndexSums()






// 3. Berilgan matritsani soat strelkasiga qarama-qarshi yo'nalishda 90 daraja aylantiring.



// function rotateMatrix(matrix) {
//     // Code here
// }
// console.log(rotateMatrix));
//  [3, 6, 9],
//  [2, 5, 8],
//  [1, 4, 7]
// ]

let matrixArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]


let res = [];

for (let i = 0; i < matrixArr.length; i++) {
    let sum = []
    for (let j = 0; j < matrixArr.length; j++) {
        sum.push(matrixArr[j][i]);
    }
    res.push(sum);
}

// console.log(res.reverse())







// 4. Berilgan qator ichidagi barcha bo'shliqlarni olib tashlang.

// console.log(removeSpaces("Hello World! How are you?")); // "HelloWorld!Howareyou?"



let str = "Hello World! How are you?"
let strjoin = str.split(" ").join("")

function removeSpaces(str) {
    console.log(strjoin)
}
// removeSpaces(str)








// 5. Berilgan ikki qatorning anagramma ekanligini tekshiring

// function areAnagrams(str1, str2) {
//     // Code here
// }

// console.log(areAnagrams("listen", "silent")); // true
// console.log(areAnagrams("hello", "world")); // false



// 6. Berilgan massivdagi eng ko'p takrorlangan elementni toping.

let mostArr = [1, 3, 2, 1, 4, 1, 3, 1, 5, 1]
for (let i = 0; i < array.length; i++) {
    
    
}
console.log(mostArr)

// 7. Berilgan qator ichidagi barcha raqamlarning yig'indisini hisoblang.

let digitStr = "abc123def45"

function sumOfDigits() {
    let filterArr = digitStr.split("").filter(index => !isNaN(index))
    let total = filterArr.reduce((a, b) => a + +b, 0)
    console.log(total)
}
// sumOfDigits()






// 8. Berilgan qator ichidagi har bir harfning chastotasini hisoblang.


