<template>
  <div class="categories">
    <h2 class="categories__title">{{ categoryName }}</h2>
    <div class="categories__grid">
      <div v-for="(article, index) in weightLossArticles" :key="index">
        <div
          v-for="category in article.node.categories.edges"
          :key="category.node.id"
        >
          <nuxt-link
            :to="{
              name: 'articles-slug',
              params: { slug: article.node.slug }
            }"
            class="card"
          >
            <div v-if="article.node && category.node.name == categoryName">
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
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    articleList: {
      type: Object,
      default: function () {
        return {}
      }
    },
    categoryName: {
      type: String,
      default: ''
    }
  },

  computed: {
    weightLossArticles: function () {
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
  margin-bottom: 6rem;
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
    gap: 1.8rem;
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
    &__grid {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: 1fr min-content;
      &__title {
        font-size: 2.2rem;
      }
    }
  }
}
</style>
