/* eslint-disable vue/no-v-html */
<template>
  <!-- Styling for class "layout__content" is found in layouts/default.vue 
  and is used to keep the footer at the bottom -->
  <div class="layout__content">
    <template v-if="$apollo.queries.posts.loading">
      <loading-ring />
    </template>
    <template v-else>
      <div class="wellrefresh-txt">
        <p>
          Wether your goal is to lose weight, build muscle, or just become
          healthy in general, we got articles to help you reach your goal!
        </p>
      </div>
      <div class="featured-articles">
        <div class="featured-articles__grid">
          <div
            v-for="article in largeFeaturedPost.edges"
            :key="article.node.title"
            class="featured-large"
          >
            <nuxt-link
              class="card"
              :to="{
                name: 'articles-slug',
                params: { slug: article.node.slug }
              }"
            >
              <div class="card__img-container">
                <img
                  :src="article.node.featuredImage.node.sourceUrl"
                  class="card__img"
                />
              </div>
              <div
                v-for="category in article.node.categories.edges"
                :key="category.node.id"
                class="card__txt-container featured-large__txt-container"
              >
                <div class="card__category-container">
                  <div class="card__category featured-large__category">
                    {{ category.node.name }}
                  </div>
                </div>
                <h2 class="featured-large__title">
                  {{ article.node.title }}
                </h2>
                <div
                  class="featured-large__excerpt"
                  v-html="article.node.excerpt"
                ></div>
              </div>
            </nuxt-link>
          </div>

          <div v-for="article in featuredPosts.edges" :key="article.node.id">
            <nuxt-link
              class="card"
              :to="{
                name: 'articles-slug',
                params: { slug: article.node.slug }
              }"
            >
              <div class="card__img-container">
                <img
                  :src="article.node.featuredImage.node.sourceUrl"
                  class="card__img"
                />
              </div>
              <div
                v-for="category in article.node.categories.edges"
                :key="category.node.name"
                class="card__txt-container"
              >
                <div class="card__category-container">
                  <div class="card__category">
                    {{ category.node.name }}
                  </div>
                </div>
                <h2 class="card__title">
                  {{ article.node.title }}
                </h2>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="featured-articles__side">
          <ArticleListSide :article-list="posts" />
        </div>
      </div>
      <CategoryArticles
        category-name="Weight Loss"
        :article-list="weightLossArticles"
      />
      <CategoryArticles
        category-name="Fitness"
        :article-list="fitnessCategory"
      />
    </template>
  </div>
</template>

<script>
import loadingRing from '~/components/LoadingRing'
import ArticleListSide from '~/components/ArticleListSidebar'
import CategoryArticles from '~/components/Home/CategoryArticles'
import AllArticlesQuery from '~/apollo/queries/articles/AllArticlesQuery'

export default {
  components: {
    ArticleListSide,
    loadingRing,
    CategoryArticles
  },

  data() {
    return {
      posts: {},
      featuredPosts: {},
      largeFeaturedPost: {},
      weightLossArticles: {},
      fitnessCategory: {},
      CategoryArticlesCount: 8
    }
  },

  apollo: {
    posts: {
      prefetch: true,
      query: AllArticlesQuery
    },

    //Queries for featured posts section
    largeFeaturedPost: {
      prefetch: true,
      query: AllArticlesQuery,
      update: (data) => data.posts,
      variables: {
        tag: 'featured-large'
      }
    },
    featuredPosts: {
      prefetch: true,
      query: AllArticlesQuery,
      update: (data) => data.posts,
      variables: {
        tag: 'featured'
      }
    },

    //Queries for categories section
    weightLossArticles: {
      prefetch: true,
      query: AllArticlesQuery,
      update: (data) => data.posts,
      variables() {
        return {
          category: 'Weight Loss',
          articleCount: this.CategoryArticlesCount
        }
      }
    },
    fitnessCategory: {
      prefetch: true,
      query: AllArticlesQuery,
      update: (data) => data.posts,
      variables() {
        return {
          category: 'Fitness',
          articleCount: this.CategoryArticlesCount
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.featured-articles {
  margin-top: 4rem;
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
  &__category {
    font-size: 1.2rem;
  }
  &__title {
    margin-top: 0.4rem;
    font-size: 2.6rem;
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
      grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
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
      padding: 0 2.6rem;
    }
    &__category {
      font-size: 1.4rem;
    }
    &__title {
      font-size: 3.2rem;
    }
  }
}
</style>
