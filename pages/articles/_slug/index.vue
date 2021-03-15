<template>
  <article class="article">
    <h1 class="article__title">{{ article.title }}</h1>
    <div class="article-info">
      <img :src="article.author.node.avatar.url" class="article-info__avatar" />
      <div class="article-info__author">
        <span class="article-info__author-head">written by</span>

        <span class="article-info__author-name"
          >{{ article.author.node.firstName }}
          {{ article.author.node.lastName }}</span
        >
      </div>
      <div class="article-info__date">
        <span class="article-info__date-head">updated on</span>
        <span article-info__date-update>{{ $formatDate(article.date) }}</span>
      </div>
    </div>
    <img :src="article.featuredImage.node.mediaItemUrl" class="article__img" />
    <div class="article__container">
      <div class="article__content" v-html="article.content"></div>
      <section class="article__sidebar"><ArticleListSide /></section>
    </div>
  </article>
</template>

<script>
import ArticleQuery from '~/apollo/queries/articles/ArticleQuery'
import ArticleListSide from '~/components/ArticleListSidebar'

export default {
  components: {
    ArticleListSide
  },

  data() {
    return {
      loading: 0,
      article: ''
    }
  },

  apollo: {
    article: {
      prefetch: false,
      query: ArticleQuery,
      variables() {
        return { slug: this.$route.params.slug }
      },
      update: (data) => data.post
    }
  }
}
</script>

<style lang="scss">
.article {
  padding: 30% 4% 0 4%;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  &__title {
    font-size: 3.4rem;
    text-align: center;
  }

  &-info {
    display: flex;
    align-items: center;
    margin-top: 2rem;
    font-size: 1.4rem;
    font-weight: 900;
    &__avatar {
      height: 5.6rem;
      border-radius: 100%;
    }
    &__author,
    &__date {
      display: flex;
      flex-direction: column;
      margin-left: 2rem;
      &-head {
        font-weight: 400;
        font-size: 1.2rem;
        font-style: italic;
      }
    }
  }

  &__img {
    margin-top: 3rem;
    max-width: 100%;
    height: auto;
  }
  &__content {
    font-size: 1.8rem;
    line-height: 150%;
    & p {
      margin-top: 3rem;
    }
  }
}

//Desktop View
@media (min-width: 1248px) {
  .article {
    padding: 12% 20%;
    &__container {
      display: flex;
      flex-direction: row;
    }
    &__title {
      font-size: 5.4rem;
    }
    &__content {
      width: 90%;
      padding: 0 4%;
      font-size: 2rem;
    }
    &__sidebar {
      margin-top: 4rem;
      position: absolute;
      right: 9%;
    }
  }
}
</style>
