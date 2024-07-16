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
};

let m = [];
let str = []
let dec = [];
let res = [];
let end1 = []
let eee = ''
let bk = ''
let sl = []
let pr = ''


function decode(expr) {
    m = expr.split('**********')


    pr = ''

    for (let i = 0; i < m.length; i++) {
        res = m[i].split('')

        sl = []

        for (let j = res.length; res.length !== 0; j--) {
            str = res.splice(0, 10)


            dec = []

            for (let y = 0; y <= str.length; y++) {
                end1 = str.splice(0, 2).join('')

                if (end1 === '10') {
                    dec.push('.')
                } else if (end1 === '11') {
                    dec.push('-')
                }

            }
            eee = str.join('')

            if (eee === '10') {
                dec.push('.')
            } else if (eee === '11') {
                dec.push('-')
            }

            bk = dec.join('')


            for (let key in MORSE_TABLE) {
                if (key === bk) {
                    sl.push(MORSE_TABLE[key])
                }

            }

        }
        pr += ` ${sl.join('')}`

    }

    return pr.trim();
}


module.exports = {
    decode
}
