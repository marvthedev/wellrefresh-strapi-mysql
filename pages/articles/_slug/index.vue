<template>
  <article class="post">
    <div class="post__return">
      <nuxt-link to="/articles" class="post__return-link"
        >back to blog</nuxt-link
      >
    </div>
    <h1 class="post__title">{{ article.title }}</h1>
    <span class="post__date">{{ $formatDate(article.date) }}</span>
    <div class="post__content" v-html="article.content"></div>
  </article>
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
