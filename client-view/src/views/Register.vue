<template>
  <div id="register">
    <form class="form-signin">
      <img class="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
      <h3>CREATE A PROFILE</h3>
      <label for="username" class="sr-only">Username</label>
      <input type="text" id="username" class="form-control" placeholder="Username" required autofocus>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
      <label for="passwordInput" class="sr-only">Password</label>
      <input type="text" id="passwordInput" class="form-control" placeholder="Password" required autofocus>
      <label for="confirmPassword" class="sr-only">Confirm Password</label>
      <input style="margin-bottom: 5px;" type="email" id="confirmPassword" class="form-control" placeholder="Confirm Password" required autofocus>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
      <br>
      <p><strong>Already a member? <router-link to="/login">Login</router-link></strong></p>
      <p class="mt-5 mb-3 text-white">&copy; Project: Idea 2018</p>
    </form>
  </div>
</template>

<style scoped>
  #register {
    text-align: center;
    height: 100vh;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background: url("../assets/img/register.jpg");
    -webkit-background-size: cover;
    background-size: cover;
  }
  input{
    margin-top: 5px;
  }
  h3{
    font-weight: bold;
  }
  .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
  }
  .form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
  }
  .form-signin .form-control:focus {
    z-index: 2;
  }
  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  button{
    border: none;
    background: #e74c3c;
    font-weight: bold;
  }
  button:hover{
    border: none;
    background: #fff;
    color: #e74c3c;
    font-weight: bold;
    box-shadow: 0px 3px 2px 0px #666;
  }
</style>
