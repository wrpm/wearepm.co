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
          class="d-block text-muted">
          or short <abbr title="We Are PM">WRPM</abbr> (pronounced /wi ɑr ˈpiˈɛm/)
        </small>
      </base-section-label>
      <h1
        ref="title"
        class="intro__title">
        <span class="line">Strategy.</span>
        <span class="line">Design.</span>
        <span class="line red">Development.</span>
      </h1>
      <p
        ref="description"
        class="intro__text"
        v-html="text" />
    </div>
  </div>
</template>

<script>
import { TimelineMax } from 'gsap'

export default {
  name: 'Intro',

  data() {
    return {
      overline: 'Hello, We Are PM',
      title: 'Digital Agency',
      text: ''
    }
  },

  mounted() {
    this.initAnimation()
    this.playAnimation()
  },

  methods: {
    initAnimation() {
      const self = this

      const titleLines = self.$refs.title.querySelectorAll('.line')

      const els = [
        self.$refs.label.$refs.label,
        self.$refs.labelSmall,
        // self.$refs.title
        ...titleLines
        // self.$refs.description
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.intro {
  height: calc(100vh - #{$app-padding * 2});
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
      font-weight: 400;
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
          color: theme-color('primary');
        }
      }
    }

    .intro__text {
      font-size: 20px;
      margin: 0;
    }
  }
}
</style>
