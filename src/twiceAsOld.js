// Ваша функция принимает два аргумента: текущий возраст отца (лет), текущий возраст сына (лет)
// Подсчитайте, сколько лет назад отец был вдвое старше сына (или через сколько лет он будет вдвое старше).

function twiceAsOld (son, parent) {
    if (son > parent) return "Son cannot be older than father"
    if (parent < 12) return "Are you sure the parent is that young?"

    let old = (parent - son) * 2

    if (old >= parent) return "через " + (old - parent) + " лет"
    if (old < parent) return (parent - old) + " лет назад"
}

console.log(twiceAsOld(21, 41))