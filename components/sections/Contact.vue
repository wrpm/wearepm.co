<template>
  <section
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
          <ContactInfo />
        </div>

      </div>
    </div>

  </section>
</template>

<script>
import { TimelineMax } from 'gsap'
import ContactInfo from '@/components/contact/ContactInfo'

export default {
  name: 'Contact',

  components: {
    ContactInfo
  },

  data: () => ({
    overline: 'Contact',
    title: 'Get in',
    ctaText: 'Touch'
  }),

  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 4rem;
  padding-bottom: 4rem;

  @include media-breakpoint-up(md) {
    padding-top: 20vh;
    padding-bottom: 10vh;
  }

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

  @include media-breakpoint-up(md) {
    font-size: 11rem;
    letter-spacing: -1rem;
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
  font-size: 0.875rem;
  line-height: 1.4;

  @include media-breakpoint-up(md) {
    margin-left: 12rem;
    max-width: 300px;
  }

  .help-touch {
    position: relative;
    font-weight: $font-weight-bold;

    &:before {
      content: "\2191\2191\2191"; // upward arrow
      position: absolute;
      top: -2rem;
      left: 0;
      font-size: 1.25rem;
      font-weight: 400;
      letter-spacing: -1px;
      animation: moveArrows 1s infinite  alternate;

      @include media-breakpoint-up(md) {
        top: 0;
        left: -5rem;
        animation: moveArrows 1s infinite  alternate;
      }
    }
  }

  .help-follow {
    a {
      color: inherit;
      text-decoration: underline;
    }
  }
}

.col-touch {
  flex: 1;
  margin-bottom: 4rem;

  @include media-breakpoint-up(md) {
    margin-bottom: 0;
  }
}

.col-info {

  @include media-breakpoint-up(md) {
    margin-left: auto;
  }
}

@keyframes moveArrows {
  0% { transform: translateY(0); }
  100% { transform: translateY(-10px); }
}
</style>
