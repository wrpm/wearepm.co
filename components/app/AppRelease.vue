<template>
  <div class="release">
    <span class="release__title">Digital release</span>
    <span class="release__date">{{ month }} {{ year }}.</span>
    <span class="release__version">{{ version }}</span>
  </div>
</template>

<script>
import { TweenMax } from 'gsap'

export default {
  name: 'AppRelease',

  data: () => ({}),

  computed: {
    version() {
      return process.env.version
    },
    year() {
      return 2021
    },
    month() {
      return 'April'
    }
  },

  mounted() {
    // this.initAnimation()
    this.$nextTick(() => {
      this.initAnimation()
    })
  },

  methods: {
    initAnimation() {
      TweenMax.staggerFrom(
        this.$el.querySelectorAll('span'),
        0.8,
        {
          opacity: 0,
          y: 20,
          delay: 0.4
        },
        0.3
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.release {
  font-size: 11px;
  font-weight: 500;
  color: var(--body-color, $body-color);
  opacity: 0.36;
  display: none;

  @include media-breakpoint-up(md) {
    display: block;
  }

  span {
    display: block;
  }
}
</style>
