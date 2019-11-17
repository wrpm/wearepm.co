<template>
  <div class="app-theme">
    <button
      ref="switch"
      class="switch"
      @click="toggleTheme"
      v-html="label" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AppTheme',

  computed: {
    ...mapGetters([
      'isLight'
    ]),

    label() {
      return this.isLight ? 'Dark mode' : 'Light mode'
    },

    cssVars() {
      const BLACK = '#000000'
      const WHITE = '#ffffff'
      // backgrund
      const BG = '#fafafa'
      // foreground
      const FG = '#0e0e0e'

      return {
        '--body-color': this.isLight ? FG : BG,
        '--body-bg': this.isLight ? BG : FG,
        '--white': this.isLight ? WHITE : BLACK,
        '--black': this.isLight ? BLACK : WHITE
      }
    }
  },

  methods: {
    toggleTheme() {
      this.$store.commit('TOGGLE', 'isLight')
      this.setStyles()
    },

    setStyles() {
      const docEl = document.documentElement
      const cssVars = this.cssVars
      const cssString = Object.keys(cssVars)
        .map(key => `${key}: ${cssVars[key]};`)
        .join(' ')
      // console.log('[AppTheme] cssVars', cssString)
      docEl.setAttribute('style', cssString)
    }
  }
}
</script>

<style lang="scss" scoped>
.app-theme {
  margin-bottom: 1rem;
  pointer-events: auto;

  .switch {
    cursor: pointer;
    border-radius: 0;
    background-color: transparent;
    border: none;
    padding: 0;
    outline: none;
  }

  .switch {
    text-transform: uppercase;
    letter-spacing: 0.25px;
    font-size: 10px;
    letter-spacing: 0.5px;
    text-decoration: none;
    color: var(--body-color, $body-color);
  }
}
</style>
