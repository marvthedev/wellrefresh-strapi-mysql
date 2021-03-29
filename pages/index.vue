<template>
  <div>
    <SocialHead
      title="Wellrefresh "
      description="A Health and Wellness website aiming to help people with dieting, weightloss, and fitness!"
      image="/twitter-seo-card.png"
    />
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

<style lang="scss"></style>
