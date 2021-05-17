<template>
  <div>
    <Pagination
      :posts="posts"
      :postsQuery="postsQuery"
      @updatePosts="updatePosts"
      :limit="10"
    />
  </div>
</template>

<script>
import Pagination from '~/components/Pagination'
import test from '~/apollo/queries/articles/test'
export default {
  components: {
    Pagination
  },
  data() {
    return {
      posts: {}
    }
  },
  apollo: {
    posts: {
      prefetch: true,
      query: test
    }
  }
}
</script>
