import themesJson from '@/data/themes.json'

// STATE -----------------------------------------------------------------------

export const state = () => ({
  isLight: true,

  // default values
  defaults: themesJson.defaults,

  // all themes
  themes: themesJson.themes,

  defaultTheme: themesJson.themes['wrpmLight'],
  activeTheme: themesJson.themes['wrpmLight']
})

// GETTERS ---------------------------------------------------------------------

export const getters = {
  isLight: state => state.isLight,

  // get default theme vaules
  defaults: state => state.defaults,

  // get all themes
  themes: state => state.themes,

  wrpmThemes: state => {
    return Object.values(state.themes).filter(theme => theme.tag === 'wrpm')
  },

  colorThemes: state => {
    return Object.values(state.themes).filter(theme => theme.tag === 'color')
  },

  // get theme by key
  theme: state => key => (key in state.themes ? state.themes[key] : undefined),

  // get default theme
  defaultTheme: (state, getters) => getters.theme(state.defaultTheme),

  // get active theme
  activeTheme: state => state.activeTheme
}

// MUTTATIONS ------------------------------------------------------------------

export const mutations = {
  SET_THEME: (state, theme) => {
    state.activeTheme = Object.assign({}, state.defaults, theme)
  }
}

// ACTIONS  --------------------------------------------------------------------

export const actions = {
  SET_THEME({ commit, getters }, key) {
    let theme = getters.theme(key)
    if (theme) {
      commit('SET_THEME', theme)
    } else {
      console.warn('[THEME STORE] Trying to set undefined theme')
    }
  },

  SET_RANDOM_THEME({ commit, getters, dispatch }) {
    let colorThemes = getters.colorThemes
    let randomThemeIndex = Math.floor(Math.random() * colorThemes.length)
    let randomTheme = colorThemes[randomThemeIndex]
    // dispatch('SET_THEME', randomTheme)
    commit('SET_THEME', randomTheme)
  }
}
