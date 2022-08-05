<template>
  <Navbar />
  <Hero />
  <Clients />
  <OurServices />
  <WorkProcess />
</template>

<script>
import {
  Navbar,
  Hero,
  Clients,
  OurServices,
  WorkProcess,
} from "@/components/templates";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    Clients,
    OurServices,
    WorkProcess,
  },
};
</script>
