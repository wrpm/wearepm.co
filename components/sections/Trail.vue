<template>
  <div
    class="trail">
    <div class="trail__wrapper">
      <ImageTrail />
    </div>
  </div>
</template>

<script>
import ImageTrail from '@/components/ImageTrail/ImageTrail'

export default {
  name: 'Trail',

  components: {
    ImageTrail
  },

  data: () => ({}),

  mounted () {},

  methods: {}
}
</script>

<style lang="scss" scoped>
.trail {
  position: relative;
  height: 80vh;
}

.trail__wrapper {
  position: absolute;
  left: 50%;
  top: 0;
  width: 100vw;
  height: 100%;
  transform: translate(-50%, 0);
}
</style>
