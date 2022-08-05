<template>
  <article class="card__item">
    <Ratings rating="2" />
    <p class="card__item-text">
      {{ text }}
    </p>
    <div class="card__client-wrapper">
      <p class="card__client-name">{{ clientName }}</p>
      <p class="card__client-location">{{ clientLocation }}</p>
    </div>
  </article>
</template>

<script>
import { Ratings } from "@/components/elements";

export default {
  name: "TestimonialCard",
  components: {
    Ratings,
  },
  props: {
    text: {
      type: String,
    },
    clientName: {
      type: String,
    },
    clientLocation: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/abstracts" as a;

.card__item {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  width: 15rem;
  background-color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0px 41.04px 42.48px rgba(0, 0, 0, 0.053);

  .card__item-text {
    font-size: a.$fs-xsmall;
  }

  .card__client-wrapper {
    .card__client-name {
      font-size: a.$fs-small;
    }

    .card__client-location {
      font-size: a.$fs-xsmall;
    }
  }
}
</style>
