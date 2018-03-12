<template>
  <div>
    <h1>Nested Route</h1>
    <div class="routes">
      <router-link to="/nested-route/nested-a">Nested A</router-link>
      <router-link to="/nested-route/nested-b">Nested B</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'nestedRoute',
  components: {}
}
</script>

<style scoped lang="scss">
  div.routes {
    width: 400px;
    margin: 0 auto;
    a {
      display: block;
      margin: 10px 0;
    }
  }
</style>
