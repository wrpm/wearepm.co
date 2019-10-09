<template>
  <div
    v-view.once="onceInViewHandler"
    class="intro2">
    <div class="intro__wrapper">
      <h2
        ref="title"
        class="intro__title">
        <span class="line">Strategy.</span>
        <span class="line">Design.</span>
        <span class="line red">Development.</span>
      </h2>
    </div>
  </div>
</template>

<script>
import { TimelineMax } from 'gsap'

export default {
  name: 'Intro2',

  data: () => ({}),

  mounted() {
    this.initAnimation()
    this.playAnimation()
  },

  methods: {
    initAnimation() {
      const self = this

      const titleLines = self.$refs.title.querySelectorAll('.line')

      const els = [...titleLines]

      self.$timeline = new TimelineMax({
        paused: true,
        delay: 0.7
      })

      self.$timeline.staggerFrom(
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.intro2 {
  height: calc(100vh);
  display: flex;
  flex-direction: column;
  justify-content: center;

  .intro__wrapper {
    display: flex;
    flex-direction: column;
    text-align: left;

    .intro__title {
      padding-top: 1rem;
      padding-bottom: 1rem;
      margin: 0;
      font-size: 2rem;
      font-weight: 600;
      line-height: 1.2;

      @include media-breakpoint-up(md) {
        padding-top: 2rem;
        padding-bottom: 2rem;
        font-size: 4rem;
      }

      @include media-breakpoint-up(xl) {
        padding-top: 3rem;
        padding-bottom: 3rem;
        font-size: 6rem;
      }

      span {
        display: block;
        text-decoration: underline;

        &.red {
          color: var(--primary, $primary);
        }
      }
    }
  }
}
</style>
