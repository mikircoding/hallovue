<template>
  <!--gunakan sistem templating-->
  <!-- <Layout /> -->
  <!-- Header -->
  <HeaderPage />
  <!-- <vue3-progress /> -->
  <router-view />
  <!-- footer -->
  <FooterPage />
</template>
<script>
//import Layout from "./components/layouts/Layout.vue";
import HeaderPage from "@/components/HeaderPage.vue";
import FooterPage from "@/components/FooterPage.vue";
export default {
  name: "AppComponent",
  components: {
    //Layout,
    HeaderPage,
    FooterPage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
