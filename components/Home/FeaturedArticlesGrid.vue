<template>
  <div class="featured-articles">
    <template v-if="$apollo.queries.largeFeatured.loading"></template>
    <template v-else>
      <div class="featured-articles__grid">
        <nuxt-link
          v-for="article in largeFeatured.slice(0)"
          :key="article.id"
          class="featured-large card"
          :to="{ name: 'articles-slug', params: { slug: article.slug } }"
        >
          <img :src="article.featuredImage.node.sourceUrl" class="card__img" />
          <div
            v-for="category in article.categories.nodes"
            :key="category.id"
            class="card__txt-container featured-large__txt-container"
          >
            <div class="card__category-container">
              <div class="featured-large__category card__category">
                {{ category.name }}
              </div>
            </div>
            <h2 class="card__title featured-large__title">
              {{ article.title }}
            </h2>
            <div class="featured-large__excerpt" v-html="article.excerpt"></div>
          </div>
        </nuxt-link>

        <nuxt-link
          v-for="article in featured"
          :key="article.id"
          :to="{ name: 'articles-slug', params: { slug: article.slug } }"
          class="card featured-reg"
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
            <div class="card__category-container">
              <span class="card__category">{{ category.name }}</span>
            </div>
            <h2 class="card__title">
              {{ article.title }}
            </h2>
          </div>
        </nuxt-link>
      </div>
      <div class="featured-articles__side">
        <ArticleListSide />
      </div>
    </template>
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
    featured: {
      prefetch: true,
      query: FeaturedArticlesQuery,
      update: (data) => data.tag.posts.nodes,
      variables: {
        tag: 'featured'
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
.featured-articles {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2.5%;
  &__grid {
    display: grid;
    gap: 1.6rem;
  }
}
.featured-large {
  &__title {
    font-size: 2.2rem;
  }
  &__excerpt {
    margin-top: 1.6rem;
    font-size: 1.8rem;
  }
}

//Tablet View
@media (min-width: 768px) {
  .featured-articles {
    &__grid {
      width: 100%;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(auto-fit, minmax(25rem, 1fr));
    }
  }

  .featured-large {
    grid-area: large;
    grid-row: 1 / 3;
    grid-column: 1 /3;
  }
}
//Desktop view
@media (min-width: 1248px) {
  .featured-articles {
    flex-direction: row;
    padding: 0 15%;
    &__side {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 25%;
      margin-left: 1rem;
    }
  }

  .featured-large {
    &__txt-container {
      padding: 6%;
    }
    &__category {
      font-size: 1.4rem;
    }
    &__title {
      font-size: 2.8rem;
    }
  }
}
</style>
