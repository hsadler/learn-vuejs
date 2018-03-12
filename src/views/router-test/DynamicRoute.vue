<template>
  <div>
    <h1>Dynamic Route</h1>
    <p>route path: {{ $route.path }}</p>
    <p>route params: {{ $route.params }}</p>
  </div>
</template>

<script>
export default {
  name: 'dynamicRoute',
  components: {}
}
</script>

<style scoped lang="scss">
p {
    color: green;
}
</style>
