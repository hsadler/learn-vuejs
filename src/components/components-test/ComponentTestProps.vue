<template>
  <div>
    <h2>{{ $options.name }}</h2>
    <p>username: {{ username }}</p>
    <p>passcode: {{ passcode }}</p>
    <p>time: {{ time }}</p>
    <button class="learn-vue-button" @click="resetTime()">Reset time</button>
    <p class="disclamer">
      with throw warning and not work properly since <br>
      attempting to mutate a passed prop...
    </p>
  </div>
</template>

<script>
export default {
  name: 'ComponentTestProps',
  props: {
    username: String,
    passcode: {
      type: Number,
      default: 1234,
      required: true,
      validator (value) {
        return value >= 0 && value < 10000
      }
    },
    time: Number
  },
  methods: {
    resetTime () {
      this.time = 0
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
    p.disclamer {
      font-size: 14px;
      color: red;
    }
  }
</style>
