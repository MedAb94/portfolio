<template>
    <div>
        <v-app-bar color="deep-purple accent-4"
                   dense class="p-3">
            <router-link :to="{ name: 'Home' }" tag="a">
                <v-img
                        :src="require('../assets/logo white.png')"
                        contain
                        max-width="40px"
                />
            </router-link>
            <v-spacer/>

            <router-link
                    :to="{ name: 'Home' }"
                    tag="a"
                    v-if="this.$route.path !== '/'"
            >Home
            </router-link
            >
            <router-link :to="{ name: 'Studies' }" tag="a">Studies</router-link>
            <router-link :to="{ name: 'Projects' }" tag="a">Projects</router-link>

            <a href="/cv-en.pdf" target="_blank">Resume</a>
            <router-link :to="{ name: 'Contact' }">
                Contact
            </router-link>
        </v-app-bar>
    </div>
</template>

<script>
    export default {
        name: "Navbar",
    };
</script>

<style scoped>
    a {
        color: white !important;
        margin-right: 60px;
        font-weight: bolder;
    }
    .router-link-exact-active{
        border-bottom: solid 3px #ff5000;
    }
</style>
