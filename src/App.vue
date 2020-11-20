<template>
  <v-app>
     <navbar />
<!--    <test-nav />-->
    <v-main>
      <router-view />
    </v-main>
    <app-footer></app-footer>
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
  html { overflow-y: auto }
  a{
      text-decoration: none !important;

  }
</style>
