<template>
    <v-app-bar dense class="p-3">
        <a href="/">
            <v-img
                    :src="require('../assets/logo.png')"
                    contain
                    max-width="40px"
            />
        </a>
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
</template>

<script>
    export default {
        name: "Navbar",
    };
</script>

<style scoped lang="scss">
    a {
        color: blue !important;
        margin-right: 60px;
        font-weight: bolder;
    @media only screen and (max-width: 720px) {
        margin-right: 10px;
    }
    }

    .router-link-exact-active {
        border-bottom: solid 3px #ff5000;
        color: #ff5000 !important;

    }
</style>
