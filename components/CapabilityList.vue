<template>
  <div class="capability-list">
    <h3
      ref="title"
      :class="{ 'text-primary': group.title === 'Development' }"
      class="title"
      v-html="group.title" />
    <ul
      ref="list"
      class="list">
      <li
        v-for="(item, index) in group.list"
        :key="index"
        :class="[
          item.class ? item.class : '',
          {
            core: item.core,
            hide: showCoreOnly && !item.core,
          }
        ]"
        v-html="item.title" />
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CapabilityList',

  props: {
    group: {
      type: Object,
      required: true
    }
  },

  data: () => ({
    showCoreOnly: false
  })
}
</script>

<style lang="scss" scoped>
.capability-list {

  .title {
    margin-bottom: 1rem;
    text-decoration: underline;

    @include media-breakpoint-up(md) {
      margin-bottom: 2rem;
    }
  }

  .list {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      position: relative;
      line-height: 2;

      @include media-breakpoint-up(md) {
        font-size: $font-size-sm;
      }

      &.hot {
        font-weight: bold;

        &:before {
          // U+1F525
          content: "\1F525";
          position: absolute;
          left: -1.5rem;
          top: 0;
          line-height: 2;
        }
      }
    }
  }
}
</style>
