<template>
  <div class="components-test-container">
    <h1>Components Testing</h1>
    <ComponentTestData></ComponentTestData>
    <ComponentTestComputed></ComponentTestComputed>
    <ComponentTestProps
      :username="'Willow'"
      :passcode="4321"
      :time="time"
    ></ComponentTestProps>
    <ComponentTestMethods></ComponentTestMethods>
  </div>
</template>

<script>
import ComponentTestData from '@/components/components-test/ComponentTestData'
import ComponentTestComputed from '@/components/components-test/ComponentTestComputed'
import ComponentTestProps from '@/components/components-test/ComponentTestProps'
import ComponentTestMethods from '@/components/components-test/ComponentTestMethods'

export default {
  name: 'ComponentsTest',
  components: {
    ComponentTestData,
    ComponentTestComputed,
    ComponentTestProps,
    ComponentTestMethods
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
  }
}
</script>

<style scoped lang="scss">
  div.components-test-container {
    padding-bottom: 100px;
  }
</style>
