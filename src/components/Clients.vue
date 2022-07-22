<template>
  <section class="clients">
    <figure class="clients-logo">
      <img src="../assets/images/planday.svg" alt="Planday Logo" />
      <img src="../assets/images/umbraco.svg" alt="Umbraco Logo" />
      <img src="../assets/images/pearlfisher.svg" alt="Pearl Fisher Logo" />
      <img src="../assets/images/brightpearl.svg" alt="Bright Pearl Logo" />
      <img src="../assets/images/planday.svg" alt="Planday Logo" />
    </figure>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/styles/abstracts" as a;

.clients {
  margin: 12rem 0rem 7rem;
  display: grid;
  place-content: center;

  .clients-logo {
    display: flex;
    align-items: center;
    gap: 7rem;
  }
}
</style>