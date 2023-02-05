<template>
  <TheHeader @open-mobile-sidebar="openMobileSidebar"/>
  <TheSideBarSmall />
  <TheSidebar />
  <TheSidebarMobile :is-open="isMobileSidebarOpen" @close="closeMobileSidebar"/>
  <TheCategories />
  <TheVideos />
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheSideBarSmall from "./components/TheSideBarSmall.vue";
import TheSidebar from "./components/TheSidebar.vue";
import TheSidebarMobile from "./components/TheSidebarMobile.vue";
import TheCategories from "./components/TheCategories.vue";
import TheVideos from "./components/TheVideos.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheSideBarSmall,
    TheSidebar,
    TheSidebarMobile,
    TheCategories,
    TheVideos,
  },
  data() {
    return {
      isMobileSidebarOpen: false
    }
  },
  methods: {
    openMobileSidebar(){
      this.isMobileSidebarOpen = true
    },
    closeMobileSidebar() {
      this.isMobileSidebarOpen = false
    }
  }
};
</script>

<style scoped></style>
