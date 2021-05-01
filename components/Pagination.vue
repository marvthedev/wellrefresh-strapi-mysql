<template>
  <div class="pagination">
    <slot />
    <div>
      <div class="pagination__container">
        <button class="pagination__btn">Previous</button>
        <span
          v-for="(item, index) in new Array(9)"
          :key="index"
          class="pagination__row"
        >
          <button class="pagination__btn">{{ index + 1 }}</button>
        </span>
        <button class="pagination__btn">Next</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pagination {
  display: flex;
  flex-direction: column;
  &__container {
    margin-top: 4rem;
    display: flex;
    justify-content: center;
  }
  &__btn {
    padding: 0.8rem 1rem;
    margin: 0.4rem;
    border-radius: 0.3rem;
    font-size: 1.4rem;
    cursor: pointer;
    background: $primary__color;
    color: white;
    &:hover {
      background: $secondary__color;
    }
  }
}
</style>
