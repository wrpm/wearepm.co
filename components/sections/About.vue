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
    title: '<em>An Independent</em> <br>Web Development Agency',
    text:
      "WRPM is a Belgrade based small creative agency focused on web design and web development. Although we are a young agency, between us we have 50+ years of experience. We approach every client’s project as if it is our own, striving to achieve memorable user experiences and long-lasting relationships."
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

      self.$timeline = new TimelineMax({
        paused: true,
        delay: 0.7
      })

      self.$timeline
        .staggerFrom(els, 0.8, {
          y: 40,
          autoAlpha: 0,
          ease: 'Power1.easeOut',
          clearProps: 'all'
        }, 0.15 )
        .from(self.$refs.label.$refs.line, 0.5, {
          scaleX: 0,
          ease: 'Power1.easeOut',
          onStart: function() {
            this.target.style.transformOrigin = 'left center'
          },
          onComplete: function() {
            this.target.removeAttribute('style')
          }
        }, 0.4 )
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
</style>
