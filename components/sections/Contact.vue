<template>
  <div
    v-view.once="onceInViewHandler"
    class="contact" >

    <div class="contact__wrapper">
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

    <div class="section__content">

      <a
        href="mailto:office@wearepm.co"
        class="touch-link">
        <span
          class="touch-link__text"
          v-html="ctaText" />
      </a>

    </div>

    <div class="section__footer">
      <div class="help">
        <p class="font-weight-bold">Click "Touch" and say hi.</p>
        <p>Follow us on <a href="#">Instagram</a>, <a href="#">Facebook</a>, or <a href="#">LinkedIn</a> to stay up to date.</p>
      </div>
    </div>

  </div>
</template>

<script>
import { TimelineMax } from 'gsap'

export default {
  name: 'Contact',

  data() {
    return {
      overline: 'Contact',
      title: 'Get in',
      text: '',
      ctaText: 'Touch'
    }
  },

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 20vh;
  padding-bottom: 20vh;

  .contact__wrapper {
    display: flex;
    flex-direction: column;
    text-align: left;
    // color: $body-color;

    .contact__title {
      font-size: 2rem;
      padding-top: 2rem;
      padding-bottom: 2rem;
      margin: 0;
      font-weight: 600;
    }

    .contact__text {
      font-size: 20px;
      margin: 0;
    }
  }
}

// ---

.touch-link {
  display: inline-block;
  position: relative;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.2s linear;
  cursor: pointer;
  color: inherit;
}

.touch-link__text {
  display: block;
  margin-bottom: 0;
  font-size: 6rem;
  line-height: 0.75;
  letter-spacing: -1rem;

  @include media-breakpoint-up(md) {
    font-size: 11rem;
  }

  @include media-breakpoint-up(lg) {
    font-size: 13rem;
  }

  @include media-breakpoint-up(xl) {
    font-size: 16rem;
  }
}

.section__content {
  padding: 1rem 0 6rem;

  @include media-breakpoint-up(md) {
    padding: 2rem 0 8rem;
  }

  @include media-breakpoint-up(lg) {
    padding: 5rem 0 10rem;
  }
}

.section__footer {
  padding-left: 12rem;

  .help {
    max-width: 300px;
    font-size: 0.875rem;
    line-height: 1.4;
  }
}
</style>
