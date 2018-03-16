<template>
  <div>
    <Navigation></Navigation>
    <div class="http-test-container">
      <h1>Http Test</h1>
      <p>the http response:</p>
      <p class="learn-vue-green">{{ httpResponse }}</p>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'

import services from '@/services'

export default {
  name: 'HttpTest',
  components: {
    Navigation
  },
  data () {
    return {
      httpService: services.use('httpService'),
      httpResponse: null
    }
  },
  created () {
    const url = 'http://api.icndb.com/jokes/random/10'
    this.httpService.get(url).then(res => {
      this.httpResponse = res
    })
  }
}
</script>

<style scoped lang="scss">
  div.http-test-container {
    width: 500px;
    margin: 0 auto;
    padding-bottom: 100px;
  }
</style>
