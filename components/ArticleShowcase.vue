<template>
  <div class="article-showcase">
    <div class="featured-grid">
      <nuxt-link
        v-for="article in largeFeatured"
        :key="article.id"
        class="featured-large card"
        :to="{ name: 'articles-slug', params: { slug: article.slug } }"
      >
        <img :src="article.featuredImage.node.sourceUrl" class="card__img" />
        <div
          v-for="category in article.categories.nodes"
          :key="category.id"
          class="featured-large__txt-container"
        >
          <span class="featured-large__category card__category">{{
            category.name
          }}</span>
          <h2 class="card__title featured-large__title">
            {{ article.title }}
          </h2>
          <div class="featured-large__excerpt" v-html="article.excerpt"></div>
        </div>
      </nuxt-link>

      <div class="featured-medium">
        <nuxt-link
          v-for="article in mediumFeatured"
          :key="article.id"
          :to="{ name: 'articles-slug', params: { slug: article.slug } }"
          class="card"
        >
          <img
            v-if="article.featuredImage.node.sourceUrl"
            :src="article.featuredImage.node.sourceUrl"
            class="card__img"
          />
          <div
            v-for="category in article.categories.nodes"
            :key="category.id"
            class="card__txt-container"
          >
            <span class="card__category">{{ category.name }}</span>
            <h2 class="card__title">
              {{ article.title }}
            </h2>
          </div>
        </nuxt-link>
      </div>

      <div class="featured-small">
        <nuxt-link
          v-for="article in smallFeatured"
          :key="article.id"
          :to="{ name: 'articles-slug', params: { slug: article.slug } }"
          class="card"
        >
          <img :src="article.featuredImage.node.sourceUrl" class="card__img" />
          <div
            v-for="category in article.categories.nodes"
            :key="category.id"
            class="card__txt-container"
          >
            <span class="card__category">{{ category.name }}</span>
            <h2 class="card__title">
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

.featured-large__excerpt {
  margin-top: 1.6rem;
  font-size: 2rem;
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

  .featured-large {
    grid-area: large;
    min-height: 75%;
    &__txt-container {
      padding: 6%;
    }
    &__category {
      font-size: 1.8rem;
    }
    &__title {
      font-size: 2.8rem;
    }
  }

  .featured-medium {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    grid-area: medium;
  }

  .featured-small {
    grid-area: small;
    display: flex;
    min-width: 0;
    min-height: 0;
  }
}
</style>
