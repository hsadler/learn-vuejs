<template>
  <div>
    <Navigation></Navigation>
    <div class="components-test-container">

      <h1>Components Test</h1>

      <ComponentTestData></ComponentTestData>

      <ComponentTestComputed></ComponentTestComputed>

      <ComponentTestProps
        :username="'Willow'"
        :passcode="4321"
        :time="time"
      ></ComponentTestProps>

      <ComponentTestMethods></ComponentTestMethods>

      <ComponentTestWatch></ComponentTestWatch>

      <ComponentTestEvents
        :time="time"
        @resetTime="resetTime"
        @setTime="setTime"
      ></ComponentTestEvents>

    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import ComponentTestData from '@/components/components-test/ComponentTestData'
import ComponentTestComputed from '@/components/components-test/ComponentTestComputed'
import ComponentTestProps from '@/components/components-test/ComponentTestProps'
import ComponentTestMethods from '@/components/components-test/ComponentTestMethods'
import ComponentTestWatch from '@/components/components-test/ComponentTestWatch'
import ComponentTestEvents from '@/components/components-test/ComponentTestEvents'

export default {
  name: 'ComponentsTest',
  components: {
    Navigation,
    ComponentTestData,
    ComponentTestComputed,
    ComponentTestProps,
    ComponentTestMethods,
    ComponentTestWatch,
    ComponentTestEvents
  },
  data () {
    return {
      time: 0
    }
  },
  created () {
    setInterval(() => {
      this.time += 1
    }, 1000)
  },
  methods: {
    resetTime () {
      this.time = 0
    },
    setTime (newTime) {
      this.time = newTime
    }
  }
}
</script>

<style scoped lang="scss">
  div.components-test-container {
    padding-bottom: 100px;
  }
</style>
