<template>
    <nav class="navbar  navbar-expand-lg navbar-light bg-primary">
      <router-link :to="{ name: 'Home' }" tag="a" class="navbar-brand">
        <v-img
          :src="require('../assets/logo white.png')"
          contain
          max-width="40px"
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link :to="{ name: 'Home' }" tag="a" class="nav-link"
              >Home<span class="sr-only">(current)</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Studies' }" tag="a" class="nav-link"
              >Studies</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Projects' }" tag="a" class="nav-link"
              >Projects</router-link
            >
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
        <li class="nav-item">
                    <router-link to="/cv-en.pdf" class="nav-link" target="_blank">
        Resume
      </router-link>
        </li>
        <li class="nav-item">
            <router-link :to="{name: 'Contact'}" class="nav-link">
        Contact
      </router-link>
        </li>
  </ul>
  
      </div>
    </nav>
</template>

<script>
export default {};
</script>
<style scoped>
a {
  color: white !important;
  text-decoration: none;
}
</style>
