<template>
  <div>
    <Navigation></Navigation>
    <div class="store-test-container">

      <h1>Store Test</h1>

      <hr>

      <p>timer data and methods from direct import:</p>
      <p class="learn-vue-green">store time: {{ services.storeFromImport.timer }}</p>
      <button
        class="learn-vue-button"
        @click="services.storeFromImport.startTimer()"
      >
        start time
      </button>
      <button
        class="learn-vue-button"
        @click="services.storeFromImport.stopTimer()"
      >
        stop timer
      </button>

      <hr>

      <p>timer data and methods from services dependecy injection:</p>
      <p class="learn-vue-green">store time: {{ services.storeFromInjection.timer }}</p>
      <button
        class="learn-vue-button"
        @click="services.storeFromInjection.startTimer()"
      >
        start time
      </button>
      <button
        class="learn-vue-button"
        @click="services.storeFromInjection.stopTimer()"
      >
        stop timer
      </button>

      <hr>

    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'

// store provided by direct import
import store from '@/services/store'
// services service used for dependecy injection
import services from '@/services'

export default {
  name: 'StoreTest',
  components: {
    Navigation
  },
  data () {
    return {
      // private data (non-injected)
      private: {},
      // injected services
      services: {
        storeFromImport: store,
        storeFromInjection: services.use('store')
      },
      // injected factories
      factories: {}
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
  div.store-test-container {
    width: 500px;
    margin: 0 auto;
    padding-bottom: 100px;
  }
</style>
