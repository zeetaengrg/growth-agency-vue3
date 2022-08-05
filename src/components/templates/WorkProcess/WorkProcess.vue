<template>
  <section class="work" id="work-container">
    <section class="work__left-col" aria-labelledby="work-header">
      <h1 class="work__header" id="work-header">How It Works?</h1>
      <p class="work__subheader">
        Resolving neglected sir tolerably but existence conveying for. Day his
        put off unaffected literature partiality inhabiting.
      </p>
      <!-- <SectionHeader
        id="work-header"
        title="How It Works?"
        subtitle="Resolving neglected sir tolerably but existence conveying for. Day his
        put off unaffected literature partiality inhabiting."
      /> -->
      <section class="work__left-card" id="card-container">
        <section class="work__top-content1">
          <article class="work__content1">
            <div class="work__bar1"></div>
            <div class="work__bar2"></div>
            <figure class="work__img-wrap1">
              <img
                src="../../../assets/images/1.jpg"
                alt="profile"
                class="work__img1"
              />
              <div class="work__bar3"></div>
            </figure>
          </article>
          <article class="work__content2">
            <figure class="work__icon-wrap1">
              <font-awesome-icon icon="fa-solid fa-angle-down" />
            </figure>
            <div class="work__bar4"></div>
          </article>
        </section>
        <article class="work__info1">
          <h2 class="work__card-header">Intelligence</h2>
          <p class="work__desc1">
            Marketing intelligence (MI) is the everyday information relevant to
            a company's markets
          </p>
        </article>
      </section>
    </section>
    <section class="work__right-col" id="right-container">
      <section class="work__right-card1" id="card-container">
        <aside class="work__price-content">
          <p class="work__price">$5k</p>
        </aside>
        <section class="work__top2">
          <article class="work__content3">
            <figure class="work__img-wrap2">
              <img
                src="../../../assets/images/2.jpg"
                alt="Profile Image"
                class="work__img2"
              />
            </figure>
            <div class="work__bar-wrap1">
              <div class="work__bar5"></div>
              <div class="work__bar6"></div>
            </div>
            <figure class="work__icon-wrap">
              <font-awesome-icon icon="fa-solid fa-location-dot" />
            </figure>
          </article>
          <article class="work__content3">
            <figure class="work__img-wrap2">
              <img
                src="../../../assets/images/3.jpg"
                alt="Profile Image"
                class="work__img2"
              />
            </figure>
            <div class="work__bar-wrap1">
              <div class="work__bar5"></div>
              <div class="work__bar6"></div>
            </div>
            <figure class="work__icon-wrap">
              <font-awesome-icon icon="fa-solid fa-location-dot" />
            </figure>
          </article>
        </section>
        <article class="work__info2">
          <h2 class="work__card-header">Marketing</h2>
          <p class="work__desc2">
            Marketing intelligence is necessary when entering a foreign market.
            determines the intelligence needed
          </p>
        </article>
      </section>
      <section class="work__card-three" id="card-container">
        <section class="work__card-top">
          <div class="work__card-content">
            <article class="work__top-content">
              <div class="work__earn">
                <p class="work__earn-num">
                  <font-awesome-icon
                    class="circle-icon"
                    icon="fa-solid fa-circle"
                  />
                  $500+
                </p>
                <p class="work__earn-text">Earn per day</p>
              </div>
              <div class="work__pay">
                <p class="work__pay-num">
                  <font-awesome-icon
                    class="circle-icon"
                    icon="fa-solid fa-circle"
                  />
                  $50
                </p>
                <p class="work__pay-text">Pay us</p>
              </div>
            </article>
            <figure class="work__pie-chart">
              <img
                src="../../../assets/images/pie-chart1.png"
                alt="Pie One"
                class="pie-one"
              />
              <img
                src="../../../assets/images/pie-chart2.png"
                alt="Pie Two"
                class="pie-two"
              />
            </figure>
            <article class="work__bottom-text">
              <p class="work__earning-num">$15000+</p>
              <p class="work__earning-text">Earning</p>
            </article>
          </div>
        </section>
      </section>
    </section>
    <figure class="work__aside">
      <img
        class="work__aside-star"
        src="../../../assets/images/star.svg"
        alt="Star"
      />
      <img
        class="work__aside-arrow"
        src="../../../assets/images/arrow-direction.svg"
        alt="Arrow"
      />
    </figure>
  </section>
