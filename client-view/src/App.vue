<template>
  <div id="app">
    <Navbar/>
    <div style="margin-top: 80px" class="ui container">
      <router-view/>
    </div>
    <Footer/>
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
  footer {
    margin: 100px 0 0 0;
    background: #00B238;
  }
  .idea-card .ui.card>.button, .ui.card>.buttons, .ui.cards>.card>.button, .ui.cards>.card>.buttons {
    background: #00B238;
    color: #000000;
  }
  #ideaItem{
    border: 1px solid #222222;
    padding: 8px;
    margin: 12px auto;
  }
  i.like .icon{
    color: red;
  }
</style>
