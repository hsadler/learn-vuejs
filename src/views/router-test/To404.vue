<template>
  <div>
    <h1>404 - PAGE NOT FOUND</h1>
    <button class="learn-vue-button" @click="goBack()">Go back</button>
  </div>
</template>

<script>
export default {
  name: 'to404',
  components: {},
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">
  button {
    cursor: pointer;
  }
</style>
