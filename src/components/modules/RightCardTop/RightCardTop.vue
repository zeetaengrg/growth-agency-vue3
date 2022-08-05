<template>
  <section class="work__card-top" id="card-container">
    <aside class="work__price-content">
      <p class="work__price">$5k</p>
    </aside>
    <section class="work__top-content">
      <CardProfile />
      <CardProfile />
    </section>
    <CardHeader
      title="Marketing"
      subtitle="Marketing intelligence is necessary when entering a foreign market.
        determines the intelligence needed"
    />
  </section>
</template>

<script>
import { CardProfile, CardHeader } from "@/components/elements";

export default {
  name: "RightCardTop",
  components: {
    CardProfile,
    CardHeader,
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/abstracts" as a;

.work__card-top {
  @include a.card;
  gap: 3rem;
  position: relative;
  padding: 4rem 0rem;

  .work__price-content {
    position: absolute;
    top: 1.5rem;
    right: 2.5rem;
    padding: 1rem 0.5rem;
    background: a.$bg-gradient;
    border-radius: 1rem;

    .work__price {
      font-size: 1.5rem;
      font-weight: 600;
      color: a.$secondary-clr;
    }
  }

  .work__top-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .work__info2 {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .work__desc2 {
      font-size: 0.8rem;
      font-weight: 400;
      max-width: 75%;
      margin: 0 auto;
    }
  }
}
</style>
