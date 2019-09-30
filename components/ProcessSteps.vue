<template>
  <div class="process-steps row-container">
    <div class="row">

      <div class="col-md-8 offset-md-2 col--list">
        <ol class="process-list">
          <li
            v-for="(step, index) in steps"
            :key="index"
            :class="{active: index === activeStepIndex}"
            class="process-list__item"
            @click.prevent="setActiveStepIndex(index)">
            <span class="process-list__item__index">{{ index + 1 | padNumber }}</span>
            <span class="process-list__item__text">{{ step.title }}</span>
          </li>
        </ol>
      </div>

      <div class="col-md-8 offset-md-2 col--content">
        <transition-group
          name="step"
          tag="div"
          class="steps">
          <div
            v-for="(step, index) in steps"
            v-if="index === activeStepIndex"
            :key="step.title"
            class="step">
            <h3
              class="step__title"
              v-html="activeStep.title" />
            <p
              class="step__text"
              v-html="activeStep.text" />
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
// import {TimelineMax} from 'gsap'
export default {
  name: 'ProcessList',
  data() {
    return {
      activeStepIndex: 0
    }
  },
  computed: {
    steps() {
      return this.$store.getters.processSteps
    },
    activeStep() {
      const step = this.steps[this.activeStepIndex]
      const index = this.activeStepIndex + 1
      return {
        ...step,
        index
      }
    }
  },
  mounted() {},
  methods: {
    setActiveStepIndex(index) {
      this.activeStepIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-left: -1rem;
  margin-right: -1rem;
}

.col--list {
  @include media-breakpoint-up(md) {
    margin-bottom: 3rem;
  }
}

.col--content {
  margin-top: 10vh;

  @include media-breakpoint-up(md) {
    margin-top: 0;
  }
}

.process-list {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  padding: 0;
  list-style: none;

  @include media-breakpoint-up(md) {
    flex-direction: row;
    padding-top: 1rem;
    border-top: 1px solid #000;

    &:before {
      content: '';
      position: absolute;
      display: block;
      width: 9px;
      height: 9px;
      top: 0;
      left: 0;
      background: #000;
      border-radius: 50%;
      border: 2px solid #fff;
      transform: translate(-50%, -50%);
    }

    &:after {
      content: '';
      position: absolute;
      display: block;
      width: 200vw;
      height: 0;
      top: -1px;
      left: 100%;
      border-top: 1px dashed #000;
    }
  }

  li {
    line-height: 2;
    @include media-breakpoint-up(md) {
      flex: 0 0 25%;
    }
  }
}

.process-list__item {
  color: rgba($body-color, 0.56);
  transition: color 0.4s ease;
  cursor: pointer;

  &.active {
    color: rgba($body-color, 1);
    font-weight: 500;
  }
}

.process-list__item__index {
  display: inline-block;
  width: 2rem;
  text-align: left;
}

.steps {
  position: relative;
}

.step {
  @include media-breakpoint-up(md) {
    position: absolute;
    left: 0;
    top: 0;
  }

  &.step-enter-active {
    transition: all 0.6s ease-out 0.5s;
  }

  &.step-enter {
    transform: translateY(1rem);
    opacity: 0;
  }

  &.step-leave-active {
    transition: all 0.3s ease-in;
  }

  &.step-leave-to {
    opacity: 0;
  }
}

.step__title {
  margin-top: 0;
  margin-bottom: 2rem;
  font-weight: 400;
  font-size: 2rem;
  // text-decoration: underline;
}

.step__text {
  font-size: 0.875rem;
  color: rgba($body-color, 0.87);
}

.full-width-container {
  // height: 40vh;
  background: #ccc;

  @include media-breakpoint-up(md) {
    height: 40vh;
  }
}
</style>
