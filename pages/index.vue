<template>
  <div class="home">
    <topBanner />
  </div>
</template>

<script>
import topBanner from '~/components/Home/TopBanner'

export default {
  components: {
    topBanner
  }
}
</script>

<style lang="scss">
.home {
  margin-top: 6rem;
}
</style>
