function AnagrammChecker(data1, data2) {
    function equalizer(word) {
        return word.split('').sort().join('').toUpperCase().replace(/ /g, '')
    }

    if (equalizer(data1) === equalizer(data2)) {
        return data1 + " анаграмма для " + data2
    } else return (data1 + " не анаграмма для " + data2)

}

console.log(AnagrammChecker(' кот', 'ток'))
console.log(AnagrammChecker('кот', 'сок'))
console.log(AnagrammChecker('Кот', 'ток'))

