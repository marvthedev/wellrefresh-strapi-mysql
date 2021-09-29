<template>
  <footer class="footer">
    <div class="footer__logo-container">
      <img
        src="~/assets/img/wellrefresh-logo-txt.svg"
        alt="Wellrefresh"
        class="footer__logo"
      />
    </div>
    <div class="footer-mid">
      <div class="footer__nav">
        <ul class="footer__nav-row-1">
          <li>About Us</li>
          <li>Advertise</li>
          <li>Write For Us</li>
          <li>Contact</li>
        </ul>
        <ul class="footer__nav-row-2">
          <nuxt-link to="/weight-loss"><li>Weight Loss</li></nuxt-link>
          <nuxt-link to="/fitness"><li>Fitness</li></nuxt-link>
        </ul>
      </div>
    </div>
    <div class="footer-copyright">Ⓒ 2021 Wellrefresh - All rights reserved</div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  position: static;
  bottom: 0;
  left: 0;
  padding: 0 6%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #26262a;
  color: #787878;
  font-size: 1.4rem;
  font-weight: 900;
  font-family: 'Lato', sans-serif;
  & a {
    color: #787878;
    &:hover {
      color: $secondary__color;
    }
  }
  &__logo-container {
    display: flex;
    justify-content: center;
    width: 100%;
    border-bottom: dotted 0.1rem #646464;
    padding: 1.6rem 0;
  }
  &__logo {
    height: 2rem;
    width: auto;
  }
  &-mid {
    width: 100%;
    border-bottom: dotted 0.1rem #646464;
    padding: 1.6rem 0;
  }
  &__nav {
    display: flex;
    justify-content: center;
    & ul {
      list-style: none;
      margin: 0 2rem;
      & li {
        padding: 0.5rem;
      }
    }
  }
  &-copyright {
    display: flex;
    justify-content: center;
    padding: 1.6rem 0;
    font-size: 1.2rem;
  }
}

@media (min-width: 1248px) {
  .footer {
    padding: 0 15%;
    &__logo {
      height: 2.4rem;
    }
  }
}
</style>
