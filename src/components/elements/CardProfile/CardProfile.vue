<template>
  <article class="work__profile">
    <figure class="work__img-wrapper">
      <img
        src="../../../assets/images/2.jpg"
        alt="Profile Image"
        class="work__img"
      />
    </figure>
    <div class="work__bar-wrapper">
      <div class="work__bar1"></div>
      <div class="work__bar2"></div>
    </div>
    <figure class="work__icon-wrapper">
      <font-awesome-icon icon="fa-solid fa-location-dot" />
    </figure>
  </article>
</template>

<script>
export default {
  name: "CardProfile",
  props: {},
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/abstracts" as a;

.work__profile {
  @include a.card-content;
  gap: 1rem;
  padding: 1.5rem;
  align-items: center;

  .work__img-wrapper {
    .work__img {
      height: 3rem;
      width: 3rem;
      border-radius: 50%;
      background-color: a.$bg-gradient;
      border: 1px solid a.$bg-gradient;
    }
  }

  .work__bar-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    .work__bar1 {
      background: a.$bg-gradient;
      height: 0.5rem;
      width: 80%;
      border-radius: 1rem;
    }

    .work__bar2 {
      background: a.$bg-gradient;
      height: 0.5rem;
      width: 95%;
      border-radius: 1rem;
    }
  }
}
</style>
