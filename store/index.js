import capabilitiesJson from '~/data/capabilities.json'
import processStepsJson from '~/data/process-steps.json'

// STATE -----------------------------------------------------------------------

export const state = () => ({
  capabilities: capabilitiesJson,
  processSteps: processStepsJson,
  socialProfiles: [
    {
      name: 'Facebook',
      title: 'Follow us on Facebook',
      text: 'Facebook',
      icon: 'facebook.svg',
      url: 'https://www.facebook.com/wearepmco/'
    },
    {
      name: 'Instagram',
      title: 'Follow us on Instagram',
      text: 'Instagram',
      icon: 'instagram.svg',
      url: 'https://www.instagram.com/wearepmco/'
    },
    {
      name: 'Behance',
      title: 'Follow us on Behance',
      text: 'Behance',
      icon: 'behance.svg',
      url: 'https://www.behance.net/wrpm'
    },
    {
      name: 'LinkedIn',
      title: 'Connect with us on LinkedIn',
      text: 'LinkedIn',
      icon: 'linkedin.svg',
      url: 'https://www.linkedin.com/company/wrpm/'
    }
  ]
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
  getState: state => prop => (prop in state ? state[prop] : undefined),

  capabilities: state => state.capabilities,
  processSteps: state => state.processSteps,
  socialProfiles: state => state.socialProfiles
}

// MUTTATIONS ------------------------------------------------------------------

export const mutations = {
  /**
   * Generic mutation
   *
   * @example
   * ```
   * this.$store.commit('SET_STATE', {
   *  prop: 'isMenuOpen',
   *  value: true
   * })
   * ```
   *
   * @param  {String} prop [description]
   * @return {Mixed}
   */
  SET_STATE: (state, { prop, value }) => {
    state[prop] = value
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
