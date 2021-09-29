<template>
  <div class="sidebar-latest-grid">
    <h2 class="sidebar-latest-grid__title">Latest Topics</h2>
    <nuxt-link
      v-for="article in articles"
      :key="article.id"
      :to="{ name: 'articles-slug', params: { slug: article.slug } }"
      class="sidebar-latest-grid-item"
    >
      <img
        :src="article.featuredImage.node.sourceUrl"
        :alt="article.featuredImage.node.altText"
        class="sidebar-latest-grid-item__img"
      />
      <div class="sidebar-latest-grid-item__txt-container">
        <div
          v-for="category in article.categories.nodes"
          :key="category.id"
          class="sidebar-latest-grid-item__category-container"
        >
          <div class="sidebar-latest-grid-item__category">
            {{ category.name }}
          </div>
        </div>
        <h2 class="sidebar-latest-grid-item__title">
          {{ article.title }}
        </h2>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import ArticleListQuery from '~/apollo/queries/articles/SideArticleGridQuery'
export default {
  data() {
    return {
      articles: {}
    }
  },

  apollo: {
    articles: {
      prefetch: true,
      query: ArticleListQuery,
      update: (data) => data.posts.nodes
    }
  },

  computed: {}
}
</script>

<style lang="scss" scoped>
.sidebar-latest-grid {
  margin-top: 4.8rem;
  display: grid;
  gap: 1.6rem;
  &__title {
    font-size: 2.2rem;
    margin-bottom: 0.8rem;
  }
  &-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 0;
    border-radius: 1rem;
    box-shadow: 0px 1.6rem 2rem -2.2rem rgba(0, 0, 0, 0.48);
    border: 1px solid #e7ebfb;
    &__txt-container {
      display: flex;
      flex-direction: column;
      padding: 5%;
    }
    &__category-container {
      display: flex;
    }
    &__category {
      font-family: 'Lato', sans-serif;
      font-weight: 900;
      font-size: 1.2rem;
      background: $secondary__color;
      border-radius: 0.14rem;
      color: white;
      text-transform: uppercase;
      padding: 0.24rem 0.4rem;
    }
    &__img {
      border-radius: 1rem 1rem 0 0;
      width: 100%;
      height: auto;
    }
    &__title {
      margin-top: 0.8rem;
      font-size: 2.4rem;
    }
  }
}

@media (min-width: 1248px) {
  .sidebar-latest-grid {
    margin-top: 0;
    width: 85%;
    &-item {
      flex-direction: row;
      border: none;
      box-shadow: none;
      &__txt-container {
        padding: 0 5%;
      }
      &__category-container {
        display: none;
      }
      &__img {
        height: auto;
        width: 6rem;
        border-radius: 0;
      }
      &__title {
        font-size: 1.4rem;
        font-weight: 400;
        &:hover {
          color: $primary__color;
        }
      }
    }
  }
}
</style>
