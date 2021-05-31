<template>
  <div>
    <!-- SEO Meta Tag Component -->
    <SocialHead
      title="Wellrefresh "
      description="A Health and Wellness website aiming to help people with dieting, weight loss, and fitness."
      :image="baseURL + '/twitter-seo-card.png'"
    />

    <!-- Featured Articles Component -->
    <FeaturedArticlesGrid />

    <!-- Articles by Category Component -->
    <CategoryArticles />
  </div>
</template>

<script>
import FeaturedArticlesGrid from '~/components/Home/FeaturedArticlesGrid'
import CategoryArticles from '~/components/Home/CategoryArticles'
import SocialHead from '~/components/SocialHead'
// import LoadingRing from '~/components/LoadingRing'

export default {
  components: {
    FeaturedArticlesGrid,
    CategoryArticles,
    SocialHead
    // LoadingRing
  },

  data() {
    return {
      baseURL: process.env.BASE_URL
    }
  }
}
</script>

<style lang="scss"></style>
