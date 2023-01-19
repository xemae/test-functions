function PalindromFinder (data) {

const text = data.toString().toLowerCase().replace(/\s|[{(<.,?/|!@#$%^&*>_=+"')}-]/g, '')
    const revert = text.split('').reverse().join('')
    if (revert === text) {
        return data + ' - палиндром'
    } else return data + ' - не палиндром'
}


console.log(PalindromFinder('text'))
console.log(PalindromFinder('ololo'))
console.log(PalindromFinder('Ololol olo'))
console.log(PalindromFinder('Olol ol olo'))
console.log(PalindromFinder('Olol ol olo'))
console.log(PalindromFinder('Olol-ol| olo'))
console.log(PalindromFinder(100))
console.log(PalindromFinder(1001))
