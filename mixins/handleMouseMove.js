const handleMouseMove = {
  mounted () {
    this.mouseMoveHandler()
    window.addEventListener('mousemove', this.mouseMoveHandler)
  },

  methods: {
    mouseMoveHandler (event = {}) {
      const self = this
      let posX = 0
      let posY = 0

      if (event && 'clientX' in event) {
        posX = event.clientX
        posY = event.clientY
      }

      self.$store.dispatch('interactive/SET_STATE', {
        mousePos: {
          x: posX,
          y: posY
        }
      })
    }
  }
}

export default handleMouseMove
