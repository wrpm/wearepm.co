<template>
  <div id="app">
    <site-header/>
    <site-content/>
  </div>
</template>

<script>
import SiteHeader from '~/components/SiteHeader'
import SiteContent from '~/components/SiteContent'
import headMeta from '~/data/head-meta.json'

export default {
  components: {
    SiteHeader,
    SiteContent
  },
  head: headMeta
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  background-color: $body-background;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding: $app-padding;
  color: #fafafa;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  z-index: 1;
  overflow: hidden;
  box-sizing: border-box;
}
</style>
