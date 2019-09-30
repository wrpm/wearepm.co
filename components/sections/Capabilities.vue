<template>
  <div
    v-view.once="onceInViewHandler"
    class="capabilities">
    <div class="capabilities__wrapper">
      <base-section-label
        ref="label"
        :label="overline"/>
      <base-section-title
        ref="title"
        :title="title" />
      <base-section-text
        ref="description"
        :text="text" />
      <div class="capabilities__list">
        <div class="row">
          <!-- <div class="col-md-4"></div> -->
          <div
            v-for="(capabilityGroup, index) in capabilities"
            :key="index"
            class="col-md-6 col-lg-3 capabilities__list-group">

            <capability-list :group="capabilityGroup" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CapabilityList from '~/components/CapabilityList'
import { TimelineMax } from 'gsap'

export default {
  name: 'Capabilities',
  components: {
    CapabilityList
  },
  data: () => ({
    overline: 'What does WRPM do?',
    title: 'Our Services & Capabilities',
    text:
      'Our talented creatives and developers come together to design and build consumer-facing digital solutions crafted to solve unique business challenges'
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

    onceInViewHandler(e) {
      this.playAnimation()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.capabilities {
  padding-top: 20vh;
  padding-bottom: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .capabilities__wrapper {
    display: flex;
    flex-direction: column;
    text-align: left;
    color: $body-color;
  }
}

.capabilities__list {
  // margin-top: 10vh;

  .capabilities__list-group {
    margin-top: 10vh;

    // &:first-child {
    //   margin-top: 0;
    // }

    // @include media-breakpoint-up(lg) {
    //   margin-top: 0;
    // }
  }
}

.cap__title {
  font-weight: 500;
}

.cap__list {
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    font-size: 0.875rem;
    color: rgba($body-color, 0.87);
    line-height: 1.5;
    transition: color 0.4s linear;

    &:not(.core) {
      color: rgba($body-color, 0.6);
    }

    &.hide {
      color: rgba($body-color, 0.12);
    }
  }
}
</style>
