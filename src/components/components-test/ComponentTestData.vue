<template>
  <div>
    <h2>{{ $options.name }}</h2>
    <p>{{ num }}</p>
    <p>{{ str }}</p>
    <p>{{ arr }}</p>
    <p>{{ bool }}</p>
    <p>{{ obj }}</p>
  </div>
</template>

<script>
export default {
  name: 'ComponentTestData',
  data () {
    return {
      num: 101,
      str: 'a string',
      arr: [1, 2, 3],
      bool: false,
      obj: {
        one: '1',
        two: 2,
        three: true
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
  }
</style>
