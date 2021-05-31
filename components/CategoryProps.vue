<template>
  <div class="category-articles">
    <template v-if="$apollo.queries.category.loading" class="loading"
      ><div class="loading"><LoadingRing /></div
    ></template>
    <template v-else>
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
    </template>
  </div>
</template>

<script>
import ArticlesByCategoryQuery from '~/apollo/queries/articles/ArticlesByCategoryQuery'
import LoadingRing from '~/components/LoadingRing'

export default {
  components: {
    LoadingRing
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
      postQuantity: 3,
      showMoreEnabled: true
    }
  },

  apollo: {
    category: {
      prefetch: true,
      query: ArticlesByCategoryQuery,
      variables() {
        return {
          category: this.chosenCategory,
          first: 3,
          after: null
        }
      },
      notifyOnNetworkStatusChange: true
    }
  },

  methods: {
    showMore() {
      this.$apollo.queries.category.fetchMore({
        variables: {
          category: this.chosenCategory,
          first: this.postQuantity,
          after: this.category.posts.pageInfo.endCursor
        },
        notifyOnNetworkStatusChange: true,

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
//Center loading ring
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
}
.category-articles {
  display: flex;
  flex-direction: column;
  padding: 0 2.5%;
  &__title {
    font-size: 2.2rem;
  }
  &__grid {
    margin-top: 1.6rem;
    display: grid;
    gap: 1.6rem;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  }
}

@media (min-width: 1248px) {
  .category-articles {
    margin: 10% 0;
    padding: 0 15%;
  }
}
</style>
