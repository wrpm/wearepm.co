<template>
  <div class="app-theme">
    <button
      ref="switch"
      class="switch"
      v-html="label"
      @click="toggleTheme" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AppTheme',

  data: () => ({
    isLight: true,
    activeThemeIndex: 0
  }),

  computed: {
    ...mapGetters('theme', [
      'themes',
      'activeTheme'
    ]),

    themeKeys() {
      return this.themes.keys()
    },

    label() {
      return this.isLight ? 'Dark mode' : 'Light mode'
    },

    cssVars() {
      return {
        '--primary': this.activeTheme.primary,
        '--body-color': this.activeTheme.foreground,
        '--body-bg': this.activeTheme.backgrund
      }
    },
  },

  watch: {
    activeTheme: function (val) {
      this.isLight = val.isLight
      this.setStyles()
    }
  },

  methods: {
    setDarkTheme() {
      this.$store.dispatch('theme/SET_THEME', 'wrpmDark')
    },

    setLightTheme() {
      this.$store.dispatch('theme/SET_THEME', 'wrpmLight')
    },

    toggleTheme() {
      if (this.isLight) {
        this.setDarkTheme()
      } else {
        this.setLightTheme()
      }
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
