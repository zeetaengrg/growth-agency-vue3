<template>
  <section class="portfolio" id="portfolio-content">
    <section class="portfolio__top-content">
      <article class="portfolio__completed">
        <p class="portfolio__num">25,356</p>
        <p class="portfolio__text">Projects Completed</p>
      </article>
      <article class="portfolio__revenue">
        <p class="portfolio__num">$1M+</p>
        <p class="portfolio__text">Revenue Generated</p>
      </article>
      <article class="portfolio__customer">
        <p class="portfolio__num">95%</p>
        <p class="portfolio__text">Happy Customers</p>
      </article>
    </section>
    <SectionHeader
      title="Want To Start A Project With Us?"
      subtitle="Warrant present garrets limited cordial in inquiry to. Supported me sweetness behaviour shameless excellent so arranging."
    />
    <button class="portfolio__btn">Get Started</button>
  </section>
</template>

<script>
import { SectionHeader } from "@/components/elements";

export default {
  name: "Portfolio",
  components: {
    SectionHeader,
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/abstracts" as a;

.portfolio {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4rem;
  background-color: a.$primary-clr-4;
  height: 100vh;

  .portfolio__top-content {
    display: flex;
    justify-content: space-between;
    gap: 10rem;

    .portfolio__completed,
    .portfolio__revenue,
    .portfolio__customer {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      text-align: center;

      .portfolio__num {
        background: a.$bg-gradient;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: a.$fs-xlarge;
        font-weight: a.$fw-bold;
      }

      .portfolio__text {
        font-size: a.$fs-xsmall;
        font-weight: a.$fw-light;
      }
    }
  }

  .portfolio__btn {
    padding: 0.75rem 3rem;
    background: a.$bg-gradient;
    color: a.$secondary-clr;
    border: none;
    border-radius: 0.25rem;
    font-weight: a.$fw-medium;
  }
}
</style>
