// функция принимает 2 объекта с разными ключами, некоторые из которых могут пересекаться
// вернуть 1й объект с обновленными значениями из 2 объекта (только те, которые совпадают)

function renovator(obj1, obj2) {
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)
    for (let i = 0; i < keys1.length; i++) {
        let key1 = keys1[i]
        for (let n = 0; n < keys2.length; n++) {
            let key2 = keys2[n]
            if (key1 === key2) {
                obj1[key1] = obj2[key2]
            }
        }
    }
    return console.log(obj1)
}

//при помощи for in
function renovator2(obj1, obj2) {
    for (let key in obj1) {
        if (obj2.hasOwnProperty(key)) {
            obj1[key] = obj2[key]
        }
    }
    return console.log(obj1)
}

const obj1 = {
    color: 'red',
    size: 46,
    name: 'dress',
    sex: 'female'
}

const obj2 = {
    size: 42,
    color: 'black',
    name: 'dress',
    when: '05.04.2023'
}

renovator(obj1, obj2)
renovator2(obj1, obj2)