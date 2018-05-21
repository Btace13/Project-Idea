<template>
  <div class="home">
    <div id="landing">
      <h1>Project: Idea</h1>
      <br>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aliquam nemo. A aperiam beatae consectetur debitis est et fugiat fugit</p>
      <br>
      <router-link to="/register" class="btn">Sign Up Now!</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Image from '../assets/img/vect.png'

export default {
  name: "home",
    data: () => {
     return {
         image: Image
     }
    },
  components: {

  }
};
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Pacifico');
  .home{
    padding-top: 60px;
    background: url("../assets/img/back3.jpg");
    background-size: cover;
    background-attachment: fixed;
    background-position: bottom;
    height: 100vh;
  }
  #landing{
    text-align: center;
    margin: auto;
    max-width: 700px;
    padding: 0 10px;
  }
  h1{
    font-size: 3.5em;
      margin-top: 20%;
      font-family: Pacifico, cursive;
      text-shadow: 1px 1px #e74c3c;
  }
  p{
    font-weight: bold;
  }
  a{
    padding: 10px 30px;
    background: #e74c3c;
    font-weight: bold;
    color: #fff;
    box-shadow: 0px 3px 2px 0px #666;
  }
  a:hover{
    padding: 10px 30px;
    background: #fff;
    font-weight: bold;
    color: #e74c3c;
    box-shadow: 0px 4px 3px 0px #666;
  }
  @media (max-width: 989px) {
    .home{
      background-position: right;
    }
  }
</style>