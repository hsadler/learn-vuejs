<template>
  <div>
    <h1>With Query Params</h1>
    <p>route name: {{ $route.name }}</p>
    <p>route query: {{ $route.query }}</p>
  </div>
</template>

<script>
export default {
  name: 'withQueryParams',
  components: {}
}
</script>

<style scoped lang="scss">
  p {
    color: green;
  }
</style>
