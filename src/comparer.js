function comparer (obj1, obj2) {
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)

    //важен порядок свойств
    if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
        return true
    }

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let i = 0; i < keys1.length; i +=1) {

        const prop = keys1[i];
        const bothAreObjects = typeof(obj1[prop]) === 'object' && typeof(obj2[prop]) === 'object';
        const bothAreArray = Array.isArray(obj1[prop]) && Array.isArray(obj2[prop]) ;

        if (
            (!bothAreObjects || (bothAreObjects && !comparer(obj1[prop], obj2[prop])))
            || (!bothAreArray || (bothAreArray && !comparer(obj1[prop], obj2[prop]))
        )
            )
            return false
    }

    return true;
}


const a = {
    a: 'abc',
    b: 1,
    c: [
        [[1],[2],[3]],
        {
            a: 'abc1',
            b: 'abc2',
            c: 'abc3',
            d: [2, 3]
        },
        {
            a: 'abc4',
            b: 'abc5',
            c: 'abc6',
        },
    ]
}

const b = {
    a: 'abc',
    b: 1,
    c: [
        // [1,2,3]
        {
            a: 'abc1',
            b: 'abc2',
            c: 'abc3',
            d: [2, 3]
        },
        {
            a: 'abc4',
            b: 'abc5',
            c: 'abc6'
        },
        [[1],[2],[3]]
        ]
}

console.log(comparer(a, b))

// console.log(isEqual(a, b));
