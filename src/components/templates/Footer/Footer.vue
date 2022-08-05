<template>
  <footer class="footer">
    <figure class="footer__aside">
      <img
        src="../../../assets/images/star.svg"
        alt="Star"
        class="footer__aside-star"
      />
      <img
        src="../../../assets/images/arrow-direction.svg"
        alt="Arrow"
        class="footer__aside-arrow"
      />
    </figure>
    <section class="footer__top">
      <router-link to="/">
        <figure class="footer__logo">
          <img
            class="footer__img"
            src="../../../assets/images/logo.svg"
            alt="Logo"
          />
          <figcaption class="footer__caption">
            <p class="footer__brand">Brands.io</p>
          </figcaption>
        </figure>
      </router-link>
      <nav class="footer__nav" aria-labelledby="secondary-navigation">
        <ul>
          <li>
            <router-link class="footer__link" to="/"> Home </router-link>
          </li>
          <li>
            <router-link class="footer__link" to="/about">
              About Us
            </router-link>
          </li>
          <li>
            <router-link class="footer__link" to="/services">
              Services
            </router-link>
          </li>
          <li>
            <router-link class="footer__link" to="/contact">
              Contact Us
            </router-link>
          </li>
        </ul>
      </nav>
      <section class="footer__social-icons">
        <font-awesome-icon icon="fa-brands fa-facebook-f" />
        <font-awesome-icon icon="fa-brands fa-instagram" />
        <font-awesome-icon icon="fa-brands fa-youtube" />
      </section>
    </section>
    <hr class="footer__line" />
    <section class="footer__bottom">
      <p class="footer__copyright">
        &copy; 2020 Brands.io. All rights reserved.
      </p>
    </section>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/abstracts" as a;

.footer {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-size: a.$fs-xsmall;
  height: 18vh;
  margin-top: 1rem;
  position: relative;

  .footer__aside {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    right: 0;
    transform: scale(-1, -1);

    .footer__aside-star {
      position: absolute;
      width: 4rem;
      bottom: -8.5rem;
      right: -13.5rem;
    }

    .footer__aside-arrow {
      width: 12rem;
      position: absolute;
      bottom: -7rem;
      right: -12rem;
      color: a.$primary-clr-3;
    }
  }

  .footer__top {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .footer__logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      .footer__img {
        height: 1.5rem;
        width: 1.5rem;
      }

      .footer__caption {
        .footer__brand {
          font-weight: a.$fw-medium;
        }
      }
    }

    .footer__nav {
      ul {
        display: flex;
        justify-content: space-between;
        gap: 3rem;

        li {
          .footer__link {
          }
        }
      }
    }

    .footer__social-icons {
      display: flex;
      gap: 2rem;
    }
  }

  .footer__line {
    width: 70%;
    height: 1px;
    margin: 0 auto;
  }

  .footer__bottom {
    margin: 0 auto;
    color: a.$primary-clr-3;
  }
}
</style>
