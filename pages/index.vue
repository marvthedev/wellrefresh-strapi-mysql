<template>
  <div class="home">
    <ArticleShowcase />
    <CategoryArticles />
  </div>
</template>

<script>
import ArticleShowcase from '~/components/ArticleShowcase'
import CategoryArticles from '~/components/CategoryArticles'

export default {
  components: {
    ArticleShowcase,
    CategoryArticles
  }
}
</script>

<style lang="scss">
.home {
  margin-top: 6rem;
}
</style>
