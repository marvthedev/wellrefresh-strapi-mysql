<template>
  <div class="articles">
    <div v-for="featured in articles" :key="featured.id">
      <div v-for="post in featured.posts.nodes" :key="post.id">
        <h2 v-if="featured.name == 'featured-large'">{{ post.title }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: []
    }
  }
}
</script>

<style lang="scss" scoped>
.articles {
  margin-top: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
