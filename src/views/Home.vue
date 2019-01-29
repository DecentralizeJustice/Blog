<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <BlogHome msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import BlogHome from '@/components/BlogHome.vue'

export default {
  name: 'home',
  components: {
    BlogHome
  }
}
</script>
