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
    </div>

    <div class="section__content">

      <div class="row">
        <div class="col-touch">
          <a
            href="mailto:office@wearepm.co"
            class="touch-link">
            <span
              class="touch-link__text"
              v-html="ctaText" />
          </a>

          <div class="help">
            <p class="help-touch">Click "Touch" and say hi.</p>
            <p class="help-follow">Follow us on <a href="#">Instagram</a>, <a href="#">Facebook</a>, or <a href="#">LinkedIn</a> to stay up to date.</p>
          </div>

        </div>

        <div class="col-info">
          <div class="info">
            <div class="info-block">
              <h5 class="info-title">WRPM DOO</h5>
              <p>Bulevar kralja Aleksandra 124 / 6<br>11000 Belgrade, Serbia</p>
              <a
                href="#"
                title="">Find us on map</a>
            </div>

            <div class="info-block">
              <h5 class="info-title">Phone</h5>
              <p>
                <a
                  href="tel:+381604206043"
                  title="call us">+381 60 4206043</a>
              </p>
            </div>

            <div class="info-block">
              <h5 class="info-title">General</h5>
              <p>
                <a
                  href="mailto:office@wearepm.co"
                  title="call us">office@wearepm.co</a>
              </p>
            </div>

            <div class="info-block">
              <h5 class="info-title">New Business</h5>
              <p>
                <a
                  href="mailto:new@wearepm.co"
                  title="call us">new@wearepm.co</a>
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import { TimelineMax } from 'gsap'

export default {
  name: 'Contact',

  data: () => ({
    overline: 'Contact',
    title: 'Get in',
    ctaText: 'Touch'
  }),

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
  }
}

// ---

.touch-link {
  display: inline-block;
  position: relative;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s linear;
  cursor: pointer;
  color: inherit;

  &:hover {
    color: var(--primary, $primary);
  }
}

.touch-link__text {
  display: block;
  margin-bottom: 0;
  font-size: 25vw;
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
  padding-top: 1rem;

  @include media-breakpoint-up(md) {
    padding-top: 1.5rem;
  }

  @include media-breakpoint-up(lg) {
    padding-top: 2rem;
  }
}

.help {
  margin-top: 6rem;
  margin-left: 5rem;
  max-width: 300px;
  font-size: 0.875rem;
  line-height: 1.4;

  @include media-breakpoint-up(md) {
    margin-left: 12rem;
  }

  .help-touch {
    position: relative;
    font-weight: $font-weight-bold;

    &:before {
      content: "\2191\2191\2191"; // upward arrow
      position: absolute;
      left: -5rem;
      font-size: 1.25rem;
      font-weight: 400;
      letter-spacing: -1px;
      animation: moveArrows 1s infinite  alternate;
    }
  }

  .help-follow {}
}

.col-touch {
  flex: 1;
}

.col-info {
  margin-left: auto;
}

.info {
  .info-block {
    margin-bottom: 1.5rem;
    font-size: $font-size-sm;
  }

  .info-title {
    text-transform: uppercase;
    font-size: $font-size-sm;
    color: var(--black, $black);
  }

  p {
    margin-bottom: 0.5rem;
  }

  a {
    color: var(--body-color, $body-color);
    text-decoration: underline;
  }
}

@keyframes moveArrows {
  0% { transform: translateY(0); }
  100% { transform: translateY(-10px); }
}
</style>
