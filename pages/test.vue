<template>
  <div class="test">
    <ul
      v-for="link in navBarLinks"
      :key="link.url"
      :to="link.url"
      class="test-block"
    >
      <li>{{ link.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navBarLinks: [
        { title: 'Home', url: '/' },
        { title: 'Articles', url: '/articles' },
        { title: 'Weight Loss', url: '/weight-loss' },
        { title: 'Fitness', url: '/fitness' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.test-block li {
  background: blue;
  border: 0;
  padding: 2rem;
  margin: 2rem 0;
}

.test {
  margin-top: 5rem;
  font-size: 4rem;
}

.test-block {
  background: black;
  margin: 0;
  border: 0;
}
</style>
