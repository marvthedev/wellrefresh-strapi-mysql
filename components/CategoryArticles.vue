<template>
  <div class="categories">
    <div v-for="article in weightLoss" :key="article.id" class="weight-loss">
      <h2 class="weight-loss__title">Weight Loss</h2>
      <div class="weight-loss-card">
        <h2 class="weight-loss-card__title">{{ article.title }}</h2>
        <div class="weight-loss-card__excerpt" v-html="article.excerpt"></div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoriesQuery from '~/apollo/queries/articles/CategoriesQuery'

export default {
  data() {
    return {
      weightLoss: [],
      fitness: [],
      diet: []
    }
  },

  apollo: {
    weightLoss: {
      prefetch: true,
      query: CategoriesQuery,
      update: (data) => data.posts.nodes,
      variables: {
        category: 'Weight Loss'
      }
    },

    fitness: {
      prefetch: true,
      query: CategoriesQuery,
      update: (data) => data.posts.nodes,
      variables: {
        category: 'fitness'
      }
    },

    diet: {
      prefetch: true,
      query: CategoriesQuery,
      update: (data) => data.posts.nodes,
      variables: {
        category: 'diet'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.categories {
  display: flex;
  margin: 3rem 0;
  padding: 0 2.5%;
}
.weight-loss {
  &__title {
    font-size: 2.2rem;
  }
}
</style>
