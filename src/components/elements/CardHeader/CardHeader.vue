<template>
  <article class="work__btm-content">
    <h2 class="work__title">{{ title }}</h2>
    <p class="work__subtitle">{{ subtitle }}</p>
  </article>
</template>

<script>
export default {
  name: "CardHeader",
  props: {
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
.work__btm-content {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .work__subtitle {
    font-size: 0.8rem;
    font-weight: 400;
    max-width: 75%;
    margin: 0 auto;
  }
}
</style>
