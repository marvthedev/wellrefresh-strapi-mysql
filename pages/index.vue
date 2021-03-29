<template>
  <div>
    <SocialHead
      title="Wellrefresh "
      description="A Health and Wellness website aiming to help people with dieting, weightloss, and fitness!"
      :image="baseURL + '/twitter-seo-card.png'"
    />
    <ArticleShowcase />
    <CategoryArticles />
  </div>
</template>

<script>
import ArticleShowcase from '~/components/ArticleShowcase'
import CategoryArticles from '~/components/CategoryArticles'
import SocialHead from '~/components/SocialHead'

export default {
  components: {
    ArticleShowcase,
    CategoryArticles,
    SocialHead
  },
  data() {
    return {
      baseURL: process.env.BASE_URL
    }
  }
}
</script>

<style lang="scss"></style>
