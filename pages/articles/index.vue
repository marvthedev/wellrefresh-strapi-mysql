<template>
  <div class="articles">
    <template v-if="$apollo.queries.articles.loading">
      <LoadingRing />
    </template>
    <template v-else>
      <section class="articles__grid">
        <div
          v-for="article in articles.edges"
          :key="article.node.id"
          class="card"
        >
          <img
            :src="article.node.featuredImage.node.sourceUrl"
            :alt="article.node.featuredImage.node.altText"
            class="card__img"
          />
          <div
            class="card__txt-container"
            v-for="category in article.node.categories.edges"
            :key="category.node.id"
          >
            <div class="card__category-container">
              <div class="card__category">
                {{ category.node.name }}
              </div>
            </div>
            <h1 class="card__title">{{ article.node.title }}</h1>
          </div>
        </div>
      </section>
      <button
        v-if="articleCount < articles.pageInfo.total && showMoreAvailable"
        @click="loadMore"
      >
        Load More
      </button>
    </template>
  </div>
</template>

<script>
import ArticleListQuery from '~/apollo/queries/articles/ArticleListQuery'
import LoadingRing from '~/components/LoadingRing'

export default {
  components: {
    LoadingRing
  },
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
      query: ArticleListQuery,
      update: (data) => data.posts,
      variables() {
        return {
          first: this.articleCount
        }
      },
      result({ data }) {
        this.totalCount = data.totalCount
      }
    }
  },

  methods: {
    loadMore() {
      console.log(this.articles.pageInfo.total)
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
          console.log(fetchMoreResult.posts.edges.length)

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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2%;
  &__grid {
    display: grid;
    row-gap: 1.8rem;
  }
}
</style>
