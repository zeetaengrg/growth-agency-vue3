<template>
  <HomeView />
  <!-- <AboutView />
  <ServicesView />
  <ContactsView /> -->
</template>

<script>
import HomeView from "@/views/HomeView.vue"

export default {
  name: "App",
  components: {
    HomeView,
    // AboutView,
    // ServicesView,
    // ContactsView,
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

  *,
  ::before,
  ::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    line-height: 16px;
    font-weight: 500;
    color: #3E4581;
    background-color: #E5E5E5;
  }
</style>
