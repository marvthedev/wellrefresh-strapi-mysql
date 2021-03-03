<template>
  <div class="home">
    <ArticleShowcase />
    <ArticleShowcase />
  </div>
</template>

<script>
import ArticleShowcase from '~/components/ArticleShowcase'

export default {
  components: {
    ArticleShowcase
  }
}
</script>

<style lang="scss">
.home {
  margin-top: 6rem;
}
</style>
