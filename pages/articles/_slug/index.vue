<template>
  <div class="layout__content">
    <template v-if="$apollo.queries.article.loading"><LoadingRing /></template>
    <template v-else>
      <div class="container">
        <SocialHead
          :page-title="article.title"
          :page-description="article.seo.metaDesc"
          :title="article.seo.title"
          :description="article.seo.metaDesc"
          :image="article.featuredImage.node.sourceUrl"
        />
        <header class="head">
          <div class="head-top">
            <span
              v-for="category in article.categories.nodes.slice(0, 1)"
              :key="category.id"
              class="head-top__category card__category"
              >{{ category.name }}</span
            >
            <span class="head-top__date">{{ $formatDate(article.date) }}</span>
          </div>
          <h1 class="head__title">{{ article.title }}</h1>
          <div class="head__excerpt" v-html="article.excerpt"></div>
          <div class="head-info">
            <img
              :src="article.author.node.avatar.url"
              class="head-info__avatar"
            />
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
          <img
            :src="article.featuredImage.node.sourceUrl"
            class="article__img"
          />
          <article class="article__content" v-html="article.content"></article>
          <aside class="article__sidebar"><ArticleListSide /></aside>
        </main>
      </div>
    </template>
  </div>
</template>

<script>
import LoadingRing from '~/components/LoadingRing'
import SocialHead from '~/components/SocialHead'
import ArticleListSide from '~/components/SidebarLatestGrid'
import ArticleBySlugQuery from '~/apollo/queries/articles/ArticleBySlugQuery'

export default {
  components: {
    ArticleListSide,
    SocialHead,
    LoadingRing
  },

  data() {
    return {
      article: []
    }
  },

  apollo: {
    article: {
      prefetch: true,
      query: ArticleBySlugQuery,
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
  padding: 0 5% 25% 5%;
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
    font-size: 1.8rem;
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
    padding: 0 15%;
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
      width: 96%;
      font-size: 5.4rem;
    }
    &__excerpt {
      width: 75%;
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

//Loading ring animation
.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: $secondary__color transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
