<template>
  <div>
    <template v-if="$apollo.queries.category.loading"
      ><loading-ring
    /></template>
    <template v-else>
      <div class="category-articles">
        <h1 class="category-articles__title">{{ category.name }}</h1>
        <div class="category-articles__grid">
          <div
            v-for="article in category.posts.nodes"
            :key="article.id"
            class="card"
          >
            <img
              :src="article.featuredImage.node.sourceUrl"
              :alt="article.featuredImage.node.altText"
              class="card__img"
            />
            <div class="card__txt-container">
              <h2 class="card__title">{{ article.title }}</h2>
            </div>
          </div>
        </div>
        <button v-if="showMoreEnabled" @click="showMore">Show more</button>
      </div>
    </template>
  </div>
</template>

<script>
import ArticlesByCategoryQuery from '~/apollo/queries/articles/ArticlesByCategoryQuery'
import loadingRing from '~/components/LoadingRing'

export default {
  components: {
    loadingRing
  },

  props: {
    chosenCategory: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      category: {},
      articleCount: 3,
      showMoreEnabled: true,
      cursor: null
    }
  },

  apollo: {
    category: {
      prefetch: true,
      query: ArticlesByCategoryQuery,
      variables() {
        return {
          first: this.articleCount,
          category: this.chosenCategory
        }
      }
    }
  },

  methods: {
    showMore() {
      this.$apollo.queries.category.fetchMore({
        variables: {
          first: this.articleCount,
          after: this.cursor
        },
        updateQuery: (existing, { fetchMoreResult }) => {
          const hasMore = fetchMoreResult.category.posts.pageInfo.hasNextPage

          this.showMoreEnabled = hasMore

          console.log(this.category.posts.pageInfo.endCursor)
          console.log(fetchMoreResult.category.posts.pageInfo)

          return {
            ...existing,
            category: {
              ...existing.category,
              // Update the cursor
              after: fetchMoreResult.category.posts.pageInfo.endCursor,
              // Combine incoming posts to existing posts
              posts: [
                ...existing.category.posts.nodes,
                ...fetchMoreResult.category.posts.nodes
              ],
              hasMore
            }
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.category-articles {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2.5%;
  &__title {
    font-size: 5.2rem;
  }
  &__grid {
    margin-top: 4rem;
    display: grid;
    gap: 1.6rem;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  }
}

@media (min-width: 1248px) {
  .category-articles {
    padding: 0 15%;
  }
}
</style>
