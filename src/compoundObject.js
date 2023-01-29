//реализовать функцию, которая принимает 2 параметра: массив значений и колбэк, по результату которого будут
// группироваться значения
// arr = [4.3, 7.2, 7.1]
// callbackFunc = Math.Floor
// result = {
//     '4': [4.3],
//     '7': [7.2, 7.1]
// }

function compoundObject(arr, compounder) {
    const result = {}
    arr.forEach(item => {
        const newResult = compounder(item)
        result[newResult]
            ? result[newResult].push(item)
            : result[newResult] = [item]
    })
    return console.log(result)
}

let array = [4.3, 7.2, 7.1, 4, 4.25]
const func = (n) => Math.floor(n)

compoundObject(array, func)

