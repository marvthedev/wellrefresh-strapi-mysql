<template>
  <div class="sidebar-latest-grid">
    <div
      v-for="article in articles"
      :key="article.id"
      class="sidebar-latest-grid-item"
    >
      <h2 class="sidebar-latest-grid-item__title">{{ article.title }}</h2>
    </div>
  </div>
</template>

<script>
import ArticleListQuery from '~/apollo/queries/articles/ArticleListQuery'
export default {
  data() {
    return {
      articles: []
    }
  },

  apollo: {
    articles: {
      prefetch: true,
      query: ArticleListQuery,
      update: (data) => data.posts.nodes
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar-latest-grid {
  display: grid;
  gap: 1.6rem;
}
</style>
