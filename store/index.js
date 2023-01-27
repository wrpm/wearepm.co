import capabilitiesJson from '@/data/capabilities.json'
import processStepsJson from '@/data/process-steps.json'

// STATE -----------------------------------------------------------------------

export const state = () => ({
  // app
  isLight: true,

  // content
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
      name: 'Linkedin',
      title: 'Connect with us on LinkedIn',
      text: 'LinkedIn',
      icon: 'linkedin.svg',
      url: 'https://www.linkedin.com/company/wrpm/'
    }
  ],
  selectedWork: [
    {
      title: 'Samsung',
      url: 'https://gigatron.rs/samsung',
      subtitle:
        'Shop-In-Shop Platform'
    },
    {
      title: 'New Startegy',
      url: 'http://newstartegy.com/',
      subtitle:
        'Website and illustrations for business design consulting company'
    },
    {
      title: 'Studio Direction',
      url: 'https://direction.studio',
      subtitle:
        'Website development for design studio'
    },
    {
      title: 'PhiAcademy',
      url: 'http://phi-academy.com/',
      subtitle:
        'Designed by Studio Direction. Developed by WRPM'
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

  isLight: state => state.isLight,

  capabilities: state => state.capabilities,
  processSteps: state => state.processSteps,
  socialProfiles: state => state.socialProfiles,
  selectedWork: state => state.selectedWork
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
