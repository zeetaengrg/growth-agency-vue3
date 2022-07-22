<template>
  <section class="work">
    <header class="work-header">
      <h1 class="header">How It Works?</h1>
      <p class="subheader">
        Resolving neglected sir tolerably but existence conveying for. Day his
        put off unaffected literature partiality inhabiting.
      </p>
    </header>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/styles/abstracts" as a;

.work {
  .work-header {
    .header {
      @include a.header;
    }

    .subheader {
      width: 45%;
    }
  }
}
</style>