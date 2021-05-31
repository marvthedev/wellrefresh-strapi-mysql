<template>
  <div class="categories">
    <template v-if="$apollo.loading"><div></div></template>
    <template v-else>
      <h2 class="categories__title">Weight Loss</h2>
      <div class="categories__grid">
        <div v-for="article in weightLoss" :key="article.id" class="card">
          <img
            :src="article.featuredImage.node.sourceUrl"
            :alt="article.title"
            class="card__img"
          />
          <div class="card__txt-container">
            <h2 class="card__title">
              {{ article.title }}
            </h2>
          </div>
        </div>
      </div>

      <h2 class="categories__title">Fitness</h2>
      <div class="categories__grid">
        <div v-for="article in fitness" :key="article.id" class="card">
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
  padding: 0 2.5%;
  &__title {
    font-size: 2.2rem;
  }
}

.categories__grid {
  grid-template-columns: repeat(auto-fit, minmax(30rem, auto));
  gap: 1.6rem;
  margin-top: 2rem;
  display: grid;

  &__title {
    font-size: 2.2rem;
  }
}

@media (min-width: 768px) {
  .card__title {
    font-size: 1.8rem;
  }
}

//Desktop view
@media (min-width: 1248px) {
  .categories {
    padding: 0 15%;
    margin-top: 8rem;
    &__title {
      margin-top: 2.8rem;
    }
  }
}
</style>
