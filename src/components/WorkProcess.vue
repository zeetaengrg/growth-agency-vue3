<template>
  <section class="work">
    <section class="left-col">
      <header class="work-header">
        <h1 class="header">How It Works?</h1>
        <p class="subheader">
          Resolving neglected sir tolerably but existence conveying for. Day his
          put off unaffected literature partiality inhabiting.
        </p>
      </header>
      <article class="box-one">
        <div class="box">
          <figure class="img">
            <img
              class="img__union"
              src="../assets/images/union.svg"
              alt="union"
            />
          </figure>
        </div>
      </article>
    </section>
    <section class="right-col">
      <article class="box-two">
        <div class="box">
          <figure class="img">
            <img
              class="img__union"
              src="../assets/images/union.svg"
              alt="union"
            />
          </figure>
        </div>
      </article>
      <article class="box-three">
        <div class="box">
          <figure class="img">
            <img
              class="img__union"
              src="../assets/images/union.svg"
              alt="union"
            />
          </figure>
        </div>
      </article>
    </section>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/styles/abstracts" as a;

.work {
  display: flex;
  padding: 1rem 8rem;
  gap: 5rem;

  @mixin box {
    background-color: a.$primary-clr-4;
    height: 31rem;
    width: 31rem;
    border-radius: 1rem;
  }

  .left-col {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .work-header {
      .header {
        @include a.header;
      }
    }

    .box-one {
      @include box;
      .box {
        .img {
          .img__union {
            width: 100%;
          }
        }
      }
    }
  }

  .right-col {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .box-two {
      @include box;
      .box {
        .img {
          .img__union {
            width: 100%;
          }
        }
      }
    }

    .box-three {
      @include box;
      .box {
        .img {
          .img__union {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
