<template>
  <nav class="app-contact">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="nav__item">
      <base-button
        :icon="item.icon"
        :icon-alt="item.title"
        :url="item.url"
      />
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppContact',

  data: () => ({
    items: [
      {
        title: 'Contact us',
        icon: 'send.svg',
        url: 'mailto:office@wearepm.co'
      }
    ]
  })
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
