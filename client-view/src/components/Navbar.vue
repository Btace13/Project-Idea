<template>
    <nav id="navbar" class="navbar fixed-top navbar-expand-lg navbar-light">
        <router-link v-if="isAuth" class="navbar-brand" to="/ideas">Project: Idea</router-link>
        <router-link v-else class="navbar-brand" to="/">Project: Idea</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span><i class="fas fa-bars"></i></span>
        </button>

        <div v-if="isAuth" class="collapse navbar-collapse text-center" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/ideas">Idea Feed</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/"> <img src="https://www.ienglishstatus.com/wp-content/uploads/2018/04/Sad-Profile-Pic-for-Whatsapp.png" alt=""> Logout</router-link>
                </li>
            </ul>
        </div>
        <div v-else class="collapse navbar-collapse text-center" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/about">About</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/login">Login</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/register">Register</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "navbar",
        computed: {
            ...mapState([
                'isAuth'
            ])
        }
    };
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Pacifico');
    .navbar {
        background: transparent;
    }
    .navbar-brand{
        font-family: 'Pacifico', cursive;
    }
    .navbar li {
        font-weight: bold;
    }
    li img {
        margin: auto;
        max-width: 25px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
    }
    .navbar-light .navbar-toggler {
        color: #e74c3c;
        border: none;
    }
    @media (max-width: 989px) {
        .navbar-collapse{
            background: white;
        }
    }
</style>