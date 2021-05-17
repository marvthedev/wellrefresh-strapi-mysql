<template>
  <div class="pagination">
    <a v-if="hasPreviousPage" @click="paginate(-1)" class="prev"
      >← Previous Page</a
    >
    <a v-if="hasNextPage" @click="paginate(+1)" class="next">Next Page →</a>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  data() {
    return {
      firstStartCursor: this.posts.data.posts.pageInfo.startCursor,
      hasNextPage: this.posts.data.posts.pageInfo.hasNextPage,
      hasPreviousPage: false,
      first: null,
      last: null,
      startCursor: null,
      endCursor: null
    }
  },
  props: {
    posts: {
      type: Object
    },
    postsQuery: {
      type: Object
    },
    limit: {
      type: Number
    },
    where: {
      type: Object
    }
  },
  methods: {
    async paginate(i) {
      if (i < 0) {
        this.first = null
        this.last = this.limit
        this.startCursor = this.posts.data.posts.pageInfo.startCursor
        this.endCursor = null
      } else if (i > 0) {
        this.first = this.limit
        this.last = null
        this.startCursor = null
        this.endCursor = this.posts.data.posts.pageInfo.endCursor
      }
      await this.$apolloProvider.defaultClient
        .query({
          query: this.postsQuery,
          variables: {
            first: this.first,
            last: this.last,
            endCursor: this.endCursor,
            startCursor: this.startCursor,
            where: this.where
          }
        })
        .then((posts) => {
          this.$emit('updatePosts', posts)
          if (i < 0) {
            this.hasNextPage = true
            this.hasPreviousPage =
              this.firstStartCursor == posts.data.posts.pageInfo.startCursor
                ? false
                : true
          } else {
            this.hasPreviousPage = true
            this.hasNextPage = posts.data.posts.pageInfo.hasNextPage
          }
        })
      window.scroll({ top: 0, left: 0, behavior: 'smooth' })
    }
  }
}
</script>
