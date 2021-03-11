<template>
  <div class="article-container">
    <article class="article">
      {{ article.title }}
    </article>
  </div>
</template>

<script>
import ArticleQuery from '~/apollo/queries/articles/ArticleQuery'

export default {
  data() {
    return {
      article: ''
    }
  },

  apollo: {
    article: {
      prefetch: true,
      query: ArticleQuery,
      variables() {
        return { slug: this.$route.params.slug }
      },
      update: (data) => data.post
    }
  }
}
</script>
