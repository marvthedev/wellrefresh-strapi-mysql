<template>
  <div class="articles">
    <div class="articles__list" v-for="article in articles" :key="article.id">
      <h2>{{ article.title }}</h2>
    </div>
  </div>
</template>

<script>
import ArticleListQuery from '~/apollo/queries/articles/ArticleListQuery'

export default {
  data() {
    return {
      articles: ''
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

<style lang="scss" scoped></style>
