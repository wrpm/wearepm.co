<template>
  <div
    v-view.once="onceInViewHandler"
    class="capabilities">
    <div class="wrapper">

      <base-section-label
        ref="label"
        :label="overline"/>

      <base-section-title
        ref="title"
        :title="title" />

      <base-section-text
        ref="description"
        :text="text" />

      <div class="list">
        <div class="row">
          <div
            v-for="(capabilityGroup, index) in capabilities"
            :key="index"
            :class="{ 'offset-lg-3': index === 0 }"
            class="list-group col-md-6 col-lg-3 offset-1 offset-md-0">
            <capability-list
              :group="capabilityGroup" />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { TimelineMax } from 'gsap'
import CapabilityList from '@/components/CapabilityList'

export default {
  name: 'Capabilities',

  components: {
    CapabilityList
  },

  data: () => ({
    overline: 'What does WRPM do?',
    title: 'Our Services <br><em>& Capabilities</em>',
    text:
      'Our talented creatives and developers come together to design and build consumer-facing digital solutions crafted to solve unique business challenges.'
  }),

  computed: {
    capabilities() {
      return this.$store.getters.capabilities
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

      self.$timeline = new TimelineMax({
        paused: true,
        delay: 0.7
      })

      self.$timeline
        .staggerFrom(els, 0.8, {
          y: 40,
          autoAlpha: 0,
          ease: 'Power1.easeOut',
          clearProps: 'all'
        }, 0.15 )
        .from(self.$refs.label.$refs.line, 0.5, {
          scaleX: 0,
          ease: 'Power1.easeOut',
          onStart: function() {
            this.target.style.transformOrigin = 'left center'
          },
          onComplete: function() {
            this.target.removeAttribute('style')
          }
        }, 0.4)
    },

    playAnimation() {
      this.$timeline.play()
    },

    onceInViewHandler(e) {
      this.playAnimation()
    }
  }
}
</script>

<style lang="scss" scoped>
.capabilities {
  padding-top: 20vh;
  padding-bottom: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .wrapper {
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  .list {
    // margin-top: 10vh;

    .list-group {
      margin-top: 10vh;
    }
  }
}
</style>
