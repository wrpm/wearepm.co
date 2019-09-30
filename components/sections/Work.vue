<template>
  <div class="work">
    <div class="wrapper">
      <img
        src="/img/material.png"
        alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Work',
  data: () => ({}),
  computed: {},
  mounted() {},
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.work {
  padding-top: 20vh;
  padding-bottom: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .wrapper {
    display: flex;
    flex-direction: column;

    img {
      max-width: 100%;
    }
  }
}
</style>
