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
    @import url('https://fonts.googleapis.com/css?family=Poppins');

    html body {
        font-family: 'Poppins', sans-serif;
    background: #ecf0f1;
  }
</style>
