// Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива.

function sumOfSquare (array) {
       return array.filter(el => el % 2 === 0).reduceRight((accumulator, el) => accumulator + Math.sqrt(el), 0)
}
//0 - значение для аккумулятора по умолчанию

const arr = [1, 36, 7, 5, 36, 4, 13]

console.log(sumOfSquare(arr))