<template>
  <article class="plan plan--active">
    <h2 class="plan__title">{{ title }}</h2>
    <p class="plan__price">{{ price }}</p>
    <ul class="plan__lists">
      <li class="plan__list" v-for="feature of features">
        <font-awesome-icon icon="fa-solid fa-circle-check" />
        <p class="plan__list-item">
          {{ feature }}
        </p>
      </li>
    </ul>
    <button class="plan__btn">{{ buttonText }}</button>
  </article>
</template>

<script>
export default {
  name: "PricingPlan",
  props: {
    title: {
      type: String,
    },
    price: {
      type: Number,
    },
    buttonText: {
      type: String,
    },
  },
  data() {
    return {
      features: [
        "Feedback Categorization",
        "Features Prioritization",
        "Real-time Collaboration",
        "Feedback Loop Notification",
        "Essential Dev Tools Integrations",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/abstracts" as a;

.plan--active {
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: hsla(272, 75%, 27%, 1);
    color: a.$secondary-clr;
    cursor: pointer;

    .plan__btn {
      color: a.$secondary-clr;
      background: a.$bg-gradient;
    }
  }
}

.plan {
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .plan__title {
    text-align: center;
    font-weight: a.$fw-medium;
  }

  .plan__price {
    text-align: center;
    font-weight: a.$fw-bold;
    font-size: a.$fs-xlarge;
    background: a.$bg-gradient;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .plan__lists {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .plan__list {
      display: flex;
      gap: 0.5rem;

      .plan__list-item {
        font-size: a.$fs-small;
        font-weight: a.$fw-light;
      }
    }
  }

  .plan__btn {
    border: 1px solid a.$primary-clr-3;
    border-radius: 0.25rem;
    padding: 1rem;
    font-size: a.$fs-small;
    font-weight: a.$fw-medium;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    background-color: a.$secondary-clr;
    color: a.$primary-clr;
  }
}
</style>
