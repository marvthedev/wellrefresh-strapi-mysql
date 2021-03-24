<template>
  <!-- :to="{ name: 'articles-slug', params: { slug: largeFeatured.slug } }" -->
  <div class="article-showcase">
    <div class="featured-grid">
      <nuxt-link
        v-for="article in largeFeatured"
        :key="article.id"
        class="featured-item featured-large"
        :to="{ name: 'articles-slug', params: { slug: article.slug } }"
      >
        <div class="featured-item__img-container">
          <img
            :src="article.featuredImage.node.sourceUrl"
            class="featured-item__img"
          />
        </div>
        <div
          v-for="category in article.categories.nodes"
          :key="category.id"
          class="featured-item__txt-container featured-large__container"
        >
          <span class="featured-item__category">{{ category.name }}</span>
          <h2 class="featured-item__title featured-large__title">
            {{ article.title }}
          </h2>
          <div class="featured-item__excerpt" v-html="article.excerpt"></div>
        </div>
      </nuxt-link>

      <div class="featured-medium">
        <nuxt-link
          v-for="article in mediumFeatured"
          :key="article.id"
          :to="{ name: 'articles-slug', params: { slug: article.slug } }"
          class="featured-medium__item featured-item"
        >
          <img
            v-if="article.featuredImage.node.sourceUrl"
            :src="article.featuredImage.node.sourceUrl"
            class="featured-item__img"
          />
          <div
            v-for="category in article.categories.nodes"
            :key="category.id"
            class="featured-item__txt-container featured-medium__txt-container"
          >
            <span class="featured-item__category">{{ category.name }}</span>
            <h2 class="featured-item__title featured-medium__title">
              {{ article.title }}
            </h2>
            <p class="featured-item__excerpt featured-medium__excerpt">
              These are the key things you need to be doing to lose weight
              during the pandemic.
            </p>
          </div>
        </nuxt-link>
      </div>

      <div class="featured-small">
        <nuxt-link
          v-for="article in smallFeatured"
          :key="article.id"
          :to="{ name: 'articles-slug', params: { slug: article.slug } }"
          class="featured-item featured-small__item"
        >
          <div class="featured-item__img-container">
            <img
              :src="article.featuredImage.node.sourceUrl"
              class="featured-item__img"
            />
          </div>
          <div
            v-for="category in article.categories.nodes"
            :key="category.id"
            class="featured-item__txt-container featured-small__txt-container"
          >
            <span class="featured-item__category featured-small__category">{{
              category.name
            }}</span>
            <h2 class="featured-item__title featured-small__title">
              {{ article.title }}
            </h2>
          </div>
        </nuxt-link>
      </div>
    </div>
    <div class="article-showcase__side">
      <ArticleListSide />
    </div>
  </div>
</template>

<script>
import FeaturedArticlesQuery from '~/apollo/queries/articles/FeaturedArticlesQuery'
import ArticleListSide from '~/components/ArticleListSidebar'

export default {
  components: {
    ArticleListSide
  },
  data() {
    return {
      largeFeatured: [],
      mediumFeatured: [],
      smallFeatured: []
    }
  },

  apollo: {
    largeFeatured: {
      prefetch: true,
      query: FeaturedArticlesQuery,
      update: (data) => data.tag.posts.nodes,
      variables: {
        tag: 'featured-large'
      }
    },
    mediumFeatured: {
      prefetch: true,
      query: FeaturedArticlesQuery,
      update: (data) => data.tag.posts.nodes,
      variables: {
        tag: 'featured-medium'
      }
    },
    smallFeatured: {
      prefetch: true,
      query: FeaturedArticlesQuery,
      update: (data) => data.tag.posts.nodes,
      variables: {
        tag: 'featured-small'
      }
    }
  },

  computed: {
    getTag: function () {
      return this.articles.nodes.posts.nodes.tags.nodes
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

.featured-grid,
.featured-medium,
.featured-small {
  display: grid;
  grid-gap: 3.2rem;
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
    margin-top: 1rem;
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
  }
}

@media (min-width: 1248px) {
  .article-showcase {
    margin-top: 10%;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 15%;
    &__side {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 18%;
    }
  }
  .featured-medium,
  .featured-small {
    grid-gap: 1rem;
  }

  .featured-grid {
    grid-gap: 1rem;
    width: 78%;
    grid-template-columns: 35% 30% 35%;
    grid-auto-rows: minmax(min-content, max-content);
    grid-template-areas:
      'large large medium'
      'large large medium'
      'small small medium';
  }
  .featured-item {
    &:hover {
      box-shadow: 0px 1.6rem 2rem -1.5rem rgba(0, 0, 0, 0.48);
      transform: translateY(-1rem);
    }
    &__txt-container {
      padding: 2rem 1.5rem;
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
      font-size: 2.8rem;
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
    &__title {
      font-size: 2.4rem;
    }
    &__excerpt {
      font-size: 1.8rem;
    }
  }

  .featured-small {
    grid-area: small;
    display: flex;
    min-width: 0;
    min-height: 0;
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
      font-size: 1.6rem;
    }
  }
}
</style>
