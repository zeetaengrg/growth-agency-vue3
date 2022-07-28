<template>
  <section id="main-hero-content" class="hero">
    <figure class="img">
      <img
        src="../assets/images/arrow-direction.svg"
        alt="Arrow Direction"
        class="img__arrow"
      />
      <img src="../assets/images/star.svg" alt="Star" class="img__star" />
    </figure>
    <section aria-labelledby="hero-text" class="left-col">
      <h1 id="hero-text" class="left-col__header">Tell a better brand story</h1>
      <p class="left-col__subheader">
        Warrant present garrets limited cordial in inquiry to. Supported me
        sweetness behaviour shameless excellent so arranging.
      </p>
      <div class="left-col-btn">
        <button class="btn btn__primary">Get Started</button>
        <button class="btn btn__secondary">Contact Us</button>
      </div>
    </section>
    <section class="right-col" id="hero-left-content">
      <div class="profile">
        <figure class="profile-img">
          <img
            class="img"
            src="../assets/images/profile-img.jpg"
            alt="Profile"
          />
        </figure>
        <section aria-labelledby="profile-title" class="profile-box">
          <h2 id="profile-title" class="profile-box__heading">
            Amanda M. Data
          </h2>
          <div class="profile-box-body">
            <p class="body__text">Your Growth</p>
            <span class="body__number">3,000</span>
          </div>
        </section>
      </div>
      <div class="bar-data">
        <div class="top">
          <h3 class="top__header">Follower Growth</h3>
          <div class="top-icons">
            <font-awesome-icon
              class="icon icon-grid"
              icon="fa-solid fa-border-all"
            />
            <font-awesome-icon
              class="icon icon-download"
              icon="fa-solid fa-download"
            />
          </div>
        </div>
        <div class="middle">
          <p class="number">16.2k</p>
          <p class="followers">New Followers</p>
        </div>
        <div class="bottom">
          <div class="top-position">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
            <div class="bar4"></div>
            <div class="bar5"></div>
            <div class="bar6"></div>
            <div class="bar7"></div>
            <div class="bar8"></div>
            <div class="bar9"></div>
          </div>
          <div class="btm-position">
            <div class="scale">
              <p class="scale__text">8k</p>
              <hr class="hr__line" />
            </div>
            <div class="scale">
              <p class="scale__text">6k</p>
              <hr class="hr__line" />
            </div>
            <div class="scale">
              <p class="scale__text">4k</p>
              <hr class="hr__line" />
            </div>
            <div class="scale">
              <p class="scale__text">2k</p>
              <hr class="hr__line" />
            </div>
          </div>
        </div>
      </div>
      <div class="media">
        <div class="top">
          <h4 class="top__header">Media Type</h4>
          <div class="top-icons">
            <font-awesome-icon
              class="icon icon-grid"
              icon="fa-solid fa-border-all"
            />
            <font-awesome-icon
              class="icon icon-download"
              icon="fa-solid fa-download"
            />
          </div>
        </div>
        <div class="body">
          <div class="circle-top"></div>
          <div class="circle-bottom"></div>
          <div class="tooltip">
            <p class="tooltip-text">
              72.3% of the media for #sunrise are photos.
            </p>
            <span class="triangle"></span>
          </div>
        </div>
      </div>
      <div class="growth">
        <div class="left">
          <p class="left__text">14k</p>
        </div>
        <div class="right">
          <p class="header">Follower Growth</p>
          <div class="horizontal-bar">
            <div class="bar1"></div>
            <div class="bar2"></div>
          </div>
        </div>
      </div>
      <div class="emojis">
        <img
          src="../assets/images/surprise.svg"
          alt="Surprise Emoji"
          class="emoji"
        />
        <img src="../assets/images/angry.svg" alt="Angry Emoji" class="emoji" />
        <img src="../assets/images/heart.svg" alt="Heart Emoji" class="emoji" />
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "Hero",
  components: {},
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/abstracts" as a;
.hero {
  display: flex;
  padding: 7rem 4rem 0rem;
  position: relative;
  height: 85vh;

  .img {
    &__arrow {
      position: absolute;
      z-index: 1;
      top: 1rem;
      left: 0;
      height: 3.5rem;
      width: 3.5rem;
    }

    &__star {
      position: absolute;
      top: 3rem;
      left: 2.6rem;
      height: 2.5rem;
      width: 2.5rem;
    }
  }

  .left-col {
    flex: 0.8;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-left: 1.5rem;

    &__header {
      @include a.header;
      max-width: 80%;
    }

    &__subheader {
      @include a.subheader;
      max-width: 90%;
    }

    &-btn {
      display: inline-flex;
      gap: 1rem;
      max-width: fit-content;

      .btn {
        padding: 0.75rem 1.75rem;
        border: none;
        border-radius: 0.3rem;
        font-weight: a.$fw-medium;
        font-size: a.$fs-small;
        cursor: pointer;

        &__primary {
          color: a.$secondary-clr;
          background: a.$bg-gradient;
        }

        &__secondary {
          background: a.$bg-gradient;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          border: 1px solid transparent;
          border-image: linear-gradient(
            to right,
            hsla(269, 94%, 69%, 1),
            hsla(18, 82%, 69%, 1)
          );
          border-image-slice: 1;
        }
      }
    }
  }

  .right-col {
    flex: 1;
    position: relative;
    top: -2.5rem;

    .profile {
      position: relative;
      left: 10rem;
      top: -2rem;
      height: 9.2rem;
      width: 9.2rem;
      border-radius: 0.5rem;

      .profile-img {
        position: absolute;
        left: 7.5rem;
        top: -1.5rem;
        z-index: 1;
        border-radius: 50%;
        border: 2px solid rgba($color: a.$primary-clr-3, $alpha: 1);
        height: 3rem;
        width: 3rem;
        box-shadow: a.$bs-secondary;

        .img {
          height: 100%;
          width: 100%;
          border-radius: 50%;
        }
      }

      .profile-box {
        position: absolute;
        border: 1px solid a.$secondary-clr;
        border-radius: 0.5rem;
        text-align: center;
        box-shadow: a.$bs-primary;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 9rem;
        width: 9rem;
        padding: 1rem 1.5rem;

        &__heading {
          font-size: a.$fs-small;
        }

        &-body {
          display: flex;
          flex-direction: column;

          .body__text {
            font-size: a.$fs-xsmall;
          }

          .body__number {
            margin-top: 0.25rem;
            font-size: a.$fs-medium;
            font-weight: a.$fw-bold;
            background: a.$bg-gradient;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            letter-spacing: 2px;
          }
        }
      }
    }

    .bar-data {
      position: absolute;
      top: 9rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      border-radius: 0.5rem;
      box-shadow: a.$bs-primary;
      height: 15rem;
      width: 17rem;
      padding: 1.5rem;

      .top {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__header {
          font-size: a.$fs-small;
          font-weight: a.$fw-medium;
        }

        &-icons {
          display: flex;
          gap: 0.5rem;

          .icon {
            border: 1px solid hsla(228, 33%, 61%, 1);
            border-radius: 50%;
            padding: 0.35rem;
            cursor: pointer;
            color: a.$primary-clr-3;
          }

          .icon-grid {
            padding: 0.35rem 0.42rem;
          }
        }
      }

      .middle {
        display: flex;
        align-items: center;
        gap: 0.25rem;

        .number {
          font-size: a.$fs-base;
        }

        .followers {
          font-size: a.$fs-xsmall;
        }
      }

      .bottom {
        position: relative;

        .top-position {
          @mixin bar {
            position: absolute;
            bottom: 0.5rem;
            z-index: 1;
            width: 0.4rem;
            border-top-left-radius: 0.3rem;
            border-top-right-radius: 0.3rem;
            background: a.$bg-gradient;
          }

          .bar1 {
            @include bar;
            left: 1.5rem;
            height: 40%;
          }

          .bar2 {
            @include bar;
            left: 3rem;
            height: 20%;
          }

          .bar3 {
            @include bar;
            left: 4.5rem;
            height: 80%;
          }

          .bar4 {
            @include bar;
            left: 6rem;
            height: 60%;
          }

          .bar5 {
            @include bar;
            left: 7.5rem;
            height: 50%;
          }

          .bar6 {
            @include bar;
            left: 9rem;
            height: 60%;
          }

          .bar7 {
            @include bar;
            left: 10.5rem;
            height: 70%;
          }

          .bar8 {
            @include bar;
            left: 12rem;
            height: 45%;
          }

          .bar9 {
            @include bar;
            left: 13.5rem;
            height: 85%;
          }
        }

        .btm-position {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          font-size: a.$fs-xsmall;

          .scale {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            .hr__line {
              opacity: 0.5;
              width: 100%;
              background: a.$primary-clr-3;
            }
          }
        }
      }
    }

    .media {
      position: absolute;
      top: 1rem;
      left: 20rem;
      height: 15rem;
      width: 17rem;
      box-shadow: a.$bs-primary;
      padding: 1.5rem;
      border-radius: 0.5rem;

      .top {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__header {
          font-size: a.$fs-small;
          font-weight: a.$fw-medium;
        }

        &-icons {
          display: flex;
          gap: 0.5rem;

          .icon {
            border: 1px solid hsla(228, 33%, 61%, 1);
            border-radius: 50%;
            padding: 0.35rem;
            cursor: pointer;
            color: a.$primary-clr-3;
          }

          .icon-grid {
            padding: 0.35rem 0.42rem;
          }
        }
      }

      .body {
        position: relative;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .circle-top {
          border: 1.5rem solid a.$primary-clr-3;
          border-radius: 50%;
          height: 9rem;
          width: 9rem;
          position: absolute;
          z-index: 1;
        }

        .circle-bottom {
          border: 0.75rem solid a.$primary-clr-2;
          border-radius: 50%;
          height: 9rem;
          width: 9rem;
          position: absolute;
          z-index: 2;
        }

        .tooltip {
          background-color: a.$primary-clr-1;
          position: relative;
          left: -2rem;
          z-index: 3;
          padding: 0.5rem;
          width: 65%;
          border-radius: 0.3rem;

          .triangle {
            position: absolute;
            top: 2.5rem;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 0;
            border-left: 0.5rem solid transparent;
            border-right: 0.5rem solid transparent;
            border-top: 0.5rem solid a.$primary-clr-1;
          }

          .tooltip-text {
            font-size: a.$fs-xsmall;
            color: a.$secondary-clr;
          }
        }
      }
    }

    .growth {
      position: absolute;
      top: 17rem;
      left: 18rem;
      height: 5rem;
      width: 20rem;
      box-shadow: a.$bs-primary;
      padding: 1rem;
      border-radius: 0.5rem;
      display: flex;
      gap: 1rem;

      .left {
        flex: 1;
        background-color: rgba($color: a.$primary-clr-3, $alpha: 0.2);
        border-radius: 0.3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;

        .left__text {
          font-size: a.$fs-large;
          font-weight: a.$fw-medium;
        }
      }

      .right {
        flex: 3;

        .header {
          font-size: a.$fs-small;
        }

        .horizontal-bar {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          margin-top: 0.5rem;

          .bar1 {
            background: a.$bg-gradient;
            height: 0.4rem;
            width: 100%;
            border-radius: 0.3rem;
          }

          .bar2 {
            background: a.$bg-gradient;
            height: 0.4rem;
            width: 70%;
            border-radius: 0.3rem;
          }
        }
      }
    }

    .emojis {
      display: flex;
      gap: 1rem;
      padding: 1rem;
      border-radius: 0.5rem;
      box-shadow: a.$bs-primary;
      width: fit-content;
      position: absolute;
      top: 23rem;
      left: 21rem;

      .img {
        width: 5rem;
        height: 5rem;
      }
    }
  }
}
</style>
