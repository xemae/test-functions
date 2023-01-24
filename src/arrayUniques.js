function arrayUnique (arr) {
    arr.sort((a,b) => a-b)
    let arrUniques = [arr[0]]
    // arrUniques.push(arr[0])

    for (let i=1; i < arr.length; i++) {
        if (arr[i] !== arr[i-1]) {
            arrUniques.push(arr[i])
        }
    }
    return arrUniques
}

const array = [1, 1, 2, 2, 2, 3, 4, 5, 4, 6, 7, 8, 10, 9, 9]
console.log(arrayUnique(array))