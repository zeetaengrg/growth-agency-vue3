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
  margin-top: 4rem;
  padding: 0rem 8rem;
  gap: 5rem;
  position: relative;

  @mixin card {
    background-color: a.$primary-clr-4;
    width: 31rem;
    border-radius: 1rem;
    padding: 3rem;
    background-image: url("../assets/images/union.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .work__left-col {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .work__header {
      @include a.header;
    }

    .work__subheader {
      @include a.subheader;
    }

    .work__card {
      @include card;
      margin-top: 1rem;
      gap: 3rem;

      @mixin card-content {
        background-color: a.$secondary-clr;
        border-radius: 1rem;
        width: 20rem;
        display: flex;
      }

      #card-top-content {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        .work__card-content:nth-child(1) {
          @include card-content;
          padding: 2rem;
          height: 10rem;
          flex-direction: column;
          gap: 1rem;

          .work__bar-one {
            background: a.$bg-gradient;
            height: 0.5rem;
            width: 75%;
            border-radius: 1rem;
          }

          .work__bar-two {
            background: a.$bg-gradient;
            height: 0.5rem;
            width: 95%;
            border-radius: 1rem;
          }

          .work__img-wrapper {
            display: flex;
            align-items: center;
            gap: 1rem;

            .work__profile-img {
              height: 3rem;
              width: 3rem;
              border-radius: 50%;
              background-color: a.$bg-gradient;
              border: 1px solid a.$bg-gradient;
            }

            .work__bar-three {
              background: a.$bg-gradient;
              height: 0.5rem;
              width: 30%;
              border-radius: 1rem;
            }
          }
        }

        .work__card-content:nth-child(2) {
          @include card-content;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;

          .work__icon-wrapper {
            display: grid;
            place-content: center;
            background-color: a.$primary-clr-1;
            height: 2rem;
            width: 2rem;
            border-radius: 0.5rem;
            color: a.$secondary-clr;
          }

          .work__bar-four {
            background: a.$bg-gradient;
            height: 0.5rem;
            width: 80%;
            border-radius: 1rem;
          }
        }
      }

      .work__card-info {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .work__card-desc {
          font-size: 0.8rem;
          font-weight: 400;
          max-width: 75%;
          margin: 0 auto;
        }
      }
    }
  }

  .work__right-col {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    .work__card {
      @include card;
      height: 29rem;

      &__img {
        width: 100%;
      }
    }
  }

  .work__aside {
    position: absolute;
    left: 0rem;
    bottom: -4rem;

    .work__aside-arrow {
      width: 12rem;
      transform: scale(1, -1);
    }

    .work__aside-star {
      position: absolute;
      width: 5rem;
      top: -2.5rem;
      left: 9.5rem;
    }
  }
}
</style>
