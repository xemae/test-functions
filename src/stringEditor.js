//Дана функция, она принимает в качестве аргументов строки '*', '1', 'b', '1c',
// реализуйте ее так, что бы она вернула строку '1*b*1c'

// function separate (separator, a, b, c) {
//     const args = [a, b, c]
//     return args.join(separator)
// }
// console.log(separate('*', '1', 'b', '1c'))

function getStr() {
    return [].slice.call(arguments, 1).join(arguments[0])
}

console.log(getStr('*', '1', 'b', '1c', '5d'))
