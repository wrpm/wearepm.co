<template>
  <div class="navi">
    <div class="nav__item" v-for="(item, index) in items" :key="index">
      <base-button
        :icon="item.icon"
        :url="item.url"
        />
    </div>
  </div>
</template>

<script>
export default {
  name: 'site-nav',
  data () {
    return {
      items: [
        {
          title: 'Contact us',
          icon: 'send.svg',
          url: 'mailto:office@wearepm.co'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
$navItemWidth: 40px;

.navi {
  display: flex;
  flex-direction: column;
  pointer-events: auto;
}

.nav__item {
  width: $navItemWidth;
  height: $navItemWidth;
  margin-top: -2px;

  &:first-child {
    margin-top: 0
  }
}
</style>
