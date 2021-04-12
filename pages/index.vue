<template>
  <div>
    <SocialHead
      title="Wellrefresh "
      description="A Health and Wellness website aiming to help people with dieting, weight loss, and fitness."
      :image="baseURL + '/twitter-seo-card.png'"
    />
    <FeaturedArticlesGrid />
    <CategoryArticles />
  </div>
</template>

<script>
import FeaturedArticlesGrid from '~/components/FeaturedArticlesGrid'
import CategoryArticles from '~/components/CategoryArticles'
import SocialHead from '~/components/SocialHead'

export default {
  components: {
    FeaturedArticlesGrid,
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
