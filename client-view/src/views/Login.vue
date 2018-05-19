<template>
  <div class="about">
    <div class="ui middle aligned center aligned grid">
      <div class="column">
        <h2 class="ui image header">
          <div class="content">
            Log-in to your account
          </div>
        </h2>
        <form class="ui large form">
          <div class="ui stacked segment">
            <div class="field">
              <div class="ui left icon input">
                <i class="user icon"></i>
                <input type="text" name="email" placeholder="E-mail address">
              </div>
            </div>
            <div class="field">
              <div class="ui left icon input">
                <i class="lock icon"></i>
                <input type="password" name="password" placeholder="Password">
              </div>
            </div>
            <div class="ui fluid large submit button"><router-link to="/ideas">Login</router-link></div>
          </div>

          <div class="ui error message"></div>

        </form>

        <div class="ui message">
          New to us? <router-link to="/login">Sign Up</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .about {
    height: 60vh;
  }
  .grid{
    margin-top: 20%;
  }
  .column {
    max-width: 450px;
  }
  .button{
    background: #00CC3E;
    color: #000;
  }
</style>
