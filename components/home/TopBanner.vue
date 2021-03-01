<template>
  <div class="top-banner">
    <div class="top-banner__txt">
      <h2 class="top-banner__heading1">
        We're here to help you become a better version of yourself.
      </h2>
      <h2 class="top-banner__heading2">Read on to and get better!</h2>
    </div>
    <div class="top-banner__img">
      <img
        src="~/assets/img/wellrefresh-meditation.svg"
        alt="Wellrefresh - Improve your lifestyle"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top-banner {
  margin-top: 6rem;
  display: flex;
  align-items: center;
  background: $secondary__color;
  padding: 1rem;
  &__txt {
    width: 70%;
    color: white;
  }
  &__heading1 {
    font-size: 1.4rem;
  }
  &__heading2 {
    margin-top: 0.5rem;
    color: #6f94ac;
    font-size: 1.8rem;
  }
  &__img {
    display: flex;
    align-items: center;
    width: 30%;
    & img {
      width: 100%;
    }
  }
}
</style>
