// рекурсия
function pow (x, n) {
    return (n === 1) ? x : (x * pow(x, n-1))
}

console.log(pow(2, 3))

//факториал
function factorial (n) {
    return n != 1 ? n * factorial(n-1) : 1
}

console.log(5)

// //n-число фибоначчи - рекурсия вычисляет повторно одни и те же числа
// function fibonacci (n) {
//         if (n === 1) {return 0}
//         if (n === 2) {return 1}
//         else {
//             return fibonacci(n - 1) + fibonacci(n - 2)
//         }
// }
//
// console.log(fibonacci(5))
// console.log(fibonacci(44))

// n-число фибоначчи циклом
function fib (n) {
    let a = 0
    let b = 1
    for (let i = 3; i <= n; i++) {
        let c = a + b
        a = b
        b = c
    }
    return b
}

console.log(fib(77))