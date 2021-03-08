<template>
  <div class="article-showcase">
    <div class="featured-grid">
      <div class="featured-item featured-main">
        <img src="~/assets/img/featured-img.jpg" class="featured-item__img" />
        <div class="featured-item__txt-container featured-main__container">
          <h2 class="featured-item__title featured-main__title">
            {{ largeFeatured.title }}
          </h2>
          <div
            class="featured-item__excerpt"
            v-html="largeFeatured.excerpt"
          ></div>
        </div>
      </div>
      <div class="featured-item featured-right--top">
        <img src="~/assets/img/featured-img.jpg" class="featured-item__img" />
        <div class="featured-item__txt-container">
          <h2 class="featured-item__title featured-right__title">
            How to Lose Weight During The Pandemic
          </h2>
          <p class="featured-item__excerpt featured-right__excerpt">
            These are the key things you need to be doing to lose weight during
            the pandemic.
          </p>
        </div>
      </div>
      <div class="featured-item featured-right--bottom">
        <img src="~/assets/img/featured-img.jpg" class="featured-item__img" />
        <div class="featured-item__txt-container">
          <h2 class="featured-item__title featured-right__title">
            How to Lose Weight During The Pandemic
          </h2>
          <p class="featured-item__excerpt featured-right__excerpt">
            These are the key things you need to be doing to lose weight during
            the pandemic.
          </p>
        </div>
      </div>
      <div class="featured-item featured-bottom--left">
        <img src="~/assets/img/featured-img.jpg" class="featured-item__img" />
        <div class="featured-item__txt-container featured-bottom__container">
          <h2 class="featured-item__title featured-bottom__title">
            How to Lose Weight During The Pandemic
          </h2>
          <p class="featured-item__excerpt featured-bottom__excerpt">
            These are the key things you need to be doing to lose weight during
            the pandemic.
          </p>
        </div>
      </div>
      <div class="featured-item featured-bottom--right">
        <img src="~/assets/img/featured-img.jpg" class="featured-item__img" />
        <div class="featured-item__txt-container featured-bottom__container">
          <h2 class="featured-item__title featured-bottom__title">
            How to Lose Weight During The Pandemic
          </h2>
          <p class="featured-item__excerpt featured-bottom__excerpt">
            These are the key things you need to be doing to lose weight during
            the pandemic.
          </p>
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
      medFeatured: ''
    }
  },

  apollo: {
    largeFeatured: {
      query: FeaturedArticlesQuery,
      prefetch: true,
      update: (data) => data.category.posts.edges[0].node,
      variables() {
        return { name: 'featured-large' }
      }
    },
    medFeatured: {
      query: FeaturedArticlesQuery,
      prefetch: true,
      update: (data) => data.category.posts.edges.node,
      variables() {
        return { name: 'featured-medium' }
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
    padding: 2rem;
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
      'main main mediumTop'
      'main main mediumBottom'
      'smallBottomLeft smallBottomRight mediumBottom';
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
  .featured-main {
    grid-area: main;
    min-height: 75%;
    &__title {
      font-size: 4.4rem;
    }
  }
  .featured-right {
    &--top {
      grid-area: mediumTop;
    }
    &--bottom {
      grid-area: mediumBottom;
      min-height: 75%;
    }
    &__title {
      font-size: 2.4rem;
    }
  }
  .featured-bottom {
    &--left {
      grid-area: smallBottomLeft;
    }
    &--right {
      grid-area: smallBottomRight;
    }
    &__container {
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
