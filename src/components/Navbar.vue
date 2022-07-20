<template>
  <header class="header">
    <figure class="header-logo">
      <router-link to="/">
        <img class="logo-img" src="../assets/images/logo.svg" alt="Logo">
      </router-link>
      <figcaption class="logo-caption">
        <p class="logo-text">Brands.io</p>
      </figcaption>
    </figure>
    <nav class="header-nav">
      <ul>
        <li>
          <router-link class="nav-link" to="/">
            Home
          </router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/about">
            About Us
          </router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/services">
            Services
          </router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/contact">
            Contact Us
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="header-login">
      <router-link to="/login">
        <button class="btn">Login</button>
      </router-link>
    </div>
  </header>
</template>

<script>

export default {
  name: 'Navbar',
  components: {

  }
}
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 4rem;

    &-logo {
      display: flex;
      gap: 0.5rem;
      align-items: center;

      .logo-caption {
        .logo-text {
          font-weight: 600;
        }
      }
    }

    &-nav {
      ul {
        display: flex;
        gap: 3rem;
        list-style-type: none;

        li {
          .nav-link {
            text-decoration: none;
          }
        }
      }
    }

    &-login {
      .btn {
        background: linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%), linear-gradient(106.23deg, #4EF0F0 0%, #05C580 100%);
        border: none;
        border-radius: 0.3rem;
        color: #fff;
        cursor: pointer;
        font-weight: 600;
        padding: 0.8rem 1.5rem;
      }
    }
  }
</style>
