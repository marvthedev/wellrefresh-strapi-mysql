<template>
  <div class="article-showcase">
    <div class="featured-grid">
      <div class="featured-item featured-large">
        <img src="~/assets/img/featured-img.jpg" class="featured-item__img" />
        <div class="featured-item__txt-container featured-large__container">
          <span class="featured-item__category">{{
            largeFeatured.categories.nodes[1].name
          }}</span>
          <h2 class="featured-item__title featured-large__title">
            {{ largeFeatured.title }}
          </h2>
          <div
            class="featured-item__excerpt"
            v-html="largeFeatured.excerpt"
          ></div>
        </div>
      </div>

      <div class="featured-medium">
        <div
          class="featured-medium__item featured-item"
          v-for="article in medFeatured"
          :key="article.id"
        >
          <img src="~/assets/img/featured-img.jpg" class="featured-item__img" />
          <div
            class="featured-item__txt-container featured-medium__txt-container"
          >
            <span class="featured-item__category">{{
              article.categories.nodes[1].name
            }}</span>
            <h2 class="featured-item__title featured-right__title">
              {{ article.title }}
            </h2>
            <p class="featured-item__excerpt featured-right__excerpt">
              These are the key things you need to be doing to lose weight
              during the pandemic.
            </p>
          </div>
        </div>
      </div>

      <div class="featured-small">
        <div
          class="featured-item featured-small__item"
          v-for="article in smallFeatured"
          :key="article.id"
        >
          <img src="~/assets/img/featured-img.jpg" class="featured-item__img" />
          <div
            class="featured-item__txt-container featured-small__txt-container"
          >
            <span class="featured-item__category featured-small__category">{{
              article.categories.nodes[1].name
            }}</span>
            <h2 class="featured-item__title featured-small__title">
              {{ article.title }}
            </h2>
            <p class="featured-item__excerpt featured-small__excerpt">
              These are the key things you need to be doing to lose weight
              during the pandemic.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="article-showcase__side">
      <div class="latest-topics">
        <div class="latest-topics__head-container">
          <span class="latest-topics__head-hash">#</span>
          <h2 class="latest-topics__head">Latest Topics</h2>
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
  </div>
</template>

<script>
import FeaturedArticlesQuery from '~/apollo/queries/articles/FeaturedArticlesQuery'

export default {
  data() {
    return {
      mainFeatured: '',
      medFeatured: [],
      smallFeatured: []
    }
  },

  apollo: {
    largeFeatured: {
      query: FeaturedArticlesQuery,
      prefetch: true,
      update: (data) => data.category.posts.nodes[0],
      variables() {
        return { name: 'featured-large' }
      }
    },
    medFeatured: {
      query: FeaturedArticlesQuery,
      prefetch: true,
      update: (data) => data.category.posts.nodes,
      variables() {
        return { name: 'featured-medium' }
      }
    },
    smallFeatured: {
      query: FeaturedArticlesQuery,
      prefetch: true,
      update: (data) => data.category.posts.nodes,
      variables() {
        return { name: 'featured-small' }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.article-showcase {
  display: flex;
  flex-direction: column;
  margin-top: 25%;
  justify-content: center;
  padding: 0 2.5%;
}
.featured-grid {
  display: grid;
  grid-gap: 1rem;
  flex-direction: column;
}
.featured-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: 1px solid #e7ebfb;
  border-top: 0;
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
    padding: 1.6rem;
  }
  &__category {
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 1.6rem;
    color: $primary__color;
    text-transform: uppercase;
  }
  &__title {
    font-size: 2.8rem;
  }
  &__excerpt {
    margin-top: 1.5rem;
    font-size: 1.8rem;
  }
}

.featured-medium {
  &__item {
    border: 1px solid #e7ebfb;
    border-top: 0;
    border-radius: 1rem;
    box-shadow: 0px 1.6rem 2rem -2.2rem rgba(0, 0, 0, 0.48);
    &:nth-child(2) {
      margin-top: 1rem;
    }
  }
}

.featured-small {
  &__item {
    &:nth-child(2) {
      margin-top: 1rem;
    }
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
    &-hash {
      color: $secondary__color;
      font-size: 3rem;
      font-weight: 900;
    }
  }
  &__title {
    font-size: 2rem;
    text-align: center;
    font-weight: 900;
    padding: 3rem 0;
    color: $primary__color;
    &:not(:last-child) {
      border-bottom: 0.1rem solid #d8d8d8;
    }
  }
}

@media (min-width: 1248px) {
  .article-showcase {
    margin-top: 15%;
    flex-direction: row;
    padding: 0 10%;
    width: 100%;
    &__side {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 110%;
    }
  }
  .featured-grid {
    grid-template-columns: 30% 30% 40%;
    grid-auto-rows: minmax(min-content, max-content);
    grid-template-areas:
      'large large medium'
      'large large medium'
      'small small medium';
  }
  .featured-item {
    &__txt-container {
      padding: 3rem 2rem;
      text-align: left;
    }
    &__excerpt {
      font-size: 2rem;
    }
  }
  .featured-large {
    grid-area: large;
    min-height: 75%;
    &__title {
      font-size: 3rem;
    }
  }

  .featured-medium {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    grid-area: medium;
    &__txt-container {
      padding: 1.6rem;
    }
  }

  .featured-small {
    grid-area: small;
    display: flex;
    &__item {
      &:nth-child(2) {
        margin: 0 0 0 1rem;
      }
    }
    &__category {
      font-size: 1.4rem;
    }
    &__txt-container {
      padding: 1.3rem;
    }
    &__title {
      font-size: 2rem;
    }
    &__excerpt {
      font-size: 1.7rem;
    }
  }

  .latest-topics {
    width: 110%;
    margin: 0 0 0 3.2rem;
    &__head {
      font-size: 1.8rem;
    }
    &__title {
      text-align: left;
      font-size: 1.6rem;
    }
  }
}
</style>
