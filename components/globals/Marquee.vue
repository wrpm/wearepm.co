<template>
  <div
    :class="{
      loading,
      'pause-on-hover': pauseOnHover,
    }"
    class="marquee">

    <!-- MARQUEE -->
    <div
      :class="{
        reverse: reverse,
        regular: !reverse
      }"
      class="marquee-wrapper w-100">
      <div class="marquee-1">
        <slot />
      </div>
      <div class="marquee-2">
        <slot />
      </div>
    </div>
    <!-- END :: MARQUEE -->

  </div>
</template>
​
<script>
// import BaseComponent from '@/mixins/baseComponent'

export default {
  name: 'Marquee',

  mixins: [
    // BaseComponent
  ],

  data: () => ({
    loading: true
  }),

  props: {
    reverse: {
      type: Boolean,
      default: false
    },
    pauseOnHover: {
      type: Boolean,
      default: false
    }
  },

  computed: {},

  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 250)
  }
}
</script>

<style lang="scss" scoped>

$animationDuration: 120s;
$animationDelay: 60s;

.marquee-wrapper {
  overflow: hidden;
  white-space: nowrap;
  cursor: default;

  .marquee-1,
  .marquee-2 {
    display: inline-block;
    will-change: transform;
  }

  &.regular {
    .marquee-1 {
      animation: marquee $animationDuration linear infinite;
      animation-delay: -$animationDelay;
    }

    .marquee-2 {
      animation: marquee2 $animationDuration linear infinite;
      animation-delay: 0s;
    }
  }

  &.reverse {
    .marquee-1 {
      animation: marquee-reversed $animationDuration linear infinite;
      animation-delay: -$animationDelay;
    }

    .marquee-2 {
      animation: marquee2-reversed $animationDuration linear infinite;
      animation-delay: 0s;
    }
  }
}

// STATE
.marquee {

  &.loading {
    .marquee-1,
    .marquee-2 {
      animation: none;
    }
  }


  &.pause-on-hover {
    &:hover {
      .marquee-1,
      .marquee-2 {
        animation-play-state: paused;
      }
    }
  }
}

// ANIMATIONS
@keyframes marquee {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
}

@keyframes marquee2 {
  from {
    transform: translateX(-200%);
  }
  to {
    transform: translateX(0%);
  }
}

// REVERSED
@keyframes marquee-reversed {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}

@keyframes marquee2-reversed {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-200%);
  }
}
</style>
