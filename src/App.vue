<template>
    <v-app>
<!--            <test-nav />-->
        <navbar/>
        <v-main class="mt-8">
            <router-view/>
        </v-main>
        <app-footer/>
    </v-app>
</template>

<script>
    import Navbar from "@/components/Navbar.vue";
    import AppFooter from "@/components/Footer.vue";
    import TestNav from "@/components/TestNav.vue";

    export default {
        name: "App",
        components: {
            Navbar,
            AppFooter,
            TestNav
        },

    };
</script>
<style>
    html {
        overflow-y: auto;
        font-size: 16px;
        font-family: "Poppins", sans-serif;
    }

    a {
        text-decoration: none !important;

    }

    /* custom scroll bar */
    ::-webkit-scrollbar {
        width: 8px;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: #6200ea;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #000;
    }

    @media only screen and (min-width: 720px) {
        h1, .h1 {
            font-size: 3.7rem;
        }
    }

</style>
