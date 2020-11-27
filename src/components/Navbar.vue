<template>
    <v-app-bar
            dense
            color="white">
        <a href="/">
            <v-img
                    :src="require('../assets/logo.png')"
                    contain
                    max-width="40px"
            />
        </a>
        <v-spacer/>

        <a href="/" v-if="this.$route.path !== '/' && !this.$vuetify.breakpoint.xsOnly">Home</a>
        <router-link :to="{ name: 'Studies' }" tag="a">Experience</router-link>
        <router-link :to="{ name: 'Projects' }" tag="a">Work</router-link>

        <a href="/cv-en.pdf" target="_blank" v-if="!this.$vuetify.breakpoint.xsOnly">Resume</a>
        <router-link :to="{ name: 'Contact' }">
            Contact
        </router-link>
    </v-app-bar>

</template>

<script>
    export default {
        name: "Navbar",
        data() {
            return {
                drawer: false,
                group: null,

            }
        }
    };
</script>

<style scoped lang="scss">
    a {
        color: #6200EA !important;
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
