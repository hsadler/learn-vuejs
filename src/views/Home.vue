<template>
  <div>
    <Navigation></Navigation>
    <img src="@/assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    Navigation,
    HelloWorld
  }
}
</script>
