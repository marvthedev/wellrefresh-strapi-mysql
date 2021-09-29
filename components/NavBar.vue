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
      <div class="desk-nav">
        <div
          v-for="link in navBarLinks"
          :key="link.url"
          class="desk-nav__links"
          :class="{ desknav__scroll: scrollPosition > 50 }"
        >
          <nuxt-link :to="link.url">{{ link.title }}</nuxt-link>
        </div>
      </div>
    </div>

    <div
      class="mobile-nav"
      :class="{ mobile__nav__scroll: scrollPosition > 50 }"
    >
      <nuxt-link
        v-for="link in navBarLinks"
        v-show="menuOpened"
        :key="link.url"
        :to="link.url"
        div
        class="mobile-nav__link"
        @click="menuOpened = !menuOpened"
      >
        <div @click="menuOpened = !menuOpened">{{ link.title }}</div>
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuOpened: false,
      scrollPosition: null,
      navBarLinks: [
        { title: 'Home', url: '/' },
        { title: 'Articles', url: '/articles' },
        { title: 'Weight Loss', url: '/weight-loss' },
        { title: 'Fitness', url: '/fitness' }
      ]
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
  &__container {
    padding: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    &__scroll {
      background: rgba(255, 255, 255, 0.97);
      box-shadow: 0 3px 4px rgba(0, 0, 0, 0.08);
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
    background: $secondary__color;
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
    bottom: -5rem;
    &-item {
      font-size: 1.4rem;
      text-transform: uppercase;
      font-weight: 700;
      padding: 1rem;
      color: #333;

      &-hover {
        background: $primary__color;
        color: white;
      }
    }
  }
}

.mobile-nav {
  background: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  position: relative;
  left: 0;
  bottom: 0;
  &__link {
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

.mobile__nav__scroll {
  background: rgba(255, 255, 255, 0.97);
}

.desk-nav {
  display: none;
}

//Desktop View
@media (min-width: 1248px) {
  .nav {
    padding: 0;
    &__container {
      flex-direction: column;
      justify-content: center;
      box-shadow: 0 4px 3px -3px rgba(0, 0, 0, 0.08);
      &__scroll {
        flex-direction: row;
        padding: 1.6rem 8%;
        justify-content: center;
      }
    }
    &__logo {
      &-img {
        height: 2.4rem;
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
  }
  .desk-nav {
    display: flex;
    &__links {
      margin: 2rem 0 0 2rem;
      display: grid;
      justify-content: center;
      font-size: 1.8rem;
      font-weight: 700;

      & a:hover {
        color: $secondary__color;
      }
    }
  }
  &.desknav__scroll {
    margin-top: 0;
  }
}
</style>
