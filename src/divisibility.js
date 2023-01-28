// Завершите функцию, которая принимает два аргумента и возвращает все числа, которые делятся на данный делитель.
// Первый аргумент - это массив чисел, а второй - делитель.

function divisibleBy (numbers, divisor) {
    return numbers.filter((i) => i % divisor === 0)
    }

    const array = [1, 2, 3, 4, 5, 6, 9, 12, 13, 15, 18, 19, 20]
    console.log(divisibleBy(array, 3))