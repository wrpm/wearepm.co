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
        <div class="row">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="project-col col-lg-4">
            <InterestProject
              :index="index"
              :title="project.title"
              :text="project.text" />
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import { TimelineMax } from 'gsap'
// import Stripes from '~/components/Stripes'
import InterestProject from '~/components/InterestProject'

export default {
  name: 'Interest',
  components: {
    InterestProject
  },

  data: () => ({
    overline: 'What are we looking for?',
    title: 'Projects of<br/> interest in 2020',
    text: ''
  }),

  computed: {
    projects() {
      return [
        {
          title: 'High Performing <br>Landing Pages <br>for Tech Startups',
          text:
            'Convert your visitors into customers by striking a sweet spot between form and function.'
        },
        {
          title: 'Interactive, <br>Lead Generating <br>Real Estate Websites',
          text:
            'Create a competitive edge providing immersive exploring experiences using our web-based 3D property navigator.'
        },
        {
          title: 'Next Level <br>Custom eShops /<br>Product Configurators',
          text:
            'Your customers deserve a better platform to explore, visualize and personalize your awesome products.'
        }
      ]
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
    color: var(--body-color, $body-color);
  }
}

// --

.interest__content {
  padding: 4rem 0;
  position: relative;
}

.project-col {
  padding-right: 2rem;
}
</style>
