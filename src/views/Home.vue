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
      <p class="left-col__text">
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
            src="../assets/images/profile-img.svg"
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
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/abstracts" as a;
.hero {
  display: flex;
  padding: 7rem 4rem 0rem;
  position: relative;

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
      font-size: a.$fs-xlarge;
      background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%),
        #3e4581;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &__text {
      width: 85%;
    }

    &-btn {
      display: flex;
      gap: 1rem;

      .btn {
        padding: 0.75rem 1.75rem;
        border: none;
        border-radius: 0.3rem;
        font-weight: a.$fw-medium;
        font-size: a.$fs-small;
        cursor: pointer;

        &__primary {
          color: a.$secondary-clr;
          background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%),
            #3e4581;
        }

        &__secondary {
          background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%),
            #3e4581;
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

    .profile {
      position: relative;
      left: 10rem;
      top: -2rem;

      &-img {
        position: absolute;
        left: 7.5rem;
        top: -1.5rem;
        z-index: 1;
        border-radius: 50%;
        border: 2px solid rgba($color: hsla(269, 94%, 69%, 1), $alpha: 1);
        height: 3rem;
        width: 3rem;

        .img {
          height: 100%;
          width: 100%;
        }
      }

      &-box {
        position: absolute;
        border: 1px solid a.$secondary-clr;
        border-radius: 0.5rem;
        text-align: center;
        box-shadow: 0px 56px 63px rgba(0, 0, 0, 0.22);
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
            background: linear-gradient(
                89.97deg,
                #ae67fa 1.84%,
                #f49867 102.67%
              ),
              #3e4581;
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
      box-shadow: 0px 56px 63px rgba(0, 0, 0, 0.22);
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
            color: hsla(269, 94%, 69%, 1);
            background: linear-gradient(
                89.97deg,
                #ae67fa 1.84%,
                #f49867 102.67%
              ),
              #3e4581;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
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
    }

    .media {
      position: absolute;
      top: 1rem;
      left: 20rem;
      height: 15rem;
      width: 17rem;
      box-shadow: 0px 56px 63px rgba(0, 0, 0, 0.22);
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
            color: hsla(269, 94%, 69%, 1);
            background: linear-gradient(
                89.97deg,
                #ae67fa 1.84%,
                #f49867 102.67%
              ),
              #3e4581;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .icon-grid {
            padding: 0.35rem 0.42rem;
          }
        }
      }

      .body {
        position: relative;

        .circle-top {
          border: 1.2rem solid #ae67fa;
          border-radius: 50%;
          height: 8rem;
          width: 8rem;
          position: absolute;
          z-index: 1;
        }

        .circle-bottom {
          border: 0.75rem solid #414148;
          border-radius: 50%;
          height: 8rem;
          width: 8rem;
          position: absolute;
          z-index: 2;
        }
      }
    }
  }
}
</style>
