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
    title: 'Projects of<br/> interest in 2019',
    text: ''
  }),

  computed: {
    projects() {
      return [
        {
          title: 'Landing Pages <br>for Tech Startups',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.'
        },
        {
          title: 'Real Estate /<br>Property Development',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.'
        },
        {
          title: 'Custom eShop /<br>Product Configurator',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.'
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
