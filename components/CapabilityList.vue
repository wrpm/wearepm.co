<template>
  <div class="capability-list">
    <h3 class="capability-list__title">{{ group.title }}</h3>
    <ul class="capability-list__list">
      <li
        v-for="(item, index) in group.list"
        :key="index"
        :class="{ core: item.core, hide: showCoreOnly && !item.core }">
        {{ item.title }}
      </li>
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
  data() {
    return {
      showCoreOnly: false
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.capability-list__title {
  font-weight: 500;
}

.capability-list__list {
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    font-size: 0.875rem;
    color: rgba($body-color, 0.87);
    line-height: 1.5;
    transition: color 0.4s linear;

    &:not(.core) {
      color: rgba($body-color, 0.6);
    }

    &.hide {
      color: rgba($body-color, 0.12);
    }
  }
}
</style>
