<template>
  <div
    v-view.once="onceInViewHandler"
    class="about">
    <div class="process__wrapper">
      <base-section-label
        ref="label"
        :label="overline"/>
      <base-section-title
        ref="title"
        :title="title" />
      <base-section-text
        ref="description"
        :text="text" />

      <div class="trail-wrapper"/>
    </div>
  </div>
</template>

<script>
import { TimelineMax } from 'gsap'

export default {
  name: 'About',

  components: {},

  data: () => ({
    overline: 'Who we are?',
    title: 'An Independent Creative Studio',
    text:
      "We're collaborators by nature and we work side by side with customers who trust us, we believe in working <em>with</em> you rather than <em>for</em> you."
  }),

  computed: {},

  mounted() {
    this.initAnimation()
  },
  methods: {
    initAnimation() {
      const self = this

      const els = [
        self.$refs.label.$refs.label,
        self.$refs.title,
        self.$refs.description
      ]

      self.$timeline = new TimelineMax({ paused: true, delay: 0.7 })

      self.$timeline
        .staggerFrom(
          els,
          0.8,
          {
            y: 40,
            autoAlpha: 0,
            ease: 'Power1.easeOut',
            clearProps: 'all'
          },
          0.15
        )
        .from(
          self.$refs.label.$refs.line,
          0.5,
          {
            scaleX: 0,
            ease: 'Power1.easeOut',
            onStart: function() {
              this.target.style.transformOrigin = 'left center'
            },
            onComplete: function() {
              this.target.removeAttribute('style')
            }
          },
          0.4
        )
    },

    playAnimation() {
      this.$timeline.play()
    },

    onceInViewHandler() {
      this.playAnimation()
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  padding-top: 20vh;
  padding-bottom: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.trail-wrapper {
  height: 100vh;
}
</style>
