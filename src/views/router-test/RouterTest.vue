<template>
  <div>
    <h1>Router Testing</h1>
    <div class="routes">

      <router-link to="/normal-route">normal route</router-link>

      <router-link :to="dynamicRoute">
        dynamic route with id: {{dynamicRouteId}}
      </router-link>

      <router-link to="/nested-route">nested route</router-link>

      <router-link :to="{name:'WithQueryParams', query:queryParams}">
        with query params: {{ queryParams }}
      </router-link>

      <router-link to="/to-redirect">to redirect</router-link>

      <router-link to="/to-404">to 404</router-link>

    </div>
  </div>
</template>

<script>
export default {
  name: 'routerTest',
  components: {},
  data () {
    return {
      dynamicRouteIds: [111, 222, 333, 444, 555, 666, 777, 888, 999],
      queryParams: { user: 'harry' }
    }
  },
  computed: {
    dynamicRouteId () {
      // use of the underscore library
      return this.$_.sample(this.dynamicRouteIds)
    },
    dynamicRoute () {
      return '/dynamic-route/' + this.dynamicRouteId
    }
  }
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
