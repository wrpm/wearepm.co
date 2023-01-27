<template>
  <div
    v-view.once="onceInViewHandler"
    class="intro">
    <div class="intro__wrapper">
      <base-section-label
        ref="label"
        :label="overline">
        <small
          ref="labelSmall"
          class="pronunciation d-block">
          or short <abbr title="We Are PM">WRPM</abbr> (pronounced /wi ɑr ˈpiˈɛm/)
        </small>
      </base-section-label>
      <h1
        ref="title"
        class="intro__title"
        v-html="headline" />
    </div>
  </div>
</template>

<script>
import { TimelineMax } from 'gsap'

export default {
  name: 'Intro',

  data: () => ({
    overline: '00 ——— Hello, We Are PM',
    headline: 'Designing and building superior digital products & experiences'
  }),

  mounted() {
    this.initAnimation()
    this.playAnimation()
  },

  methods: {
    initAnimation() {
      const self = this

      // const titleLines = self.$refs.title.querySelectorAll('.line')

      const els = [
        self.$refs.label.$refs.label,
        self.$refs.labelSmall,
        self.$refs.title
      ]

      self.$timeline = new TimelineMax({
        paused: true,
        delay: 0.7
      })

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.intro {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .intro__wrapper {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-top: auto;
    margin-bottom: 30vh;

    @include media-breakpoint-up(md) {
      margin-top: 0;
      margin-bottom: 0;
    }

    .intro__title {
      padding-top: 1rem;
      padding-bottom: 1rem;
      margin: 0;
      font-size: 2rem;
      font-weight: 400;
      line-height: 1.2;
      text-decoration: underline;

      @include media-breakpoint-up(md) {
        padding-top: 2rem;
        padding-bottom: 2rem;
        font-size: 3rem;
      }

      @include media-breakpoint-up(xl) {
        padding-top: 3rem;
        padding-bottom: 3rem;
        font-size: 4rem;
      }
    }

    .intro__text {
      font-size: 20px;
      margin: 0;
    }

    .pronunciation {
      color: var(--body-color, $body-color);
      opacity: 0.72;
    }
  }
}
</style>
