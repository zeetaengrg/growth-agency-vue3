<template>
  <div class="ratings">
    <span v-if="rating >= 1">
      <font-awesome-icon class="ratings__icon" icon="fa-solid fa-star" />
    </span>
    <span v-else-if="rating >= 0.5">
      <font-awesome-icon class="ratings__icon" icon="fa-solid fa-star-half" />
    </span>
    <span v-else-if="rating >= 2">
      <font-awesome-icon class="ratings__icon" icon="fa-solid fa-star" />
      <font-awesome-icon class="ratings__icon" icon="fa-solid fa-star" />
    </span>
    <span v-else-if="rating >= 1.5">
      <font-awesome-icon class="ratings__icon" icon="fa-solid fa-star-half" />
    </span>
    <span v-else-if="rating >= 3">
      <font-awesome-icon class="ratings__icon" icon="fa-solid fa-star" />
    </span>
    <span v-else-if="rating >= 2.5">
      <font-awesome-icon class="ratings__icon" icon="fa-solid fa-star-half" />
    </span>
    <span v-else-if="rating >= 4">
      <font-awesome-icon class="ratings__icon" icon="fa-solid fa-star" />
    </span>
    <span v-else-if="rating >= 3.5">
      <font-awesome-icon class="ratings__icon" icon="fa-solid fa-star-half" />
    </span>
    <span v-else-if="rating >= 5">
      <font-awesome-icon class="ratings__icon" icon="fa-solid fa-star" />
    </span>
    <span v-else>
      <font-awesome-icon class="ratings__icon" icon="fa-solid fa-star-half" />
    </span>
  </div>
</template>

<script>
export default {
  name: "Ratings",
  props: {
    rating: {
      type: Number,
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/abstracts" as a;

.ratings {
  display: flex;
  justify-content: center;

  .ratings__icon {
    font-size: a.$fs-small;
    color: gold;
  }
}
</style>
