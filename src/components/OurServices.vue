<template>
  <section class="our-services">
    <header class="services-header">
      <h1 class="header">What We Offer?</h1>
      <p class="subheader">
        in virtual space through communication platforms. Durable relations that
        extend beyond immediate genealogical ties.
      </p>
    </header>
    <div class="card-wrapper">
      <div v-for="service in services" :key="service.id" class="card">
        <div class="card-icon">
          <font-awesome-icon class="icon" icon="fa-solid fa-headset" />
        </div>
        <h2 class="card__title">{{ service.title }}</h2>
        <p class="card__desc">{{ service.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "OurServices",
  data() {
    return {
      services: [
        {
          id: 1,
          title: "Community Support",
          description:
            "Apps keep work and information right at your fingertips—and Slack keeps it all securely.",
          icon: "fa-comments",
        },
        {
          id: 2,
          title: "Security First",
          description:
            "Connect the tools you already use to get more from them every time you work.",
          icon: "fa-shield-halved",
        },
        {
          id: 3,
          title: "24/7 Admin Support",
          description:
            "You can work with apps in channels, where they’re a seamless part of the conver.",
          icon: "fa-headset",
        },
        {
          id: 4,
          title: "100+ Themes",
          description:
            "Spend less time tracking down the people needed to get work done.",
          icon: "fa-paint-roller",
        },
        {
          id: 5,
          title: "Fully Integrated",
          description:
            "Skip the follow-ups and back-and -forth. Easily standardize how you collect ",
          icon: "fa-globe",
        },
        {
          id: 6,
          title: "Monthly Update",
          description:
            "Take control of your work day. In a just a few minutes, create a customized workflow ",
          icon: "fa-pen-to-square",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/abstracts" as a;

.our-services {
  height: 100vh;
  display: grid;
  place-content: center;

  .services-header {
    text-align: center;

    .header {
      @include a.header;
    }

    .subheader {
      width: 45%;
      margin: 1rem auto;
    }
  }

  .card-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    padding: 2rem 18rem;

    .card {
      height: 12rem;
      width: 13rem;
      box-shadow: a.$bs-tertiary;
      border-radius: 0.5rem;
      border: 1px solid rgba($color: #d3d3e0, $alpha: 0.15);
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1.5rem;

      .card-icon {
        background-color: #eceeff;
        border-radius: 50%;
        height: 2.25rem;
        width: 2.25rem;
        color: a.$primary-clr-3;
        justify-content: start;
        padding: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;

        .icon {
          filter: drop-shadow(0px 56px 63px rgba(0, 0, 0, 0.22))
            drop-shadow(0px 36.2963px 36.8958px rgba(0, 0, 0, 0.167037))
            drop-shadow(0px 21.5704px 20.0667px rgba(0, 0, 0, 0.13363))
            drop-shadow(0px 11.2px 10.2375px rgba(0, 0, 0, 0.11))
            drop-shadow(0px 4.56296px 5.13333px rgba(0, 0, 0, 0.0863704))
            drop-shadow(0px 1.03704px 2.47917px rgba(0, 0, 0, 0.052963));
        }
      }

      .card__title {
        font-size: a.$fs-small;
      }

      .card__desc {
        font-size: a.$fs-xsmall;
      }
    }
  }
}
</style>