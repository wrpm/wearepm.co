<template>
  <img
    class="image-trail__img"
    :src="src"
    :alt="alt" />
</template>

<script>
import { TweenMax, TimelineMax } from 'gsap'

export default {
  name: 'ImageTrailImage',

  data: () => ({
    rect: null,
    defaultStyle: {
      scale: 1,
      x: 0,
      y: 0,
      opacity: 0
    }
  }),

  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    }
  },

  mounted () {
    this.preloadImage()
      .then(() => {
        this.getRect()
      })

    this.getRect()
    this.initEvents()
  },

  methods: {
    initEvents () {
      // on resize get updated sizes/position
      window.addEventListener('resize', () => this.resize())
    },

    resize() {
      // reset styles
      TweenMax.set(this.$el, this.defaultStyle)
      // get sizes/position
      this.getRect()
    },

    preloadImage () {
      return new Promise(resolve => {
        const image = new Image()
        image.addEventListener('load', () => {
          // console.log('[ImageTrailImage] images loaded', image)
          resolve(image);
        })
        image.src = `http://127.0.0.1:3000${this.src}`
      })
    },

    getRect () {
      this.rect = this.$el.getBoundingClientRect()
    },

    isActive () {
      // check if image is animating or if it's visible
      return TweenMax.isTweening(this.$el) || this.$el.style.opacity !== 0
    },

    showImage(mousePos, cacheMousePos, zIndexVal) {
      // kill any tween on the image
      TweenMax.killTweensOf(this.$el)

      new TimelineMax()
        // show the image
        .set(this.$el, {
            startAt: {opacity: 0, scale: 1},
            opacity: 1,
            scale: 1,
            zIndex: zIndexVal,
            x: cacheMousePos.x - this.rect.width/2,
            y: cacheMousePos.y - this.rect.height/2
        }, 0)
        // animate position
        .to(this.$el, 0.9, {
            ease: Expo.easeOut,
            x: mousePos.x - this.rect.width/2,
            y: mousePos.y - this.rect.height/2
        }, 0)
        // then make it disappear
        .to(this.$el, 1, {
            ease: Power1.easeOut,
            opacity: 0
        }, 0.4)
        // scale down the image
        .to(this.$el, 1, {
            ease: Quint.easeOut,
            scale: 0.2
        }, 0.4);
    }
  }


}
</script>

<style lang="scss" scoped>
.image-trail__img {
  position: absolute;
  top: 0;
  left: 0;
	max-width: 320px;
	opacity: 0;
	will-change: transform;
}
</style>
