<template>
  <div class="process" v-view.once="onceInViewHandler">
    <div class="process__wrapper">
      <base-section-label :label="overline" ref="label"/>
      <base-section-title :title="title" ref="title" />
      <base-section-text :text="text" ref="description" />
      <base-section-text :text="text2" ref="description2" />
      <div class="process__list">
        <process-steps />
      </div>
    </div>
  </div>
</template>

<script>
import ProcessSteps from '~/components/ProcessSteps'
import {TimelineMax} from 'gsap'

export default {
  name: 'process',
  components: {
    ProcessSteps
  },
  data () {
    return {
      overline: 'How we do it?',
      title: 'Our Process',
      text: 'We\'re collaborators by nature and we work side by side with customers who trust us, we believe in working <em>with</em> you rather than <em>for</em> you.',
      text2: 'Our process is built to discover and deliver your idea through cutting-edge digital experiences and exceptional products.'
    }
  },
  computed: {},
  mounted () {
    this.initAnimation()
  },
  methods: {
    initAnimation () {
      const self = this

      // const listItems = self.$el.querySelectorAll('.process-list__item')
      // const stepsEl = self.$el.querySelectorAll('.steps')

      const els = [
        self.$refs.label.$refs.text,
        self.$refs.title,
        self.$refs.description,
        self.$refs.description2
        // ...listItems
      ]

      self.$timeline = new TimelineMax({ paused: true, delay: 0.7 })

      // self.$timeline.set(listItems, {
      //   css: {
      //     transition: 'none'
      //   }
      // })

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

<style lang="scss" scoped>
.process {
  padding-top: 20vh;
  padding-bottom: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .process__wrapper {
    display: flex;
    flex-direction: column;
    text-align: left;
    color: $body-color;
  }
}

.process__list {
  margin-top: 10vh;
}
</style>
