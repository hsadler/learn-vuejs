<template>
  <div class="about">
    <h1>Components Test</h1>
    <ComponentTestData></ComponentTestData>
  </div>
</template>

<script>
import ComponentTestData from '@/components/components-test/ComponentTestData'

export default {
  name: 'ComponentsTest',
  components: {
    ComponentTestData
  }
}
</script>

<style scoped lang="scss"></style>
