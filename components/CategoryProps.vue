<template>
  <div class="category">
    <template v-if="$apollo.queries.category.loading"
      ><loading-ring
    /></template>
    <template v-else>
      <div class="category-articles">
        <h1 class="category-articles__title">{{ category.name }}</h1>
        <div v-if="excerpt" class="wellrefresh-txt">
          <p>
            {{ excerpt }}
          </p>
        </div>
        <div class="category-articles__grid">
          <nuxt-link
            v-for="article in category.posts.nodes"
            :key="article.id"
            class="card"
            :to="{
              name: 'articles-slug',
              params: { slug: article.slug }
            }"
          >
            <div class="card__img-container">
              <img
                :src="article.featuredImage.node.sourceUrl"
                :alt="article.featuredImage.node.altText"
                class="card__img"
              />
            </div>
            <div class="card__txt-container">
              <h2 class="card__title">{{ article.title }}</h2>
            </div>
          </nuxt-link>
        </div>
      </div>
      <button
        v-if="articleCount < category.posts.pageInfo.total && showMoreEnabled"
        class="show-more-btn"
        @click="showMore"
      >
        Show more
      </button>
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
    },
    excerpt: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      category: {},
      articleCount: 8,
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
      this.cursor = this.category.posts.pageInfo.endCursor

      this.$apollo.queries.category.fetchMore({
        variables: {
          first: this.articleCount,
          after: this.cursor
        },

        updateQuery: (existing, { fetchMoreResult }) => {
          if (!fetchMoreResult) return existing
          const hasMore = fetchMoreResult.category.posts.pageInfo.hasNextPage

          this.showMoreEnabled = hasMore
          this.cursor = fetchMoreResult.category.posts.pageInfo.endCursor
          console.log(fetchMoreResult.category.posts)
          return {
            category: {
              ...fetchMoreResult.category,
              posts: {
                ...fetchMoreResult.category.posts,
                // Update the cursor
                nodes: [
                  ...existing.category.posts.nodes,
                  ...fetchMoreResult.category.posts.nodes
                ]
              }
            }
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.wellrefresh-txt {
  margin-top: 2rem;
}

.category {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2%;
  &-articles {
    display: flex;
    flex-direction: column;
    justify-content: center;
    &__title {
      font-size: 5.2rem;
    }
    &__grid {
      margin-top: 4rem;
      display: grid;
      gap: 1.6rem;
      grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    }
  }
}

@media (min-width: 1248px) {
  .category {
    padding: 0 15%;
  }
}
</style>
