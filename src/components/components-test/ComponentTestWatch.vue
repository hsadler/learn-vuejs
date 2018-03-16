<template>
  <div>
    <h2>{{ $options.name }}</h2>
    <p>async value: {{ asyncVal ? asyncVal : 'null' }}</p>
    <p>get async value status: {{ asyncValStatus }}</p>
    <button
      class="learn-vue-button"
      @click="getAsyncVal()"
    >
      Get async value
    </button>
  </div>
</template>

<script>
export default {
  name: 'ComponentTestWatch',
  data () {
    return {
      asyncVal: null,
      asyncValStatus: 'idle'
    }
  },
  methods: {
    getAsyncVal () {
      this.asyncVal = null
      this.asyncValStatus = 'getting...'
      setTimeout(() => {
        this.asyncVal = 'Hello!'
      }, 2000)
    }
  },
  watch: {
    asyncVal (newVal, oldVal) {
      if (!oldVal && newVal) {
        this.asyncValStatus = 'get complete'
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