</template>

<script>
import { SectionHeader } from "@/components/elements";

export default {
  name: "WorkProcess",
  components: {
    SectionHeader,
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/abstracts" as a;

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
    background-image: url("../../../assets/images/union.svg");
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

    .work__left-card {
      @include card;
      margin-top: 1rem;
      gap: 3rem;

      .work__top-content1 {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        .work__content1 {
          @include a.card-content;
          padding: 2rem;
          flex-direction: column;
          gap: 1rem;

          .work__bar1 {
            background: a.$bg-gradient;
            height: 0.5rem;
            width: 75%;
            border-radius: 1rem;
          }

          .work__bar2 {
            background: a.$bg-gradient;
            height: 0.5rem;
            width: 95%;
            border-radius: 1rem;
          }

          .work__img-wrap1 {
            display: flex;
            align-items: center;
            gap: 1rem;

            .work__img1 {
              height: 3rem;
              width: 3rem;
              border-radius: 50%;
              background-color: a.$bg-gradient;
              border: 1px solid a.$bg-gradient;
            }

            .work__bar3 {
              background: a.$bg-gradient;
              height: 0.5rem;
              width: 30%;
              border-radius: 1rem;
            }
          }
        }

        .work__content2 {
          @include a.card-content;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;

          .work__icon-wrap1 {
            display: grid;
            place-content: center;
            background-color: a.$primary-clr-1;
            height: 2rem;
            width: 2rem;
            border-radius: 0.5rem;
            color: a.$secondary-clr;
          }

          .work__bar4 {
            background: a.$bg-gradient;
            height: 0.5rem;
            width: 80%;
            border-radius: 1rem;
          }
        }
      }

      .work__info1 {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .work__desc1 {
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

    .work__right-card1 {
      @include card;
      gap: 3rem;
      position: relative;
      padding: 4rem 0rem;

      .work__price-content {
        position: absolute;
        top: 1.5rem;
        right: 2.5rem;
        padding: 1rem 0.5rem;
        background: a.$bg-gradient;
        border-radius: 1rem;

        .work__price {
          font-size: 1.5rem;
          font-weight: 600;
          color: a.$secondary-clr;
        }
      }

      .work__top2 {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .work__content3 {
          @include a.card-content;
          gap: 1rem;
          padding: 1.5rem;
          align-items: center;

          .work__img-wrap2 {
            .work__img2 {
              height: 3rem;
              width: 3rem;
              border-radius: 50%;
              background-color: a.$bg-gradient;
              border: 1px solid a.$bg-gradient;
            }
          }

          .work__bar-wrap1 {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            width: 100%;

            .work__bar5 {
              background: a.$bg-gradient;
              height: 0.5rem;
              width: 80%;
              border-radius: 1rem;
            }

            .work__bar6 {
              background: a.$bg-gradient;
              height: 0.5rem;
              width: 95%;
              border-radius: 1rem;
            }
          }
        }
      }

      .work__info2 {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .work__desc2 {
          font-size: 0.8rem;
          font-weight: 400;
          max-width: 75%;
          margin: 0 auto;
        }
      }
    }

    .work__card-three {
      @include card;

      .work__card-top {
        .work__card-content {
          @include a.card-content;
          flex-direction: column;
          .work__top-content {
            width: 100%;
            display: flex;
            justify-content: space-between;
            .circle-icon {
              font-size: 0.5rem;
            }

            .work__earn,
            .work__pay {
              .work__earn-num,
              .work__pay-num {
                display: flex;
                align-items: center;
                gap: 0.5rem;
              }

              .work__earn-num {
                .circle-icon {
                  color: orange;
                }
              }

              .work__pay-num {
                .circle-icon {
                  color: a.$primary-clr-3;
                }
              }

              .work__earn-text,
              .work__pay-text {
                padding-left: 1rem;
                font-size: 0.7rem;
                font-weight: 400;
                color: rgb(151, 142, 142);
              }
            }
          }

          .work__bottom-text {
            .work__earning-num {
              font-size: 1.5rem;
              font-weight: 600;
            }

            .work__earning-text {
              font-size: 0.7rem;
              font-weight: 400;
              color: rgb(151, 142, 142);
              text-align: center;
            }
          }
        }
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
