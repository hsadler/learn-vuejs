<template>
  <div>
    <h2>{{ $options.name }}</h2>
    <p>{{ time }}</p>
    <button class="learn-vue-button" @click="resetTime()">resetTime</button>
    <input
      class="learn-vue"
      v-model="newTime"
      placeholder="enter new time"
    >
    <button class="learn-vue-button" @click="setTime()">setTime</button>
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
      display: block !important;
      margin: 0 auto 20px auto !important;
    }
    input {
      display: block;
      margin: 0 auto 10px auto;
    }
  }
</style>
