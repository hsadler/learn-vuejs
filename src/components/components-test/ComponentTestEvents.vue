<template>
  <div>
    <h2>{{ $options.name }}</h2>
    <p>{{ time }}</p>
    <button @click="resetTime()">resetTime</button>
    <input
      v-model="newTime"
      placeholder="enter new time"
    >
    <button @click="setTime()">setTime</button>
  </div>
</template>

<script>
export default {
  name: 'ComponentTestEvents',
  data () {
    return {
      newTime: null
    }
  },
  props: {
    time: Number
  },
  methods: {
    resetTime () {
      this.$emit('resetTime')
    },
    setTime () {
      this.$emit('setTime', parseInt(this.newTime))
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
      display: block;
      margin: 0 auto 20px auto;
    }
    input {
      display: block;
      margin: 0 auto 10px auto;
    }
  }
</style>
