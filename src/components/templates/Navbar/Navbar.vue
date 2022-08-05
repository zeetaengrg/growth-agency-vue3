<template>
  <header class="header">
    <router-link to="/">
      <figure class="header-logo">
        <img
          class="logo-img"
          src="../../../assets/images/logo.svg"
          alt="Logo"
        />
        <figcaption class="logo-caption">
          <p class="logo-text">Brands.io</p>
        </figcaption>
      </figure>
    </router-link>
    <nav class="header-nav">
      <ul>
        <li>
          <router-link class="nav-link" to="/"> Home </router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/about"> About Us </router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/services"> Services </router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/contact"> Contact Us </router-link>
        </li>
      </ul>
    </nav>
    <router-link to="/login" class="header-login">
      <button class="btn">Login</button>
    </router-link>
  </header>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/abstracts" as a;

.header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 4rem;

  &-logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .logo-caption {
      .logo-text {
        font-weight: a.$fw-bold;
      }
    }
  }

  &-nav {
    ul {
      display: flex;
      gap: 3rem;
    }
  }

  &-login {
    .btn {
      background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%),
        linear-gradient(106.23deg, #4ef0f0 0%, #05c580 100%);
      border-radius: 0.3rem;
      border: none;
      color: #fff;
      cursor: pointer;
      font-weight: a.$fw-medium;
      font-size: a.$fs-base;
      padding: 0.8rem 1.5rem;
    }
  }
}
</style>
