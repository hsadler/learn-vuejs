<template>
  <div>
    <Navigation></Navigation>
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

      <p v-if="mode === 0">v-if: <span>mode={{ mode }}</span></p>
      <p v-else-if="mode === 1">v-else-if: <span>mode={{ mode }}</span></p>
      <p v-else>v-else: <span>mode={{ mode }}</span></p>
      <button class="learn-vue-button" @click="updateMode">update mode</button>

      <hr>

      <p>v-for:</p>
      <p
        class="learn-vue-green"
        v-for="(score, index) in scores"
        :key="score"
      >
          {{ index + ': ' + score }}
      </p>

      <hr>

      <p>v-on:</p>
      <p class="learn-vue-green">keydown key: {{ currEvent ? currEvent.key : 'none' }}</p>
      <input
        class="learn-vue"
        v-on:keydown="viewEvent($event)"
        placeholder="type here"
      >

      <hr>

      <p>v-bind:</p>
      <p v-bind:class="classStr">Style me with class: {{ classStr }}</p>

      <hr>

      <p>v-model:</p>
      <textarea
        class="learn-vue"
        v-model="textareaInput"
        placeholder="type here"
      ></textarea>
      <p>
        <strong>What you've entered:</strong><br>
        <span>{{textareaInput}}</span>
      </p>

      <hr>

      <p v-pre>v-pre: <span>{{ notCompiled }}</span></p>

    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  name: 'DirectivesTest',
  components: {
    Navigation
  },
  data () {
    return {
      myText: 'Hello, World!',
      myHtml: '<span style="font-weight:bold">I am bold.</span>',
      isShown: false,
      mode: 0,
      scores: [123, 456, 789],
      currEvent: null,
      classStr: 'learn-vue-purple',
      textareaInput: null,
      notCompiled: 'I will never be injected into to template'
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
    },
    viewEvent (e) {
      this.currEvent = e
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
    textarea {
      border: 1px solid gray;
      width: 300px;
      height: 60px;
    }
  }
</style>
