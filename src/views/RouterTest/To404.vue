<template>
  <div>
    <h1>Router Testing</h1>
    <router-link to="normal-route">normal route</router-link>
    <router-link to="sub-route">sub-route</router-link>
    <router-link to="with-query-params">with query params</router-link>
    <router-link to="to-redirect">to redirect</router-link>
  </div>
</template>

<script>
export default {
  name: 'routerTest',
  components: {}
}
</script>

<style scoped lang="scss">
  a {
    display: block;
    margin: 10px 0;
  }
</style>
