<template>
  <section class="work" id="work-container">
    <section class="work__left-col" aria-labelledby="work-header">
      <h1 class="work__header" id="work-header">How It Works?</h1>
      <p class="work__subheader">
        Resolving neglected sir tolerably but existence conveying for. Day his
        put off unaffected literature partiality inhabiting.
      </p>
      <LeftCard />
    </section>
    <section class="work__right-col" id="right-container">
      <RightCardTop />
      <RightCardBottom />
    </section>
    <figure class="work__aside">
      <img
        class="work__aside-star"
        src="../../../assets/images/star.svg"
        alt="Star"
      />
      <img
        class="work__aside-arrow"
        src="../../../assets/images/arrow-direction.svg"
        alt="Arrow"
      />
    </figure>
  </section>
</template>

<script>
import { SectionHeader } from "@/components/elements";
import { LeftCard, RightCardTop, RightCardBottom } from "@/components/modules";

export default {
  name: "WorkProcess",
  components: {
    SectionHeader,
    LeftCard,
    RightCardTop,
    RightCardBottom,
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/abstracts" as a;

.work {
  display: flex;
  padding: 0rem 8rem;
  gap: 5rem;
  position: relative;

  .work__left-col {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .work__header {
      @include a.header;
    }

    .work__subheader {
      @include a.subheader;
    }
  }

  .work__right-col {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  .work__aside {
    position: absolute;
    left: 0rem;
    bottom: -4rem;

    .work__aside-arrow {
      width: 12rem;
      transform: scale(1, -1);
    }

    .work__aside-star {
      position: absolute;
      width: 5rem;
      top: -2.5rem;
      left: 9.5rem;
    }
  }
}
</style>
