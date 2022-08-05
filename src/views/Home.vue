<template>
  <div class="home">
    <Hero />
    <Clients />
    <OurServices />
    <WorkProcess />
    <Pricing />
    <Testimonials />
    <PortfolioStat />
    <Newsletter />
    <Footer />
  </div>
</template>

<script>
import {
  Hero,
  Clients,
  OurServices,
  WorkProcess,
  Pricing,
  Testimonials,
  PortfolioStat,
  Newsletter,
  Footer,
} from "@/components/templates";

export default {
  name: "Home",
  components: {
    Hero,
    Clients,
    OurServices,
    WorkProcess,
    Pricing,
    Testimonials,
    PortfolioStat,
    Newsletter,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/abstracts" as a;
.home {
  display: flex;
  flex-direction: column;
  gap: 6rem;
}
</style>
