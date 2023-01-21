//числа по порядку, одно убрали и перемешали массив. Найти пропавший элемент

function arrayThief (arrStart, arrEnd, steal) {
    let array = []

    for(arrStart; arrStart <= arrEnd; arrStart++) {
        array.push(arrStart)
    }

    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
        [array[i], array[j]] = [array[j], array[i]];
    }

    array.splice(array.indexOf(steal), 1)

    return (
        console.log(array),
        array
    )
}


function stolenNumberFinder (array) {
    let sum = 0
    let idealSum = 0
    array.sort((a, b) => a - b)
    let arrStart = array[0]
    const arrEnd = array[array.length - 1]

    // сумма массива, полученного при вызове функции
    for (let i = 0; i < array.length; i++) {
                sum += array[i]
    }

    // сумма массива, если бы случайное число не изъяли
    let idealArray = []
    for(arrStart; arrStart <= arrEnd; arrStart++) {
        idealArray.push(arrStart)
    }
    for (let i = 0; i < idealArray.length; i++) {
        idealSum += idealArray[i]
    }

    return console.log('пропавшее число = ' + (idealSum - sum))
}


//делаем рандомизированный массив без одного числа
const testArray = arrayThief(-200, 400, 58)
//ищем отсутствующее число
stolenNumberFinder(testArray)