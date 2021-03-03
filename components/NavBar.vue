<template>
  <nav class="nav" :class="{ nav__scroll: scrollPosition > 50 }">
    <div
      class="nav__container"
      :class="{ nav__container__scroll: scrollPosition > 50 }"
    >
      <nuxt-link to="/">
        <div class="nav__logo">
          <img
            src="~/assets/img/wellrefresh-health-weightloss-logo.svg"
            class="nav__logo-img"
            :class="{ nav__logo__img__scroll: scrollPosition > 50 }"
          />
          <div
            class="nav__logo-txt"
            :class="{ nav__logo__txt__scroll: scrollPosition > 50 }"
          >
            <span>well</span>
            <span>refresh</span>
          </div>
        </div>
      </nuxt-link>
      <!-- Only visible when viewing with mobile device. -->
      <div class="nav__toggle" @click="menuOpened = !menuOpened">
        <div
          v-bind:class="{ nav__clicked: menuOpened }"
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
      class="nav__menu"
      v-show="menuOpened"
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
  padding: 0 5%;
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
    padding: 1.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  &__logo {
    display: flex;
    align-items: center;
    &-img {
      height: 3rem;
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
    background: rgba(255, 255, 255, 0.3);
    margin: 1.5rem 0;
    &-item {
      font-size: 1.4rem;
      text-transform: uppercase;
      font-weight: 700;
      padding: 1rem;
      color: $secondary__color;
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
    &__container {
      flex-direction: column;
      padding: 2.2rem 0;
      &__scroll {
        flex-direction: row;
        padding: 2rem 15%;
        justify-content: start;
      }
    }
    &__logo {
      &-img {
        height: 7rem;
      }
      &__img__scroll {
        height: 2.5rem;
      }
      &-txt {
        flex-direction: row;
        font-size: 8rem;
      }
      &__txt__scroll {
        font-size: 2.5rem;
        border-right: 0.1rem solid #dadada;
        padding-right: 2rem;
      }
    }
    &__toggle {
      display: none;
    }
    //Navigation while viewing with bigger screens
    &__links {
      margin-top: 3rem;
      display: flex;
      font-size: 1.8rem;
      font-weight: 700;
      &__scroll {
        margin-top: 0;
      }
      &-item {
        margin: 0 1.7rem;
        color: #333;
        &:hover {
          color: $primary__color;
        }
      }
    }
  }
}
</style>
