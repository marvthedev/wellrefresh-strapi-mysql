<template>
  <div class="loading-animation">
    <div class="loading-animation__ring">
      <loading-ring />
    </div>
  </div>
</template>

<script>
import loadingRing from '~/components/LoadingRing.vue'
export default {
  components: {
    loadingRing
  }
}
</script>

<style lang="scss" scoped>
.loading-animation {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
}
</style>
