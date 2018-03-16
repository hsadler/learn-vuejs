<template>
  <div class="navigation-container">
    <router-link to="/">Home</router-link> |
      <router-link to="/router-test">Router Test</router-link> |
      <router-link to="/components-test">Components Test</router-link> |
      <router-link to="/directives-test">Directives Test</router-link> |
      <router-link to="/store-test">Store Test</router-link> |
      <router-link to="/http-test">Http Test</router-link> |
      <router-link to="/vuetify-test">Vuetify Test</router-link>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  props: {}
}
</script>

<style scoped lang="scss">
  div.navigation-container {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
