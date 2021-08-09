<template>
  <div class="layout__content">
    <category-props
      chosen-category="Fitness"
      excerpt="Whether you are trying to build muscle or just want to learn more about improving your fitness, these articles are for you! Get tips on how you can modify your workout routines, learn about different kinds of exercises, and learn ways to build muscle faster!"
    />
  </div>
</template>

<script>
import categoryProps from '~/components/CategoryProps'
export default {
  components: {
    categoryProps
  }
}
</script>
