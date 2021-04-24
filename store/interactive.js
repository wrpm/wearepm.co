// STATE -----------------------------------------------------------------------

export const state = () => ({
  mousePos: { x: 0, y: 0 }
})

// GETTERS ---------------------------------------------------------------------

export const getters = {
  /**
   * Generic getter
   *
   * @example
   * ```
   * this.$store.getters['getState']('isMenuOpen')
   * ```
   *
   * @param  {String} prop [description]
   * @return {Mixed}
   */
  getState: state => prop => (prop in state ? state[prop] : undefined)
}

// MUTTATIONS ------------------------------------------------------------------

export const mutations = {
  /**
   * SET
   * Generic mutation
   *
   * @example
   * ```
   * this.$store.commit('SET_STATE', {
   *  prop: 'isMenuOpen',
   *  value: true
   * })
   * ```
   */
  SET_STATE: (state, { prop, value }) => {
    state[prop] = value
  },

  /**
   * TOGGLE
   * Generic mutation
   *
   * @example
   * ```
   * this.$store.commit('TOGGLE', 'isMenuOpen')
   * ```
   */
  TOGGLE: (state, key) => {
    state[key] = !state[key]
  }
}

// ACTIONS  --------------------------------------------------------------------

export const actions = {
  SET_STATE({ commit }, obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        commit('SET_STATE', { prop: key, value: obj[key] })
      }
    }
  }
}
