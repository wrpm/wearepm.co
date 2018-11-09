<template>
  <div class="contact" v-view.once="onceInViewHandler" >
    <div class="contact__wrapper">
      <base-section-label :label="overline" ref="label"/>
      <base-section-title :title="title" ref="title" />
      <base-section-text :text="text" ref="description" />
    </div>
    <div class="section__content">
      <a href="mailto:office@wearepm.co" class="c-watch_title_wrapper">
        <span class="c-watch_title -main">
        {{ctaText}}
        </span>
        <span class="c-watch_title -delayed" data-speed="3.1" data-position="middle" style="transform: translate3d(0px, 42.16px, 0px);">
        {{ctaText}}
        </span>
        <span class="c-watch_title -delayed" data-speed="2.3" data-position="middle" style="transform: translate3d(0px, 31.28px, 0px);">
        {{ctaText}}
        </span>
        <span class="c-watch_title -delayed" data-speed="1.3" data-position="middle" style="transform: translate3d(0px, 17.68px, 0px);">
        {{ctaText}}
        </span>
      </a>
    </div>
    <div class="section__footer">
      <div class="help">
      <p>Click "touch" and say hi.</p>
      <p>Follow us on Instagram, Facebook, or LinkedIn to stay up to date.</p>
      </div>
    </div>
  </div>
</template>

<script>
import {TimelineMax} from 'gsap'

export default {
  name: 'contact',

  data () {
    return {
      overline: 'Contact',
      title: 'Get in',
      text: '',
      ctaText: 'Touch'
    }
  },

  mounted () {
    this.initAnimation()
  },

  methods: {
    initAnimation () {
      const self = this

      const els = [
        self.$refs.label.$refs.text,
        self.$refs.title,
        self.$refs.description
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
    color: $body-color;

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

.c-watch_title_wrapper {
  display: block;
  color: #fff;
  position: relative;
  // font-family: "Neue Haas Grotesk",sans-serif;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.2s linear;
  cursor: pointer;

  &:hover {
    color: rgb(240, 15, 30);
  }
}

.c-watch_title {
  display: block;
  line-height: .75;
  margin-bottom: 0;
  background-color: #000;
  pointer-events: none;
  // text-transform: uppercase;
}

.c-watch_title {
  font-size: 6rem;
  letter-spacing: -1rem;
  pointer-events: none;

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

.c-watch_title.-main {
  position: relative;
  z-index: 10;
  pointer-events: none;
}

.c-watch_title.-delayed {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 0;
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
  .help {
    max-width: 300px;
    font-size: 0.875rem;
    line-height: 1.4;
  }
}

</style>
