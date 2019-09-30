<template>
  <div
    :style="styleObj"
    class="stripes"/>
</template>

<script>
export default {
  name: 'Stripes',
  props: {
    light: {
      type: String,
      default: '#000000'
    },
    dark: {
      type: String,
      default: '#f5f5f5'
    }
  },
  data: () => ({}),
  computed: {
    styleObj() {
      return {
        'background-image': `linear-gradient(90deg, ${this.light} 40%, ${
          this.dark
        } 40%, ${this.dark})`
      }
    }
  },
  mounted() {
    this.initAnimation()
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.stripes {
  display: block;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    90deg,
    $body-bg 40%,
    $body-color 40%,
    $body-color
  );
  background-size: 10px 10px;
  animation: stripesAnim 8s linear infinite;
}

@keyframes stripesAnim {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 40px 0px;
  }
}
</style>
