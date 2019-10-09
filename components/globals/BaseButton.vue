<template>
  <a
    :href="url"
    class="button"
    target="_blank"
    rel="noopener nofollow">
    <svg
      width="60"
      height="60"
      viewBox="0 0 100 100"
      class="svg">
      <path
        ref="svgBorder"
        d="M 100,0 L 100,100,0,100,0,0 Z"
        fill="none"
        class="svg__border"/>
    </svg>
    <img
      ref="icon"
      :src="iconUrl"
      :alt="iconAlt"
      class="icon">
  </a>
</template>

<script>
import { TimelineMax } from 'gsap'

export default {
  name: 'BaseButton',

  props: {
    icon: {
      type: String,
      required: true
    },
    iconAlt: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: '#'
    },
    animation: {
      type: Object,
      default: () => ({
        paused: true,
        delay: 0
      })
    }
  },

  data: () => ({
    animationCompleted: false
  }),

  computed: {
    iconUrl() {
      return '/icons/' + this.icon
    }
  },

  mounted() {
    this.initAnimation()
    this.playAnimation()
  },

  methods: {
    initAnimation() {
      let self = this

      const timelineOptions = {
        onComplete: self.onAnimationComplete,
        ...this.animation
      }

      self.$timeline = new TimelineMax(timelineOptions)

      self.$timeline.set(self.$refs.icon, {
        css: {
          transition: 'none'
        }
      })

      self.$timeline
        .from(self.$refs.svgBorder, 1.5, {
          strokeDashoffset: '400px',
          ease: 'Power1.easeInOut',
          clearProps: 'all'
        })
        .from(
          self.$refs.icon,
          0.6,
          {
            scale: 0.3,
            opacity: 0,
            clearProps: 'all'
          },
          1
        )
    },

    playAnimation() {
      this.$timeline.play()
    },

    onAnimationComplete() {
      this.animationCompleted = true
    }
  }
}
</script>

<style lang="scss" scoped>
$iconSize: 12px;

.button {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: none;
  }

  .svg__border {
    width: 100%;
    height: 100%;
    stroke-width: 10px;
    stroke: #909090;
    transition: stroke 0.25s;
    stroke-dasharray: 400px;
    stroke-dashoffset: 0px;
  }

  .icon {
    display: block;
    width: $iconSize;
    height: $iconSize;
    opacity: 0.5;
    transform-origin: center center;
    transition: opacity 0.5s ease-in-out;
  }

  &:hover {
    .icon {
      opacity: 1;
    }
  }
}
</style>
