<template>
  <div>
    <h2>{{ $options.name }}</h2>
    <p>{{ arr[currIndex] }}</p>
    <button class="learn-vue-button" @click="nextIndex()">Next word</button>
  </div>
</template>

<script>
export default {
  name: 'ComponentTestMethods',
  data () {
    return {
      arr: ['I', 'am', 'a', 'banana!'],
      currIndex: 0
    }
  },
  methods: {
    nextIndex () {
      this.currIndex += 1
      if (this.currIndex === this.arr.length) {
        this.currIndex = 0
      }
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
