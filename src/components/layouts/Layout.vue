<template>
  <div>
    <HeaderPage />
    <router-view></router-view>
    <FooterPage />
  </div>
</template>

<script>
import HeaderPage from "./header/Header.vue";
import FooterPage from "./footer/Footer.vue";

export default {
  name: "LayoutComponent",
  components: {
    HeaderPage,
    FooterPage,
  },
};
</script>