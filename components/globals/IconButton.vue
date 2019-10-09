<template>
  <a
    :href="url"
    class="icon-button"
    target="_blank"
    rel="noopener noreferrer">
    <span
      class="sr-only"
      v-html="alt" />
    <slot />
  </a>
</template>

<script>
export default {
  name: 'IconButton',

  props: {
    url: {
      type: String,
      default: '#'
    },
    alt: {
      type: String,
      default: ''
    }
  }

  // data: () => ({}),
  // computed: {},
  // mounted() {},
  // methods: {}
}
</script>

<style lang="scss" scoped>
$iconSize: 16px;

.icon-button {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    display: block;
    width: $iconSize;
    height: $iconSize;
    opacity: 0.56;
    transform-origin: center center;
    transition: all 0.5s ease-in-out;
  }

  svg.icon {
    fill: var(--body-color, $body-color);
  }

  &:hover {
    .icon {
      opacity: 1;
    }

    svg.icon {
      fill: var(--primary, $primary);
    }
  }
}
</style>
