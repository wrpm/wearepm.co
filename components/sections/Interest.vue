<template>
  <section
    v-view.once="onceInViewHandler"
    class="interest">
    <div class="interest__wrapper">
      <base-section-label
        ref="label"
        :label="overline"/>
      <base-section-title
        ref="title"
        :title="title" />
      <base-section-text
        ref="description"
        :text="text" />
      <div class="interest__content">
        <div class="project-box row">
          <div class="col-lg-6 project-box--column">
            <div class="col-media col-media--top">
              <picture>
                <source
                  srcset="/interest/optimized/realestate.webp"
                  type="image/webp"
                  media="(min-width: 800px)">
                <source
                  srcset="/interest/optimized/realestate.jpg"
                  type="image/jpg"
                  media="(min-width: 800px)">
                <source
                  srcset="/interest/optimized/realestate@sm.webp"
                  type="image/webp">
                <img
                  src="/interest/optimized/realestate@sm.jpg"
                  alt="Residential building">
              </picture>
            </div>
          </div>
          <div class="col-lg-6 project-box--column">
            <div class="col-content">
              <span class="label">Project</span>
              <h3 class="title">Real Estate /<br>Property <br>Development</h3>
              <p class="text">We are extremely interested to work with property developers and real estate agencies on industry leading digital realty presentations.</p>
            </div>
          </div>
        </div>
        <div class="project-box row align-items-strech">

          <div class="col-lg-6 order-lg-2 project-box--column">
            <div class="col-media">
              <picture>
                <source
                  srcset="/interest/optimized/configurator.webp"
                  type="image/webp"
                  media="(min-width: 800px)">
                <source
                  srcset="/interest/optimized/configurator.jpg"
                  type="image/jpg"
                  media="(min-width: 800px)">
                <source
                  srcset="/interest/optimized/configurator@sm.webp"
                  type="image/webp">
                <img
                  src="/interest/optimized/configurator@sm.jpg"
                  alt="Custom build bicycle" >
              </picture>
            </div>
          </div>

          <div class="col-lg-6 order-lg-1 project-box--column">
            <div class="col-content col-content--gray">
              <span class="label">Project</span>
              <h3 class="title">Product <br>Configurator</h3>
              <p class="text">We want to expand the experience we had with projects like BrandInColor, and move the bar higher with next project.</p>
            </div>
          </div>
        </div>
        <div class="stripes"/>
      </div>
    </div>
  </section>
</template>

<script>
import { TimelineMax } from 'gsap'

export default {
  name: 'Interest',
  data() {
    return {
      overline: 'What are we looking for?',
      title: 'Projects of<br/> interest in 2019',
      text: ''
    }
  },

  mounted() {
    this.initAnimation()
  },

  methods: {
    initAnimation() {
      const self = this

      const els = [
        self.$refs.label.$refs.text,
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
.interest {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 20vh;
  padding-bottom: 20vh;

  .interest__wrapper {
    display: flex;
    flex-direction: column;
    text-align: left;
    color: $body-color;
  }
}

// --

.interest__content {
  padding: 4rem 0;
  position: relative;
  // margin-left: -5%;
  // margin-right: -5%;
}

.project-box {
  display: flex;
  flex-direction: row;
  margin: 0;
  margin-top: 10vh;

  &:first-child {
    margin-top: 0;
  }

  @include media-breakpoint-up(md) {
    // margin-top: 0;
    width: 75%;
  }

  @include media-breakpoint-up(lg) {
    margin-top: 0;
    width: 100%;
  }

  .project-box--column {
    padding: 0;
  }

  .col-media {
    overflow: hidden;
    position: relative;
    background: #ccc;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  // .col-media--top {
  //   &:after {
  //     content: ' ';
  //     position: absolute;
  //     left: 100%;
  //     top: 100%;
  //     width: 100vh;
  //     height: 100vh;
  //     border-radius: 50%;
  //     background: rgba(0,0,0,0.2);
  //     transform: translate(-50%, -50%);
  //   }
  // }

  .col-content {
    padding: $app-padding;
    // background: rgb(240, 15, 30);
    background: #da2b1b;
    color: #e1e1e1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;

    &.col-content--gray {
      background: #d0d0d0;
      color: #000;

      .label {
        border-top: 1px solid #000;
      }
    }

    // @include media-breakpoint-up(md) {
    //   padding: 3rem;
    // }
  }

  .label {
    display: block;
    padding-top: 0.5rem;
    border-top: 1px solid #e1e1e1;
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-size: 0.875rem;
    letter-spacing: 0.05em;
    font-weight: 600;

    // @include media-breakpoint-up(md) {
    //   font-size: 0.8rem;
    // }
  }

  .title {
    font-size: 1.5rem;
    // margin: 1rem 0 auto;

    @include media-breakpoint-up(lg) {
      // font-size: 2rem;
      // margin: 1rem 0 auto;
    }

    @include media-breakpoint-up(xl) {
      font-size: 2rem;
      margin: 1rem 0 auto;
    }
  }

  .text {
    margin: 1rem 0 0 0;
    font-size: 0.875rem;

    @include media-breakpoint-up(xl) {
      // font-size: 0.8rem;
      max-width: 75%;
    }
  }
}

.stripes {
  background-image: linear-gradient(90deg, #d0d0d0 40%, #000 40%, #000);
  background-size: 10px 10px;
  animation: barberpole-body-case 8s linear infinite;
  width: 50%;
  height: 20vh;
  left: 50%;
  position: relative;

  @include media-breakpoint-up(md) {
    position: absolute;
    bottom: 4rem;
    right: 0;
    left: auto;
    width: 25%;
    height: 10%;
  }

  @include media-breakpoint-up(lg) {
    position: relative;
    width: 50%;
    left: 50%;
    height: 10rem;
    bottom: auto;
    right: auto;
  }
}

@keyframes barberpole-body-case {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 40px 0px;
  }
}
</style>
