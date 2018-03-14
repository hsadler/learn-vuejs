<template>
  <div class="directives-test-container">

    <h1>Directives Test</h1>

    <p>v-text: <span v-text="myText"></span></p>

    <hr>

    <p>v-html: <span v-html="myHtml"></span></p>

    <hr>

    <p>v-show:
      <span @mouseover="toggleShow">hover me</span>
      <span v-show="isShown"> peekaboo..</span>
    </p>

    <hr>

    <p v-if="mode === 0">v-if: mode={{ mode }}</p>
    <p v-else-if="mode === 1">v-else-if: mode={{ mode }}</p>
    <p v-else>v-else: mode={{ mode }}</p>
    <button @click="updateMode">update mode</button>

    <hr>

    <p
      v-for="(score, index) in scores"
      :key="score"
    >
        {{ index + ': ' + score }}
    </p>

  </div>
</template>

<script>
export default {
  name: 'DirectivesTest',
  data () {
    return {
      myText: 'Hello, World!',
      myHtml: '<span style="font-weight:bold">I am bold.</span>',
      isShown: false,
      mode: 0,
      scores: [123, 456, 789]
    }
  },
  methods: {
    toggleShow () {
      this.isShown = !this.isShown
    },
    updateMode () {
      this.mode += 1
      if (this.mode > 2) {
        this.mode = 0
      }
    }
  }
}
</script>

<style scoped lang="scss">
  div.directives-test-container {
    width: 400px;
    margin: 0 auto;
    padding-bottom: 100px;
    p {
      display: block;
      margin: 10px 0;
      span {
        color: green;
      }
    }
  }
</style>
