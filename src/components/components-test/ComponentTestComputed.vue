<template>
  <div>
    <h2>{{ $options.name }}</h2>
    <p>{{ greeting }}</p>
    <p>{{ compAge }}</p>
    <button
      class="learn-vue-button"
      @click="compAge = age + 1"
    >
      Add to age
    </button>
  </div>
</template>

<script>
export default {
  name: 'ComponentTestComputed',
  data () {
    return {
      firstName: 'Harry',
      lastName: 'Sadler',
      age: 36
    }
  },
  computed: {
    greeting () {
      return 'Hi! My name is ' + this.firstName + ' ' + this.lastName + '.'
    },
    compAge: {
      get () {
        return 'computed age: ' + this.age
      },
      set (newValue) {
        this.age = parseInt(newValue)
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
