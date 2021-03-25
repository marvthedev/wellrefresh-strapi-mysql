<template>
  <nav class="nav" :class="{ nav__scroll: scrollPosition > 50 }">
    <div
      class="nav__container"
      :class="{ nav__container__scroll: scrollPosition > 50 }"
    >
      <nuxt-link to="/">
        <div class="nav__logo">
          <img
            src="~/assets/img/wellrefresh-logo-txt.svg"
            class="nav__logo-img"
            :class="{ nav__logo__img__scroll: scrollPosition > 50 }"
          />
        </div>
      </nuxt-link>
      <!-- Only visible when viewing with mobile device. -->
      <div class="nav__toggle" @click="menuOpened = !menuOpened">
        <div
          :class="{ nav__clicked: menuOpened }"
          class="nav__toggle-bar"
        ></div>
      </div>
      <!-- Only visible when viewing with iPad Pro and Desktop. -->
      <div
        class="nav__links"
        :class="{ nav__links__scroll: scrollPosition > 50 }"
      >
        <nuxt-link to="/" class="nav__links-item nav__links-item-home"
          >Home</nuxt-link
        >
        <nuxt-link to="/about" class="nav__links-item">About</nuxt-link>
        <nuxt-link to="/orthotics" class="nav__links-item"
          >Weight Loss</nuxt-link
        >
        <nuxt-link to="/contact" class="nav__links-item">Contact</nuxt-link>
      </div>
    </div>
    <!-- Only visible when viewing with smaller devices. -->
    <div
      v-show="menuOpened"
      class="nav__menu"
      @click="menuOpened = !menuOpened"
    >
      <nuxt-link to="/" class="nav__menu-item">Home</nuxt-link>
      <nuxt-link to="/about" class="nav__menu-item">About</nuxt-link>
      <nuxt-link to="/orthotics" class="nav__menu-item">Weight Loss</nuxt-link>
      <nuxt-link to="/contact" class="nav__menu-item">Fitness</nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuOpened: false,
      scrollPosition: null
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    }
  }
}
</script>

<style lang="scss">
.nav {
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  font-family: 'Lato', sans-serif;
  &__scroll {
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.08);
    background: rgba(255, 255, 255, 0.9);
  }
  &__container {
    padding: 1.5rem 1.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    &__scroll {
      padding: 1.2rem;
    }
  }
  &__logo {
    display: flex;
    align-items: center;
    &__img__scroll {
      height: 1rem;
    }
    &-img {
      height: 2rem;
    }
    &-txt {
      margin-left: 0.2rem;
      display: flex;
      flex-direction: column;
      font-size: 1.8rem;
      line-height: 1.5rem;
      color: $primary__color;
      font-weight: 700;
      & span {
        padding: 0.1rem 0;
      }
    }
  }
  &__toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.5rem;
    height: 3.5rem;
    background: $primary__color;
    border-radius: 0.25rem;
    cursor: pointer;
    &-bar,
    &-bar::before,
    &-bar::after {
      width: 1.7rem;
      height: 0.2rem;
      background: white;
      transition: all 0.5s ease-in-out;
    }
    &-bar::before,
    &-bar::after {
      content: '';
      position: absolute;
    }
    &-bar::before {
      transform: translateY(-0.5rem);
    }
    &-bar::after {
      transform: translateY(0.5rem);
    }
  }

  //Transform bars to an "X"
  &__clicked {
    transform: translateX(-0.4rem);
    background: transparent;
    &::before {
      transform: rotate(45deg) translate(0.3rem, -0.3rem);
    }
    &::after {
      transform: rotate(-45deg) translate(0.3rem, 0.3rem);
    }
  }

  //Navigation menu that opens when hamburger button is clicked
  &__menu {
    z-index: 9999;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
    position: relative;
    left: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.9);
    margin: 1.5rem 0;
    &-item {
      font-size: 1.4rem;
      text-transform: uppercase;
      font-weight: 700;
      padding: 1rem;
      color: #333;
      &:not(:last-child) {
        border-bottom: 0.1rem solid #e8e8e8;
      }
      &-hover {
        background: $primary__color;
        color: white;
      }
    }
  }
  &__links {
    display: none;
  }
}
//Desktop View
@media (min-width: 1248px) {
  .nav {
    padding: 0;
    &__container {
      flex-direction: column;
      justify-content: center;
      padding: 2rem 0;
      &__scroll {
        flex-direction: row;
        padding: 1rem 15%;
        justify-content: center;
      }
    }
    &__logo {
      &-img {
        height: 3rem;
        width: auto;
      }
      &__img__scroll {
        height: 2.4rem;
        border-right: 0.1rem solid #dadada;
        padding-right: 4rem;
      }
      &-txt {
        flex-direction: row;
        font-size: 8rem;
      }
    }
    &__toggle {
      display: none;
    }
    //Navigation while viewing with bigger screens
    &__links {
      margin-top: 1rem;
      display: flex;
      justify-content: center;
      font-size: 1.8rem;
      font-weight: 700;
      &__scroll {
        margin-top: 0;
        padding-left: 3rem;
      }
      &-item {
        margin: 0 1.7rem;
        color: #333;
        font-size: 1.8rem;
        &:hover {
          color: $secondary__color;
        }
      }
    }
  }
}
</style>
