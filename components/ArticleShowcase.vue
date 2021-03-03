<template>
  <div class="article-showcase">
    <div class="featured-top">
      <img src="~/assets/img/featured-img.jpg" class="featured-top__img" />
      <div class="featured-top__txt-container">
        <h2 class="featured-top__title">
          How to Lose Weight During The Pandemic
        </h2>
        <p class="featured-top__excerpt">
          These are the key things you need to be doing to lose weight during
          the pandemic.
        </p>
      </div>
    </div>
    <div class="latest-topics">
      <div class="latest-topics__head-container">
        <span class="latest-topics__head-slash">/</span>
        <h2 class="latest-topics__head">Latest Topics</h2>
        <span class="latest-topics__head-slash">/</span>
      </div>
      <div class="latest-topics__list">
        <h2 class="latest-topics__title">
          This is a Random Article Title Which Will Be Filled by Strapi
        </h2>
        <h2 class="latest-topics__title">
          This is a Random Article Title Which Will Be Filled by Strapi
        </h2>
        <h2 class="latest-topics__title">
          This is a Random Article Title Which Will Be Filled by Strapi
        </h2>
        <h2 class="latest-topics__title">
          This is a Random Article Title Which Will Be Filled by Strapi
        </h2>
        <h2 class="latest-topics__title">
          This is a Random Article Title Which Will Be Filled by Strapi
        </h2>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.article-showcase {
  margin-top: 25%;
  display: grid;
  justify-content: center;
  gap: 1rem;
  padding: 0 2.5%;
}

.featured-top {
  z-index: -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: 1px solid #e7ebfb;
  border-radius: 1rem;
  box-shadow: 0px 1.6rem 2rem -2.2rem rgba(0, 0, 0, 0.48);
  &__img {
    width: 100%;
    border-radius: 1rem 1rem 0 0;
  }
  &__txt-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3rem 1.5rem;
  }
  &__title {
    font-size: 2.8rem;
  }
  &__excerpt {
    margin-top: 1.5rem;
    font-size: 1.8rem;
  }
}

.latest-topics {
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 4rem;
  &__head-container {
    display: flex;
    align-items: center;
  }
  &__head {
    font-size: 2.4rem;
    text-transform: uppercase;
    padding: 0 0.6rem;
    &-slash {
      color: $primary__color;
      font-size: 2.4rem;
      font-weight: 900;
    }
  }
  &__title {
    font-size: 2rem;
    text-align: center;
    font-weight: 900;
    padding: 3rem 0;
    &:not(:last-child) {
      border-bottom: 0.1rem solid #d8d8d8;
    }
  }
}

@media (min-width: 1248px) {
  .article-showcase {
    margin-top: 15%;
    display: flex;
    padding: 0 15%;
  }
  .featured-top {
    &:hover {
      box-shadow: 0px 1.6rem 2rem -1.5rem rgba(0, 0, 0, 0.48);
      transform: translateY(-1rem);
    }
    &__txt-container {
      padding: 3rem 2rem;
      text-align: left;
    }
    &__excerpt {
      font-size: 2rem;
    }
  }
  .latest-topics {
    margin: 0 0 0 3.2rem;
    &__head {
      font-size: 1.8rem;
    }
    &__title {
      text-align: left;
    }
  }
}
</style>
