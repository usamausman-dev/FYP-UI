const keys = [
    {
        unicode: '0x0627',
        ascii: '97',
        eng: 'a',
        ur: 'ALIF'
    },
    {
        unicode: '0x0622',
        ascii: '65',
        eng: 'A',
        ur: 'ALMAD'
    },
    {
        unicode: '0x0628',
        ascii: '98',
        eng: 'b',
        ur: 'BAY'
    },
    {
        unicode: '0x067E',
        ascii: '112',
        eng: 'p',
        ur: 'PAY'
    },
    {
        unicode: '0x062A',
        ascii: '116',
        eng: 't',
        ur: 'TAY'
    },
    {
        unicode: '0x0679',
        ascii: '84',
        eng: 'T',
        ur: 'TTAY'
    },
    {
        unicode: '0x062B',
        ascii: '67',
        eng: 'C',
        ur: 'SAY'
    },
    {
        unicode: '0x062C',
        ascii: '106',
        eng: 'j',
        ur: 'JEEM'
    },
    {
        unicode: '0x0686',
        ascii: '99',
        eng: 'c',
        ur: 'CHAY'
    },
    {
        unicode: '0x062D',
        ascii: '72',
        eng: 'H',
        ur: 'HAY'
    },
    {
        unicode: '0x062E',
        ascii: '75',
        eng: 'K',
        ur: 'KHAY'
    },
    {
        unicode: '0x062F',
        ascii: '100',
        eng: 'd',
        ur: 'DAL'
    },
    {
        unicode: '0x0688',
        ascii: '68',
        eng: 'D',
        ur: 'DDAL'
    },
    {
        unicode: '0x0630',
        ascii: '90',
        eng: 'Z',
        ur: 'ZAL'
    },
    {
        unicode: '0x0631',
        ascii: '114',
        eng: 'r',
        ur: 'RAY'
    },
    {
        unicode: '0x0691',
        ascii: '82',
        eng: 'R',
        ur: 'RRAY'
    },
    {
        unicode: '0x0632',
        ascii: '122',
        eng: 'z',
        ur: 'ZAY'
    },
    {
        unicode: '0x0698',
        ascii: '88',
        eng: 'X',
        ur: 'XAY'
    },
    {
        unicode: ' 0x0633',
        ascii: '115',
        eng: 's',
        ur: 'SEEN'
    },
    {
        unicode: '0x0634',
        ascii: '120',
        eng: 'x',
        ur: 'SHEEN'
    }, {
        unicode: '0x0635',
        ascii: '83',
        eng: 'S',
        ur: 'SAAD'
    }, {
        unicode: '0x0636',
        ascii: '74',
        eng: 'J',
        ur: 'ZAAD'
    }, {
        unicode: '0x0637',
        ascii: '118',
        eng: 'v',
        ur: 'TOAY'
    }, {
        unicode: '0x0638',
        ascii: '86',
        eng: 'V',
        ur: 'ZOAY'
    }, {
        unicode: '0x0639',
        ascii: '101',
        eng: 'e',
        ur: 'AIN'
    },
    {
        unicode: '0x063A',
        ascii: '71',
        eng: 'G',
        ur: 'GHAIN'
    },
    {
        unicode: '0x0641',
        ascii: '102',
        eng: 'f',
        ur: 'FAY'
    },
    {
        unicode: '0x0642',
        ascii: '113',
        eng: 'q',
        ur: 'QAAF'
    },
    {
        unicode: '0x06A9',
        ascii: '107',
        eng: 'k',
        ur: 'KAAF'
    },
    {
        unicode: '0x06AF',
        ascii: '103',
        eng: 'g',
        ur: 'GAAF'
    },
    {
        unicode: '0x0644',
        ascii: '108',
        eng: 'l',
        ur: 'LAAM'
    },
    {
        unicode: '0x0645',
        ascii: '109',
        eng: 'm',
        ur: 'MEEM'
    },
    {
        unicode: '0x0646',
        ascii: '110',
        eng: 'n',
        ur: 'NOON'
    },
    {
        unicode: '0x06BA',
        ascii: '78',
        eng: 'N',
        ur: 'NOONG'
    },
    {
        unicode: '0x0648',
        ascii: '119',
        eng: 'w',
        ur: 'WAO'
    },
    {
        unicode: '0x0624',
        ascii: '',
        eng: '',
        ur: 'WAOHAMZ'
    },
    {
        unicode: '0x06C1',
        ascii: '111',
        eng: 'o',
        ur: 'HAA'
    }, {
        unicode: '0x0621',
        ascii: '117',
        eng: 'u',
        ur: 'HAMZA'
    }, {
        unicode: '0x0626',
        ascii: '85',
        eng: 'U',
        ur: 'HAMCY' //Hamza on chootee yay
    }, {
        unicode: '0x06CC',
        ascii: '105',
        eng: 'i',
        ur: 'CHOTIYA'
    },
    {
        unicode: '0x06D2',
        ascii: '121',
        eng: 'y',
        ur: 'BARRIYA'
    },
    {
        unicode: '0x06BE',
        ascii: '104',
        eng: 'h',
        ur: 'DCHASHMI'
    },


    /*Unicode Digits*/
    {
        unicode: '0x6F0',
        ascii: '48',
        eng: '0',
        ur: 'ZERO'
    },
    {
        unicode: '0x6F1',
        ascii: '49',
        eng: '1',
        ur: 'ONE'
    },
    {
        unicode: '0x6F2',
        ascii: '50',
        eng: '2',
        ur: 'TWO'
    },
    {
        unicode: '0x6F3',
        ascii: '51',
        eng: '3',
        ur: 'THREE'
    },
    {
        unicode: '0x6F4',
        ascii: '52',
        eng: '4',
        ur: 'FOUR'
    },
    {
        unicode: '0x6F5',
        ascii: '53',
        eng: '5',
        ur: 'FIVE'
    },
    {
        unicode: '0x6F6',
        ascii: '54',
        eng: '6',
        ur: 'SIX'
    },
    {
        unicode: 'SEVEN',
        ascii: '55',
        eng: '7',
        ur: '0x6F7'
    },
    {
        unicode: '0x6F8',
        ascii: '56',
        eng: '8',
        ur: 'EIGHT'
    },
    {
        unicode: '0x6F9',
        ascii: '57',
        eng: '9',
        ur: 'NINE'
    },

    /*Unicode Arabic Mathematical Symbols*/
    {
        unicode: '0x002B',
        ascii: '43',
        eng: '+',
        ur: 'PLUS'
    },
    {
        unicode: '0x002D',
        ascii: '45',
        eng: '-',
        ur: 'MINUS'
    },
    {
        unicode: '0x00D7',
        ascii: '42',
        eng: '*',
        ur: 'MUL'
    },
    {
        unicode: '0x00F7',
        ascii: '47',
        eng: '/',
        ur: 'DIV'
    },
    {
        unicode: '0x066A',
        ascii: '37',
        eng: '%',
        ur: 'PERC'
    },
    {
        unicode: '0x0028',
        ascii: '41',
        eng: ')',
        ur: 'LPREN'
    },
    {
        unicode: '0x0029',
        ascii: '40',
        eng: '(',
        ur: 'RPREN'
    },
    {
        unicode: '',
        ascii: '61',
        eng: '=',
        ur: 'EQUAL'
    },



    /*Unicode Arabic Aarab Symbols*/
    {
        unicode: '0x064F',
        ascii: '96',
        eng: 'P',
        ur: 'PAISH'
    },
    {
        unicode: '0x0650',
        ascii: '',
        eng: '',
        ur: 'ZAIR'
    },
    {
        unicode: '0x064E',
        ascii: '',
        eng: '',
        ur: 'ZABAR'
    },
    {
        unicode: '0x064C',
        ascii: '',
        eng: '',
        ur: 'DOPAISH '
    },
    {
        unicode: '0x064D',
        ascii: '',
        eng: '',
        ur: 'DOZAIR'
    },
    {
        unicode: '0x064B',
        ascii: '',
        eng: '',
        ur: 'DOZABAR'
    },
    {
        unicode: '0x0652',
        ascii: '',
        eng: '',
        ur: 'GAZM'
    },
    {
        unicode: '0x06E4',
        ascii: '',
        eng: '',
        ur: 'MAD'
    },
    {
        unicode: '0x0651',
        ascii: '',
        eng: '',
        ur: 'SHAD'
    },
    {
        unicode: '0xFC62',
        ascii: '',
        eng: '',
        ur: 'SHADZAIR'
    },
    {
        unicode: '0xFC61',
        ascii: '',
        eng: '',
        ur: 'SHADPAISH'
    },
    {
        unicode: '0x0674',
        ascii: '',
        eng: '',
        ur: 'HIHAMZA'
    },
    {
        unicode: '0x0670',
        ascii: '',
        eng: '',
        ur: 'KHARIZAB'
    },


    /*Unicode Arabic Punctuations*/
    {
        unicode: '0x2019',
        ascii: '47',
        eng: '/',
        ur: 'RSQOTMRK'
    },
    {
        unicode: '0x2018',
        ascii: '92',
        eng: "",   //   '\'
        ur: 'LSQOTMRK'
    },
    {
        unicode: '0x201D',
        ascii: '34',
        eng: '"',
        ur: 'RDQOTMRK'
    },
    {
        unicode: '0x201C',
        ascii: '',
        eng: '',
        ur: 'LDQOTMRK'
    },
    {
        unicode: '0x06D4',
        ascii: '46',
        eng: '.',
        ur: 'FULSTOP'
    },
    {
        unicode: '0x061F',
        ascii: '63',
        eng: '?',
        ur: 'AQMARK'
    },
    {
        unicode: '0x061B',
        ascii: '59',
        eng: ';',
        ur: 'ASEMICOL'
    },
    {
        unicode: '0x060C',
        ascii: '44',
        eng: ',',
        ur: 'ACOMA'
    },
    {
        unicode: '0x0021',
        ascii: '33',
        eng: '!',
        ur: 'NOT'
    },
    {
        unicode: '0x0022',
        ascii: '',
        eng: '',
        ur: 'QUOT'
    }
]

export default keys;