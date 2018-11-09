<template>
  <div class="intro" v-view.once="onceInViewHandler">
    <div class="intro__wrapper">
      <base-section-label :label="overline" ref="label">
        <small class="line muted" ref="labelSmall">
          or short <abbr title="We Are PM">WRPM</abbr> (pronounced /wi ɑr ˈpiˈɛm/)
        </small>
      </base-section-label>
      <h1 class="intro__title" ref="title">
        <span class="line">Strategy.</span>
        <span class="line">Design.</span>
        <span class="line red">Development.</span>
      </h1>
      <p class="intro__text" ref="description" v-html="text" />
    </div>
  </div>
</template>

<script>
import {TimelineMax} from 'gsap'

export default {
  name: 'intro',

  data () {
    return {
      overline: 'Hello, We Are PM',
      title: 'Digital Agency',
      text: ''
    }
  },

  mounted () {
    this.initAnimation()
    this.playAnimation()
  },

  methods: {
    initAnimation () {
      const self = this

      const titleLines = self.$refs.title.querySelectorAll('.line')

      const els = [
        self.$refs.label.$refs.text,
        self.$refs.labelSmall,
        // self.$refs.title
        ...titleLines
        // self.$refs.description
      ]

      self.$timeline = new TimelineMax({ paused: true, delay: 0.7 })

      self.$timeline
        .staggerFrom(els, 0.8, {
          y: 40,
          autoAlpha: 0,
          ease: 'Power1.easeOut',
          clearProps: 'all'
        }, 0.15)
        .from(self.$refs.label.$refs.line, 0.5, {
          scaleX: 0,
          ease: 'Power1.easeOut',
          onStart: function () {
            this.target.style.transformOrigin = 'left center'
          },
          onComplete: function () {
            this.target.removeAttribute('style')
          }
        }, 0.4)
    },

    playAnimation () {
      this.$timeline.play()
    },

    onceInViewHandler () {
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
    color: $body-color;

    .intro__title {
      padding-top: 1rem;
      padding-bottom: 1rem;
      margin: 0;
      font-size: 2rem;
      font-weight: 600;
      line-height: 1;

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
        &.red {
          color: rgb(240, 15, 30);
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
