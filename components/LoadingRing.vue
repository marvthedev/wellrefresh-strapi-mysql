<template>
  <div class="loading-ring">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<style lang="scss" scoped>
//Loading ring animation
.loading-ring {
  display: inline-block;
  position: relative;
  width: 7rem;
  height: 7rem;
  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 4.2rem;
    height: 4.2rem;
    margin: 0.8rem;
    border: 0.8rem solid #fff;
    border-radius: 50%;
    animation: loading-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: $secondary__color transparent transparent transparent;
    &:nth-child(1) {
      animation-delay: -0.45s;
    }
    &:nth-child(2) {
      animation-delay: -0.3s;
    }
    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
}

@keyframes loading-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
