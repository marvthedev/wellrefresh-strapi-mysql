<template>
  <div class="articles-side">
    <h2 class="articles-side__title">Latest Topics</h2>
    <nuxt-link
      v-for="article in articles.edges"
      :key="article.node.slug"
      :to="{ name: 'articles-slug', params: { slug: article.node.slug } }"
      class="articles-side__list"
    >
      <div class="articles-side__topic-title">{{ article.node.title }}</div>
    </nuxt-link>
  </div>
</template>

<script>
import ArticleListQuery from '~/apollo/queries/articles/ArticleListQuery'

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
      update: (data) => data.posts,
      variables() {
        return {
          first: 5,
          after: null
        }
      }
    }
  }
}
</script>

<style lang="scss">
.articles-side {
  margin: 6rem 0;
  display: flex;
  flex-direction: column;
  &__title {
    text-align: center;
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }
  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  &__topic-title {
    font-size: 1.8rem;
    font-family: $lato;
    text-align: center;
    padding: 1.4rem;
    color: $primary__color;
    font-weight: 900;
    &:not(:last-child) {
      border-bottom: 0.1rem solid #d8d8d8;
    }
    &:hover {
      color: $secondary__color;
    }
  }
}

@media (min-width: 1248px) {
  .articles-side {
    margin: 0;
    border-left: 2px solid #cfd8dc;
    padding: 0 2rem;

    &__title {
      text-align: left;
      font-size: 1.6rem;
    }
    &__list {
      padding: 0;
      align-items: flex-start;
    }
    &__topic-title {
      font-size: 1.4rem;
      padding: 0.8rem 0;
      text-align: left;
    }
  }
}
</style>
