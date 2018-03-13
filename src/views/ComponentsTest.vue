<template>
  <div class="about">
    <h1>Components Test</h1>
    <ComponentTestData></ComponentTestData>
    <ComponentTestComputed></ComponentTestComputed>
  </div>
</template>

<script>
import ComponentTestData from '@/components/components-test/ComponentTestData'
import ComponentTestComputed from '@/components/components-test/ComponentTestComputed'

export default {
  name: 'ComponentsTest',
  components: {
    ComponentTestData,
    ComponentTestComputed
  }
}
</script>

<style scoped lang="scss"></style>
