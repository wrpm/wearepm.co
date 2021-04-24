<template>
  <nav class="app-contact">
    <div
      class="nav__item">
      <IconButton
        url="mailto:office@wearepm.co"
        alt="contact us">
        <!-- <SvgIconSend
          alt="contact us"
          class="icon"
          role="img" /> -->
      </IconButton>
    </div>
  </nav>
</template>

<script>
// import SvgIconSend from '~/assets/img/icons/send.svg?inline'

export default {
  name: 'SvgIconSend',

  components: {
    // SvgIconSend
  },

  data: () => ({})
}
</script>

<style lang="scss" scoped>
$navItemWidth: 40px;

.app-contact {
  display: flex;
  flex-direction: column;
  pointer-events: auto;
}

.nav__item {
  width: $navItemWidth;
  height: $navItemWidth;
  margin-top: -2px;

  &:first-child {
    margin-top: 0;
  }
}
</style>
