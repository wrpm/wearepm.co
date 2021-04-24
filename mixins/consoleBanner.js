
// EMOJIS
// @SEE https://unicode.org/emoji/charts/full-emoji-list.html
const C_WAVE = String.fromCodePoint(0x1F44B)
const C_NERD = String.fromCodePoint(0x1F913)
const C_CHECK = String.fromCodePoint(0x2705)
const C_FLAME = String.fromCodePoint(0x1F525)
const C_BUG = String.fromCodePoint(0x1F41E)
const C_BULB = String.fromCodePoint(0x1F4A1)
const C_SWEAR = String.fromCodePoint(0x1F92C)

// ASCII ART
const A_LOGO = `
'##:::::'##:'########::'########::'##::::'##:
 ##:'##: ##: ##.... ##: ##.... ##: ###::'###:
 ##: ##: ##: ##:::: ##: ##:::: ##: ####'####:
 ##: ##: ##: ########:: ########:: ## ### ##:
 ##: ##: ##: ##.. ##::: ##.....::: ##. #: ##:
 ##: ##: ##: ##::. ##:: ##:::::::: ##:.:: ##:
. ###. ###:: ##:::. ##: ##:::::::: ##:::: ##:
:...::...:::..:::::..::..:::::::::..:::::..::
`

const consoleBanner = {

  data: () => ({
    rules: {
      first: `The first rule about fight club is you don't talk about fight club.`,
      second: `The second rule about fight club is you don't talk about fight club.`
    }
  }),

  watch: {
    rules: {
      deep: true,
      handler (newVal, oldVal) {
        console.log('data.rules changed', newVal, oldVal)
      }
    }
  },

  created () {
    if (process.server) return

    this.printAsciiLogo()
    this.printGreetings()
    // this.printLink()

    if (window) {
      window.showRules = this.printRules
      window.hint = this.printHint
    }
  },

  methods: {
    printAsciiLogo () {
      console.log(A_LOGO)
    },

    printGreetings () {
      console.log(`%c${C_WAVE} Greetings Buster! ${C_NERD}`, `
        font-size: 20px;
        font-weight: bold;
        text-transform: uppercase;
        background-color: #000;
        color: #fff;
        padding: 8px 12px;
      `)
    },

    printHint () {
      console.log(`${C_SWEAR} the rules`)
    },

    printRules () {
      console.log(`${C_CHECK} ${this.rules.first}`)
      console.log(`${C_CHECK} ${this.rules.second}`)
      console.log(`${C_BUG} But the most important rule of fight club is: ...`)
    }
  }
}

export default consoleBanner
