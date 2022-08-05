<template>
  <header class="header">
    <h1 class="header__title" :id="id">{{ title }}</h1>
    <p class="header__subtitle">{{ subtitle }}</p>
  </header>
</template>

<script>
export default {
  name: "SectionHeader",
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    id: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../../../assets/styles/abstracts" as a;
.header {
  text-align: center;

  .header__title {
    @include a.header;
  }

  .header__subtitle {
    @include a.subheader;
    width: 45%;
    margin: 0.5rem auto;
  }
}
</style>
