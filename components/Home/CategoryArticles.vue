<template>
  <div class="categories">
    <h2 class="categories__title">{{ categoryName }}</h2>
    <div class="categories__grid">
      <nuxt-link
        v-for="article in articlesByCategory.slice(0, 8)"
        :key="article.node.id"
        class="card"
        :to="{
          name: 'articles-slug',
          params: { slug: article.node.slug }
        }"
      >
        <img
          :src="article.node.featuredImage.node.sourceUrl"
          :alt="article.node.featuredImage.altText"
          class="card__img"
        />

        <div class="card__txt-container">
          <h2 class="card__title">
            {{ article.node.title }}
          </h2>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    articleList: {
      type: Object,
      default: () => {}
    },
    categoryName: {
      type: String,
      default: ''
    }
  },

  computed: {
    articlesByCategory: function () {
      return this.articleList.edges.filter((post) => {
        return post.node.categories.edges.find((category) => {
          return category.node.name == this.categoryName
        })
      })
    }
  }
}
</script>

<style lang="scss">
.categories {
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  padding: 0 2.5%;
  &__title {
    font-size: 2.2rem;
    &:not(:first-child) {
      margin-top: 6rem;
    }
  }
  &__grid {
    margin-top: 2.4rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    gap: 1.6rem;
  }
}

//Desktop view
@media (min-width: 1248px) {
  .categories {
    padding: 0 15%;
    margin-top: 8rem;
    width: 100%;
    &__title {
      font-size: 2.6rem;
    }
  }
}
</style>
