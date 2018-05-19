<template>
  <div class="home">
    <div id='landing' class="ui container">
      <div class="ui vertical stripe">
        <div class="ui middle aligned stackable grid container">
          <div class="row">
            <div class="eight wide column">
              <h1 class='logo-text'>Project: Idea</h1>
              <h3 class="ui header">We Help Chimps and Companions</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque cupiditate eos officiis provident vero voluptas. Accusamus commodi.
              </p>
              <h3 class="ui header">We Make Bananas That Can Dance</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda atque, aut commodi eligendi esse et.
              </p>
            </div>
            <div class="six wide right floated column">
              <img id="backImg" alt='Idea' :src='image'  class="ui large rounded image"/>
            </div>
          </div>
          <div class="row">
            <div class="center aligned column">
              <router-link to='/register' class="ui huge button">Sign Up Now</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Image from '../assets/img/back.png'

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

  #backImg{
    max-width: 80%;
  }
  #landing{
    margin-top: 80px;
  }
  .logo-text{
    font-size: 4em;
    font-family: 'Pacifico', cursive;
    margin-bottom: 40px;
  }
  #landing .ui.huge.button, .ui.huge.buttons .button, .ui.huge.buttons .or {
    color: #fff;
    background: #F12100;
  }
</style>