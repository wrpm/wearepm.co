<template>
  <div
    class="image-trail">
    <ImageTrailImage
      v-for="(imageObj, index) in images"
      :key="index"
      ref="image"
      :src="imageObj.src"
      :alt="imageObj.alt" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import _shuffle from 'lodash/shuffle'
import ImageTrailImage from './ImageTrailImage'
// import imagesData from '@/data/ImageTrail.json'
import allTrailImages from '@/data/imageTrail'

// helper functions
const MathUtils = {
  // linear interpolation
  lerp: (a, b, n) => (1 - n) * a + n * b,
  // distance between two points
  distance: (x1,y1,x2,y2) => Math.hypot(x2-x1, y2-y1)
}

export default {
  name: 'ImageTrail',

  components: {
    ImageTrailImage
  },

  data: () => ({
    clientRect: {},

    // cacheMousePos: previous mouse position
    cacheMousePos: {x: 0, y: 0},
    // lastMousePos: last last recorded mouse position (at the time the last image was shown)
    lastMousePos: {x: 0, y: 0},

    // upcoming image index
    imgPosition: 0,
    // zIndex value to apply to the upcoming image
    zIndexVal: 1,
    // mouse distance required to show the next image
    threshold: 100
  }),

  computed: {
    ...mapState('interactive', [
      'mousePos'
    ]),

    images () {
      let images = Object.values(allTrailImages)
        .reduce((acc, val) => [...acc, ...val], [])

      return _shuffle(images)
    },

    imagesTotal () {
      return this.images.length
    }
  },

  mounted () {
    this.clientRect = this.$el.getBoundingClientRect()

    this.cacheMousePos = this.lastMousePos = this.mousePos
    // render the images
    requestAnimationFrame(() => this.animate())
    // this.$nextTick(this.animate)
  },

  beforeDestroy () {

  },

  methods: {
    offsetMousePos () {
      return {
        x: this.mousePos.x - this.clientRect.x,
        y: this.mousePos.y
      }
    },
    // handleMouseMove (ev) {
    //   this.mousePos = this.getMousePos(ev)
    // },

    // get the mouse position
    // getMousePos (ev) {
    //   let posx = 0
    //   let posy = 0
    //   if (!ev) ev = window.event
    //   if (ev.pageX || ev.pageY) {
    //     posx = ev.pageX
    //     posy = ev.pageY
    //   }
    //   // else if (ev.clientX || ev.clientY) 	{
    //   //   posx = ev.clientX + body.scrollLeft + docEl.scrollLeft
    //   //   posy = ev.clientY + body.scrollTop + docEl.scrollTop
    //   // }
    //   return {
    //     x: posx,
    //     y: posy
    //   }
    // },

    // gets the distance from the current mouse position to the last recorded mouse position
    getMouseDistance () {
      return MathUtils.distance(
        this.mousePos.x,
        this.mousePos.y,
        this.lastMousePos.x,
        this.lastMousePos.y
      )
    },

    animate () {
      // get distance between the current mouse position and the position of the previous image
      let distance = this.getMouseDistance()

      // cache previous mouse position
      this.cacheMousePos.x = MathUtils.lerp(this.cacheMousePos.x || this.mousePos.x, this.mousePos.x, 0.1)
      this.cacheMousePos.y = MathUtils.lerp(this.cacheMousePos.y || this.mousePos.y, this.mousePos.y, 0.1)

      // if the mouse moved more than [this.threshold] then show the next image
      if ( distance > this.threshold ) {
        this.showNextImage()

        ++this.zIndexVal
        this.imgPosition = this.imgPosition < this.imagesTotal-1 ? this.imgPosition + 1 : 0

        this.lastMousePos = this.mousePos
      }

      // check when mousemove stops and all images are inactive (not visible and not animating)
      let isIdle = true
      for (let imgComp of this.$refs.image) {
        if ( imgComp.isActive() ) {
            isIdle = false
            break
        }
      }

      // reset z-index initial value
      if ( isIdle && this.zIndexVal !== 1 ) {
          this.zIndexVal = 1
      }

      // loop..
      requestAnimationFrame(() => this.animate())
      // this.$nextTick(this.animate)
    },

    showNextImage() {
      // show image at position [this.imgPosition]
      const imgComp = this.$refs.image[this.imgPosition]
      // console.log('[ImageTrail] showNextImage', imgComp)
      imgComp.showImage(this.mousePos, this.cacheMousePos, this.zIndexVal)
    }
  }


}
</script>

<style lang="scss" scoped>
.image-trail {
  position: relative;
  isolation: isolate;
  min-height: 100%;
}
</style>
