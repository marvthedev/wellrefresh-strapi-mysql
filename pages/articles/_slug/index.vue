<template>
  <div v-if="!loading" class="container">
    <SocialHead
      :pageTitle="article.title"
      :pageDescription="article.seo.metaDesc"
      :title="article.seo.title"
      :description="article.seo.metaDesc"
      :image="article.featuredImage.node.sourceUrl"
    />
    <header class="head">
      <div class="head-top">
        <span
          class="head-top__category card__category"
          v-for="category in article.categories.nodes"
          :key="category.id"
          >{{ category.name }}</span
        >
        <span class="head-top__date">{{ $formatDate(article.date) }}</span>
      </div>
      <h1 class="head__title">{{ article.title }}</h1>
      <div class="head__excerpt" v-html="article.excerpt"></div>
      <div class="head-info">
        <img :src="article.author.node.avatar.url" class="head-info__avatar" />
        <div class="head-info__author">
          <span class="head-info__author-head">written by</span>

          <span class="head-info__author-name"
            >{{ article.author.node.firstName }}
            {{ article.author.node.lastName }}</span
          >
        </div>
      </div>
    </header>
    <main class="article">
      <img :src="article.featuredImage.node.sourceUrl" class="article__img" />
      <article class="article__content" v-html="article.content"></article>
      <aside class="article__sidebar"><ArticleListSide /></aside>
    </main>
  </div>
</template>

<script>
import ArticleQuery from '~/apollo/queries/articles/ArticleQuery'
import ArticleListSide from '~/components/SidebarLatestGrid'
import SocialHead from '~/components/SocialHead'

export default {
  components: {
    ArticleListSide,
    SocialHead
  },

  data() {
    return {
      loading: 0,
      article: []
    }
  },

  apollo: {
    article: {
      prefetch: true,
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
.container {
  padding: 25% 5% 25% 5%;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

.head {
  display: flex;
  flex-direction: column;
  width: 100%;
  &-top {
    &__category {
      font-size: 1.4rem;
    }
    &__date {
      margin-left: 0.4rem;
      font-size: 1.4rem;
      color: #757575;
    }
  }
  &__title {
    font-size: 3.4rem;
  }
  &__excerpt {
    margin-top: 0.6rem;
    font-size: 1.6rem;
  }
  &-info {
    display: flex;
    align-items: center;
    margin-top: 0.8rem;
    font-size: 1.4rem;
    font-weight: 900;
    &__avatar {
      height: 4rem;
      border-radius: 100%;
    }
    &__author {
      display: flex;
      margin-left: 1.4rem;
      &-head {
        font-weight: 400;
        font-style: italic;
      }
      &-name {
        margin-left: 0.6rem;
      }
    }
  }
}

.article {
  margin-top: 2rem;
  display: grid;
  &__img {
    width: 100%;
    height: auto;
  }
  &__content {
    font-size: 1.8rem;
    & p {
      margin-top: 2rem;
      line-height: 1.7;
    }
  }
}

//Desktop View
@media (min-width: 1248px) {
  .container {
    padding: 10% 15%;
  }

  .head {
    &-top {
      &__category {
        font-size: 1.8rem;
      }
      &__date {
        margin-left: 0.4rem;
        font-size: 1.4rem;
        color: #757575;
      }
    }
    &__title {
      width: 85%;
      font-size: 5.2rem;
    }
    &__excerpt {
      width: 70%;
      font-size: 2rem;
    }
  }

  .article {
    grid-template-columns: 70% AUTO;
    grid-template-rows: repeat(auto-fit, min-max(25rem, 1fr));
    grid-template-areas:
      'img side'
      'content side';
    justify-content: center;
    &__img {
      grid-area: img;
      margin-bottom: 0.8rem;
    }
    &__content {
      grid-area: content;
      width: 90%;
      font-size: 2rem;
      width: 100%;
      max-height: 100%;
    }
    &__sidebar {
      padding: 0 10%;
      grid-area: side;
    }
  }
}
</style>
