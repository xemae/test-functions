//Реализовать функцию, которая будет суммировать числа и выводить в логи
//sum(5)(4)(11)
//result log
//5
//9
//20

function sum(n) {
    console.log(n)
    return function (a) {
        return(sum(n+a))
    }

}

sum(5)(4)(11)(12)