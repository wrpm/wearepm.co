<template>
  <div class="process-steps row-container">
    <div class="row">
      <div class="col-md-4 col--list">
        <ol class="process-list">
          <li class="process-list__item"
            v-for="(step, index) in steps"
            :key="index" 
            v-on:click.prevent="setActiveStepIndex(index)"
            :class="{active: index === activeStepIndex}">
            <span class="process-list__item__index">{{ index + 1 | padNumber }}</span>
            <span class="process-list__item__text">{{ step.title }}</span>
          </li>
        </ol>
      </div>
      <div class="col-md-8 col--content">
        <transition-group name="step" tag="div" class="steps">
          <div class="step"
            v-for="(step, index) in steps"
            :key="step.title"
            v-if="index === activeStepIndex">
            <h3 class="step__title">{{ activeStep.title }}</h3>
            <p class="step__text"> {{ activeStep.text }}</p>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
// import {TimelineMax} from 'gsap'
export default {
  name: 'process-list',
  data () {
    return {
      activeStepIndex: 0
    }
  },
  computed: {
    steps () {
      return this.$store.getters.processSteps
    },
    activeStep () {
      const step = this.steps[this.activeStepIndex]
      const index = this.activeStepIndex + 1
      return {
        ...step,
        index
      }
    }
  },
  mounted () {},
  methods: {
    setActiveStepIndex (index) {
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

.col--content {
  margin-top: 10vh;

  @include media-breakpoint-up(md) {
    margin-top: 0;
  }
}

.process-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    line-height: 2;
  }
}

.process-list__item {
  color: rgba($body-color, 0.56);
  transition: color 0.4s ease;
  cursor: pointer;

  &.active {
    color: rgba($body-color, 1)
  }
}

.process-list__item__index {
  display: inline-block;
  width: 3rem;
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

  &.step-enter  {
    transform: translateY(1rem);
    opacity: 0;
  }

  &.step-leave-active {
    transition: all 0.3s ease-in;
  }

  &.step-leave-to  {
    opacity: 0;
  }
}

.step__title {
  margin-top: 0;
  font-weight: 500;
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
