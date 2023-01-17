const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '**********': ' ',
};

function decode(expr) {
    let arr = []
    for (let i = 0; i < expr.length; i++) {
        arr.push(expr[i])
        if (arr.length % 10 === 0) arr[i] = arr[i] + '-'
    }
    arr = arr.join('').split('-')
    arr.length = arr.length - 1
    arr = arr.map(el => {
        let arrDigits = []
        for (let i = 0; i < el.length; i = i + 2) {
            arrDigits.push(+(el[i] + el[i + 1]))
        }
        return arrDigits.filter(e => e).map(e => e === 11 ? '-' : e === 10 ? '.' : '')
    })
    return arr
        .map(el => el.join(''))
        .map(el => el.length === 0 ? ' ' : MORSE_TABLE[el])
        .join('')
}

module.exports = {
    decode
}
