<template>
  <section class="testimonials" id="testimonials-content">
    <SectionHeader
      title="What Our Clients Say About Us"
      subtitle="Community development is often linked with community work or community planning, and may involve stakeholders, foundations,"
    />
    <section class="testimonials__items">
      <TestimonialCard
        text="Certainty say suffering his him collected intention promotion. Hill sold
        ham men made lose case. Views abode law heard   jokes too."
        clientName="Andrew Chris"
        clientLocation="London, UK"
      />
      <TestimonialCard
        text="Up maids me an ample stood given. Certainty say suffering his him collected intention promotion. quis nostrud exercitation ullamco."
        clientName="Chris Evans"
        clientLocation="New York, USA"
      />
      <TestimonialCard
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        clientName="Johny Depp"
        clientLocation="Ontario, Canada"
      />
      <TestimonialCard
        text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        clientName="Rocky Balboa"
        clientLocation="Mexico City, Mexico"
      />
      <TestimonialCard
        text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        clientName="James Dean"
        clientLocation="Madrid, Spain"
      />
    </section>
    <section class="testimonials__carousel-btns">
      <button class="testimonials__btn-prev">
        <font-awesome-icon icon="fa-solid fa-arrow-left-long" />
      </button>
      <button class="testimonials__btn-next">
        <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
      </button>
    </section>
  </section>
</template>

<script>
import { SectionHeader } from "@/components/elements";
import { TestimonialCard } from "@/components/modules";

export default {
  name: "Testimonials",
  components: {
    SectionHeader,
    TestimonialCard,
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/abstracts" as a;

.testimonials {
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .testimonials__items {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .testimonials__carousel-btns {
    display: flex;
    margin: 0 auto;
    gap: 1rem;
    border: 1px solid a.$primary-clr-4;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 2rem;
    padding: 0.5rem;

    @mixin carousel-btns {
      color: a.$primary-clr-3;
      font-size: 1.25rem;
      border: 1px solid a.$primary-clr-3;
      border-radius: 50%;
      background: transparent;
      padding: 0.4rem 0.5rem;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        background: a.$bg-gradient;
        color: white;
      }
    }

    .testimonials__btn-prev {
      @include carousel-btns;
    }

    .testimonials__btn-next {
      @include carousel-btns;
    }
  }
}
</style>
