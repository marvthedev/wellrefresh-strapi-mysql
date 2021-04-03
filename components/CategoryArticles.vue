<template>
  <div class="categories">
    <h2 class="weight-loss__title">Weight Loss</h2>
    <div
      v-for="article in weightLoss"
      :key="article.id"
      class="weight-loss card"
    >
      <img
        :src="article.featuredImage.node.sourceUrl"
        :alt="article.title"
        class="card__img"
      />
      <div class="card__txt-container">
        <h2 class="card__title">{{ article.title }}</h2>
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
  flex-direction: column;
  margin: 3rem 0;
  padding: 0 2.5%;
}

.weight-loss {
  margin-top: 2rem;
  display: grid;
  row-gap: 1rem;
  &__title {
    font-size: 2.2rem;
  }
}

//Desktop view
@media (min-width: 1248px) {
  .weight-loss {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
