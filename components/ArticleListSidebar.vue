<template>
  <div class="articles-side">
    <h2 class="articles-side__title">Latest Topics</h2>
    <nuxt-link
      v-for="article in articles"
      :key="article.slug"
      :to="{ name: 'articles-slug', params: { slug: article.slug } }"
      class="articles-side__list"
    >
      <div class="articles-side__topic-title">{{ article.title }}</div>
    </nuxt-link>
  </div>
</template>

<script>
import ArticleListQuery from '~/apollo/queries/articles/ArticleListQuery'

export default {
  data() {
    return {
      articles: ''
    }
  },

  apollo: {
    articles: {
      prefetch: true,
      query: ArticleListQuery,
      update: (data) => data.posts.nodes
    }
  }
}
</script>

<style lang="scss">
.articles-side {
  margin: 6rem 0;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  &__title {
    text-align: center;
    font-size: 2.2rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
    color: $primary__color;
  }
  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  &__topic-title {
    font-size: 2rem;
    font-family: $lato;
    text-align: center;
    font-weight: 900;
    padding: 2rem 4rem;
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
    margin-top: 0;
    border-left: 2px solid #cfd8dc;
    &__title {
      text-align: left;
      font-size: 1.8rem;
    }
    &__list {
      padding: 0;
      align-items: flex-start;
    }
    &__topic-title {
      font-size: 1.4rem;
      padding: 1rem 0;
      text-align: left;
    }
  }
}
</style>
