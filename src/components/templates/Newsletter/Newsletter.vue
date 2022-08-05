<template>
  <section class="newsletter" id="newsletter-content">
    <SectionHeader title="Social Media Its Ways of Our Excellence" />
    <form class="newsletter__subscribe">
      <input
        class="newsletter__input"
        type="email"
        placeholder="Enter your email"
      />
      <div class="newsletter__btn-wrapper">
        <button class="cssbuttons-io-button">
          Get started
          <div class="icon">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </button>
      </div>
    </form>
    <article class="newsletter__video">
      <figure class="newsletter__profile-img">
        <img
          class="newsletter__img"
          src="../../../assets/images/1.jpg"
          alt="Profile"
        />
        <font-awesome-icon
          class="newsletter__play-btn"
          icon="fa-solid fa-play"
        />
      </figure>
      <a class="newsletter__link" href="http://google.com">Watch Our Video</a>
    </article>
  </section>
</template>

<script>
import { SectionHeader } from "@/components/elements";

export default {
  name: "Newsletter",
  components: {
    SectionHeader,
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/abstracts" as a;

.newsletter {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  height: 70vh;

  .newsletter__subscribe {
    display: flex;
    position: relative;

    .newsletter__input {
      width: 25rem;
      padding: 1rem;
      border-radius: 0.5rem;
      border: 1px solid a.$primary-clr-4;
      background-color: a.$primary-clr-1;

      &::placeholder {
        color: grey;
      }
    }

    .newsletter__btn-wrapper {
      position: absolute;
      right: 0.25rem;
      top: 0.25rem;

      .cssbuttons-io-button {
        background: a.$bg-gradient;
        color: a.$secondary-clr;
        padding: 0.5rem;
        padding-left: 1.5rem;
        font-weight: a.$fw-medium;
        border-radius: 0.5rem;
        border: none;
        display: flex;
        align-items: center;
        box-shadow: inset 0 0 1.6rem -0.6rem #714da6;
        overflow: hidden;
        position: relative;
        height: 2.6rem;
        padding-right: 3.5rem;
        cursor: pointer;
      }

      .cssbuttons-io-button .icon {
        background: white;
        margin-left: 1rem;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 2.3rem;
        width: 2.3rem;
        border-radius: 0.5em;
        box-shadow: 0.1em 0.1em 0.6em 0.2em #7b52b9;
        right: 0.1rem;
        transition: all 0.3s;
      }

      .cssbuttons-io-button:hover .icon {
        width: calc(100% - 0.3rem);
      }

      .cssbuttons-io-button .icon svg {
        width: 1.1em;
        transition: transform 0.3s;
        color: #7b52b9;
      }

      .cssbuttons-io-button:hover .icon svg {
        transform: translateX(0.1em);
      }

      .cssbuttons-io-button:active .icon {
        transform: scale(0.95);
      }
    }
  }

  .newsletter__video {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    .newsletter__profile-img {
      position: relative;
      .newsletter__img {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
      }

      .newsletter__play-btn {
        position: absolute;
        right: -0.5rem;
        top: 50%;
        transform: translateY(-50%);
        padding: 0.25rem 0.35rem;
        border-radius: 50%;
        background: a.$bg-gradient;
        font-size: a.$fs-xsmall;
        cursor: pointer;
      }
    }

    .newsletter__link {
      font-size: a.$fs-small;
      text-decoration: underline;
    }
  }
}
</style>
