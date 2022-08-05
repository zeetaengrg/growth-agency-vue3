<template>
  <section class="work__left-card" id="card-container">
    <section class="work__top-content">
      <article class="work__profile">
        <div class="work__bar1"></div>
        <div class="work__bar2"></div>
        <figure class="work__img-wrapper">
          <img
            src="../../../assets/images/1.jpg"
            alt="Profile Image"
            class="work__img"
          />
          <div class="work__bar3"></div>
        </figure>
      </article>
      <article class="work__drop-menu">
        <figure class="work__icon-wrapper">
          <font-awesome-icon icon="fa-solid fa-angle-down" />
        </figure>
        <div class="work__bar4"></div>
      </article>
    </section>
    <CardHeader
      title="Intelligence"
      subtitle="Marketing intelligence (MI) is the everyday information relevant to
            a company's markets"
    />
  </section>
</template>

<script>
import { CardHeader } from "@/components/elements";

export default {
  name: "LeftCard",
  components: {
    CardHeader,
  },
};
</script>

<style scoped lang="scss">
@use "@/assets/styles/abstracts" as a;

.work__left-card {
  @include a.card;
  margin-top: 1rem;
  gap: 3rem;

  .work__top-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .work__profile {
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

      .work__img-wrapper {
        display: flex;
        align-items: center;
        gap: 1rem;

        .work__img {
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

    .work__drop-menu {
      @include a.card-content;
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

      .work__bar4 {
        background: a.$bg-gradient;
        height: 0.5rem;
        width: 80%;
        border-radius: 1rem;
      }
    }
  }
}
</style>
