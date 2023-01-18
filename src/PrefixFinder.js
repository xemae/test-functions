// 1
//O n*m = array.length * string.length
// const getPrefix = (prefix, string) => {
//     let result = ''
//
//     for (
//         let i = 0, j = 0;
//         i < prefix.length && j < string.length;
//         i++, j++
//     ) {
//         if (prefix[i] !== string[j]) {
//             break
//         }
//         result += prefix[i]
//     }
//     return result
// }
//
// const getLongestPrefix = (array) => {
//     let prefix = array[0]
//     for (let i = 1; i < array.length; i++) {
//         prefix = getPrefix(prefix, array[i])
//     }
//     return prefix
// }

// 2
// const getPrefix = (prefix, string) => {
//     let result = ''
//
//     for (
//         let i = 0, j = 0;
//         i < prefix.length && j < string.length;
//         i++, j++
//     ) {
//         if (prefix[i] !== string[j]) {
//             break
//         }
//         result += prefix[i]
//     }
//     return result
// }

function getLongestPrefix(array) {
    array.sort()
    const minLength = Math.min(array[0].length, array[array.length - 1].length)
    let i = 0
    while (i < minLength && array[0][i] === array[array.length - 1][i]) {
        i++
    }

    return array[0].substring(0, i)
}

const arr = ['abc123', 'abcd123', 'abcde123', 'abcdef123', 'abcdefg123']

console.log(
    getLongestPrefix(arr)
)

