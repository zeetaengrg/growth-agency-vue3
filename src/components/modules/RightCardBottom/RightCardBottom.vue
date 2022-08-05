<template>
  <section class="work__card-bottom" id="card-container">
    <section class="work__top-container" id="top-container">
      <article class="work__top-content">
        <div class="work__earn">
          <p class="work__earn-num">
            <font-awesome-icon class="circle-icon" icon="fa-solid fa-circle" />
            $500+
          </p>
          <p class="work__earn-text">Earn per day</p>
        </div>
        <div class="work__pay">
          <p class="work__pay-num">
            <font-awesome-icon class="circle-icon" icon="fa-solid fa-circle" />
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
    </section>
    <aside class="work__dashboard">
      <p class="work__dashboard-text">Dashboard</p>
      <figure class="work__bar-graph">
        <div class="work__bar1"></div>
        <div class="work__bar2"></div>
        <div class="work__bar3"></div>
        <div class="work__bar4"></div>
      </figure>
    </aside>
    <CardHeader
      title="External Data"
      subtitle="This allows them to see current key performance .."
    />
  </section>
</template>

<script>
import { CardHeader } from "@/components/elements";

export default {
  name: "RightCardBottom",
  components: {
    CardHeader,
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/abstracts" as a;

.work__card-bottom {
  @include a.card;
  position: relative;
  gap: 2rem;

  .work__top-container {
    @include a.card-content;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;

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

    .work__pie-chart {
      margin: 0 auto;
    }

    .work__bottom-text {
      margin: 0 auto;
      text-align: center;
      .work__earning-num {
        font-size: 1.5rem;
        font-weight: 600;
      }

      .work__earning-text {
        font-size: 0.7rem;
        font-weight: 400;
        color: rgb(151, 142, 142);
      }
    }
  }

  .work__dashboard {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem;
    background-color: a.$secondary-clr;
    border-radius: 0.5rem;
    position: absolute;
    top: 16rem;
    right: 1rem;
    height: 5rem;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

    .work__dashboard-text {
      text-align: center;
      font-size: 0.8rem;
      font-weight: 500;
    }

    .work__bar-graph {
      position: relative;
      left: 0.5rem;

      .work__bar1 {
        height: 2.5rem;
        width: 0.5rem;
        background: a.$primary-clr;
        border-radius: 1rem;
        position: absolute;
        left: 0;
        bottom: -2.5rem;
      }

      .work__bar2 {
        height: 1.25rem;
        width: 0.5rem;
        background: a.$bg-gradient;
        border-radius: 1rem;
        position: absolute;
        bottom: -2.5rem;
        left: 1rem;
      }

      .work__bar3 {
        height: 0.75rem;
        width: 0.5rem;
        background: a.$primary-clr;
        border-radius: 1rem;
        position: absolute;
        bottom: -2.5rem;
        left: 2rem;
      }

      .work__bar4 {
        height: 2.5rem;
        width: 0.5rem;
        background: a.$bg-gradient;
        border-radius: 1rem;
        position: absolute;
        bottom: -2.5rem;
        left: 3rem;
      }
    }
  }
}
</style>
