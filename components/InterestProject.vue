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
      :class="buttonOptions.class"
      class="btn btn-outline-dark"
      v-html="buttonOptions.label" />
  </div>
</template>

<script>
// import { TimelineMax } from 'gsap'

export default {
  name: 'InterestProject',
  components: {
    // Stripes
  },

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

  data: () => ({}),

  mounted() {},

  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.interest-project {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .index {
    display: block;
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-size: 0.875rem;
    letter-spacing: 0.05em;
  }

  .title {
    text-decoration: underline;
  }

  .text {
    margin: 1rem 0 2rem 0;
    font-size: $font-size-sm;

    @include media-breakpoint-up(xl) {
      // font-size: 0.8rem;
      max-width: 75%;
    }
  }

  .btn {
    text-transform: uppercase;
    font-size: $small-font-size;
    font-weight: 500;
    border-width: 2px;
  }
}
</style>
