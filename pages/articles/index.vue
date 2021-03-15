<template>
  <div class="articles"></div>
</template>

<script>
import articlesQuery from '~/apollo/queries/articles/ArticlesQuery'
// import gql from 'graphql-tag'

export default {
  data() {
    return {
      articles: {}
    }
  },

  apollo: {
    articles: {
      prefetch: true,
      query: articlesQuery,
      update: (data) => data.posts
    }
  }
}
</script>

<style lang="scss" scoped>
.articles {
  margin-top: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
