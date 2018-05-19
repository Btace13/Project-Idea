<template>
    <div class="ui fixed menu" id='navbar'>
        <div class="ui container">
            <router-link to='/' class="header item">
            Project: Idea
            </router-link>
            <div class="right menu">
                <div class="ui simple dropdown item">
                    <i class="fas fa-ellipsis-v"></i>
                    <div class="menu" v-if="isAuth">
                        <router-link class="item" to='/about'>About</router-link>
                        <router-link class="item" to='/ideas'>Idea Feed</router-link>
                        <router-link class="item" to='/dashboard'>Dashboard</router-link>
                        <div class="divider"></div>
                        <router-link
                                to="/"
                                class="item"
                        >
                            <img
                                    class="rounded-circle"
                                    src="https://cdn1.iconfinder.com/data/icons/avatar-1-2/512/User2-128.png"
                            alt='name'
                            style= 'width: 25px; marginRight: 5px'
                            title="You must have a Gravatar connected to your email to display an image"
                            />
                            Logout
                        </router-link>
                    </div>
                    <div v-else class="menu">
                        <router-link class="item" to='/about'>About</router-link>
                        <a class="item" to='/login'>LogIn</a>
                        <div class="divider"></div>
                        <a class="item" to='/register'>Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
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

<style>
    #navbar{
        background: #00B238;
        font-size: 1.123em;
    }
    #navbar .header {
        font-size: 1.1em;
    }
    .ui.buttons>.ui.dropdown:last-child .menu, .ui.menu .right.dropdown.item .menu, .ui.menu .right.menu .dropdown:last-child .menu {
        padding: 15px;
    }
</style>