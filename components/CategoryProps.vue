<template>
  <div class="category-articles">
    <template v-if="$apollo.queries.category.loading">loading...</template>
    <template v-else>
      <h1 class="category-articles__title">{{ category.name }}</h1>
      <Pagination>
        <div class="category-articles__grid">
          <div
            v-for="article in category.posts.edges"
            :key="article.node.id"
            class="card"
          >
            <img
              :src="article.node.featuredImage.node.sourceUrl"
              :alt="article.node.featuredImage.node.altText"
              class="card__img"
            />
            <div class="card__txt-container">
              <h2 class="card__title">{{ article.node.title }}</h2>
            </div>
          </div>
        </div>
      </Pagination>
    </template>
  </div>
</template>

<script>
import ArticlesByCategoryQuery from '~/apollo/queries/articles/ArticlesByCategoryQuery'
import Pagination from '~/components/Pagination'

export default {
  components: {
    Pagination
  },

  props: {
    chosenCategory: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      category: []
    }
  },

  apollo: {
    category: {
      prefetch: true,
      query: ArticlesByCategoryQuery,
      variables() {
        return { category: this.chosenCategory }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.category-articles {
  margin: 20% 0;
  display: flex;
  flex-direction: column;
  padding: 0 2.5%;
  &__title {
    font-size: 3.6rem;
    color: $primary__color;
  }
  &__grid {
    margin-top: 3.6rem;
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
