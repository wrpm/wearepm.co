<template>
  <div class="interest-project">

    <span
      ref="index"
      class="index">
      {{ index + 1 | padNumber }}
    </span>

    <h3
      ref="title"
      class="title"
      v-html="title" />

    <p
      ref="text"
      class="text"
      v-html="text" />

    <nuxt-link
      ref="btn"
      :to="buttonOptions.to"
      :class="btnClass"
      class="btn"
      v-html="buttonOptions.label" />

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'InterestProject',

  components: {},

  props: {
    index: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    buttonOptions: {
      type: Object,
      default: () => ({
        label: 'Get Started',
        to: '/',
        class: ''
      })
    }
  },

  // data: () => ({}),
  computed: {
    ...mapGetters([
      'isLight'
    ]),

    btnClass() {
      return this.isLight ? 'btn-outline-dark' : 'btn-outline-light'
    }
  }
  // mounted() {},
  // methods: {}
}
</script>

<style lang="scss" scoped>
.interest-project {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  padding-top: 1rem;
  border-top: 3px solid var(--body-color, $body-color);

  .index {
    display: block;
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 0.05em;
    color: var(--primary, $primary);
  }

  .title {
    text-decoration: underline;
    font-size: 2.5rem;
  }

  .text {
    margin: 1rem 0 2rem 0;
    font-size: $font-size-sm;
    max-width: 400px;

    @include media-breakpoint-up(xl) {
      max-width: 75%;
    }
  }

  .btn {
    margin-top: auto;
    text-transform: uppercase;
    font-size: $small-font-size;
    font-weight: 500;
    border-width: 2px;
  }
}
</style>
