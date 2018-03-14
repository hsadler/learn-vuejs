<template>
  <div>
    <h2>{{ $options.name }}</h2>
    <p>{{ time }}</p>
    <button @click="resetTime()">resetTime</button>
  </div>
</template>

<script>
export default {
  name: 'ComponentTestEvents',
  props: {
    time: Number
  },
  methods: {
    resetTime () {
      this.$emit('resetTime')
    }
  }
}
</script>

<style scoped lang="scss">
  div {
    width: 400px;
    margin: 10px auto;
    border: 1px solid green;
    h2 {
      color: green;
    }
    button {
      margin-bottom: 20px;
    }
  }
</style>
