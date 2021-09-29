<template>
  <!-- "layout__content" is used to keep the footer at the bottom of the page. 
Styling is found in ~/layouts/default.vue -->
  <div class="articles layout__content">
    <template v-if="$apollo.queries.articles.loading">
      <loading-ring />
    </template>
    <template v-else>
      <div class="articles-title">
        <h1 class="articles-title__txt">Articles</h1>
      </div>
      <div class="wellrefresh-txt">
        <p>
          Browse through our library of health and wellness articles and get the
          information you need to better your lifestyle! We got fitness, weight
          loss, and diet articles for you to read and gain knowledge from.
        </p>
      </div>
      <section class="articles__grid">
        <nuxt-link
          v-for="article in articles.edges"
          :key="article.node.id"
          :to="{ name: 'articles-slug', params: { slug: article.node.slug } }"
          class="card"
        >
          <div class="card__img-container">
            <img
              :src="article.node.featuredImage.node.sourceUrl"
              :alt="article.node.featuredImage.node.altText"
              class="card__img"
            />
          </div>
          <div class="card__txt-container">
            <div class="card__category-container">
              <div class="card__category">
                {{ article.node.categories.edges[0].node.name }}
              </div>
            </div>
            <h1 class="card__title">{{ article.node.title }}</h1>
          </div>
        </nuxt-link>
      </section>
      <button
        v-if="articleCount < articles.pageInfo.total && showMoreAvailable"
        class="show-more-btn"
        @click="loadMore"
      >
        Show More
      </button>
    </template>
  </div>
</template>

<script>
import articleListQuery from '~/apollo/queries/articles/ArticleListQuery'
import loadingRing from '~/components/LoadingRing'

export default {
  components: {
    loadingRing
  },
  scrollToTop: false,

  data() {
    return {
      articles: {},
      showMoreAvailable: true,
      cursor: null,
      articleCount: 10
    }
  },

  apollo: {
    articles: {
      prefetch: true,
      query: articleListQuery,
      update: (data) => data.posts,
      variables() {
        return {
          first: this.articleCount
        }
      }
    }
  },

  methods: {
    loadMore() {
      this.cursor = this.articles.pageInfo.endCursor
      this.$apollo.queries.articles.fetchMore({
        variables: {
          after: this.cursor
        },

        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return previousResult
          const hasMore = fetchMoreResult.posts.pageInfo.hasNextPage

          this.cursor = fetchMoreResult.posts.pageInfo.endCursor
          this.showMoreAvailable = hasMore

          return {
            posts: {
              ...fetchMoreResult.posts,
              // Concat previous articles with the new articles
              edges: [
                ...previousResult.posts.edges,
                ...fetchMoreResult.posts.edges
              ]
            }
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.articles {
  padding: 0 2%;
  &-title {
    width: 100%;
    margin-bottom: 2rem;
    &__txt {
      font-size: 5.2rem;
    }
  }
  &__grid {
    margin-top: 4rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    gap: 1.8rem;
    max-height: 50%;
  }
}

// Desktop View
@media (min-width: 1248px) {
  .articles {
    padding: 0 15%;
  }
  .articles__grid {
    grid-auto-flow: dense;
  }
  .card:nth-child(3),
  .card:nth-child(5) {
    grid-column: span 2;
    grid-row: span 2;
    .card {
      &__category {
        font-size: 2rem;
      }
      &__txt-container {
        padding: 1.6rem;
      }
      &__title {
        font-size: 4.6rem;
      }
    }
  }
}
</style>
