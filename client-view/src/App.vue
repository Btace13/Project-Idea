<template>
  <div id="app">
    <Navbar/>
    <div>
      <router-view/>
    </div>
  </div>
</template>
<script>
  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue'

  export default {
      name: "home",
      components: {
          Navbar,
          Footer
      }
  };
</script>
<style>
  html body {
    font-family: sans-serif;
  }
</style>
