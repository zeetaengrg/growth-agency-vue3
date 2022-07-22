<template>
  <Hero />
  <Clients />
  <OurServices />
  <WorkProcess />
</template>

<script>
import { Hero, Clients, OurServices, WorkProcess } from "@/components";

export default {
  name: "Home",
  components: {
    Hero,
    Clients,
    OurServices,
    WorkProcess,
  },
};
</script>

