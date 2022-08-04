<template>
  <section class="work" id="work-container">
    <section class="work__left-col" aria-labelledby="header">
      <h1 class="work__header" id="header">How It Works?</h1>
      <p class="work__subheader">
        Resolving neglected sir tolerably but existence conveying for. Day his
        put off unaffected literature partiality inhabiting.
      </p>
      <section class="work__card" id="card-container">
        <section id="card-top-content">
          <article class="work__card-content">
            <div class="work__bar-one"></div>
            <div class="work__bar-two"></div>
            <figure class="work__img-wrapper">
              <img
                src="../assets/images/2.jpg"
                alt="profile"
                class="work__profile-img"
              />
              <div class="work__bar-three"></div>
            </figure>
          </article>
          <article class="work__card-content">
            <figure class="work__icon-wrapper">
              <font-awesome-icon icon="fa-solid fa-angle-down" />
            </figure>
            <div class="work__bar-four"></div>
          </article>
        </section>
        <article class="work__card-info">
          <h2 class="work__card-header">Intelligence</h2>
          <p class="work__card-desc">
            Marketing intelligence (MI) is the everyday information relevant to
            a company's markets
          </p>
        </article>
      </section>
    </section>
    <section class="work__right-col" id="right-container">
      <section class="work__card" id="card-container">
        <section id="card-top-content">
          <article class="work__card-content">
            <figure class="work__img-wrapper">
              <img src="" alt="" />
            </figure>
          </article>
        </section>
      </section>
      <section class="work__card" id="card-container"></section>
    </section>
    <figure class="work__aside">
      <img
        class="work__aside-star"
        src="../assets/images/star.svg"
        alt="Star"
      />
      <img
        class="work__aside-arrow"
        src="../assets/images/arrow-direction.svg"
        alt="Arrow"
      />
    </figure>
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
