<template>
  <section class="work">
    <section class="work-left">
      <h1 class="work-left__header">How It Works?</h1>
      <p class="work-left__subheader">
        Resolving neglected sir tolerably but existence conveying for. Day his
        put off unaffected literature partiality inhabiting.
      </p>
      <article class="work-left-card">
        <figure>
          <img
            class="work-left-card__img"
            src="../assets/images/union.svg"
            alt="union"
          />
        </figure>
        <div class="box-content">
          <div class="info"></div>
        </div>
      </article>
    </section>
    <section class="work-right">
      <article class="work-right-card">
        <figure>
          <img
            class="work-right-card__img"
            src="../assets/images/union.svg"
            alt="union"
          />
        </figure>
      </article>
      <article class="work-right-card">
        <figure>
          <img
            class="work-right-card__img"
            src="../assets/images/union.svg"
            alt="union"
          />
        </figure>
      </article>
    </section>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/styles/abstracts" as a;

.work {
  display: flex;
  padding: 1rem 8rem;
  gap: 5rem;

  @mixin card {
    background-color: a.$primary-clr-4;
    /* height: 29rem; */
    width: 31rem;
    border-radius: 1rem;
  }

  .work-left {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &__header {
      @include a.header;
    }

    &__subheader {
      @include a.subheader;
    }

    .work-left-card {
      @include card;
      margin-top: 1rem;

      &__img {
        width: 100%;
      }
    }
  }

  .work-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    .work-right-card {
      @include card;

      &__img {
        width: 100%;
      }
    }
  }
}
</style>
