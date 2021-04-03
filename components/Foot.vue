<template>
  <footer class="footer">
    <img
      src="~/assets/img/wellrefresh-logo-txt.svg"
      alt="Wellrefresh"
      class="footer__logo"
    />
    <div class="footer__nav">
      <ul class="footer__nav-row-1">
        <li>About Us</li>
        <li>Advertise</li>
        <li>Write For Us</li>
        <li>Contact</li>
      </ul>
      <ul class="footer__nav-row-1">
        <li>Weight Loss</li>
        <li>Fitness</li>
        <li>Build Muscle</li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding: 0 6%;
  display: flex;
  flex-direction: column;
  background: #26262a;
  &__logo {
    margin-top: 2rem;
    height: auto;
    width: 15rem;
  }
  &__nav {
    display: grid;
    margin-top: 3rem;
    color: #787878;
    font-size: 1.4rem;
    font-weight: 900;
    font-family: 'Lato', sans-serif;
    & ul {
      list-style: none;
      & li {
        padding: 0.5rem;
      }
    }
  }
}

@media (min-width: 1248px) {
  .footer {
    padding: 2rem 20%;
    &__logo {
      width: 18rem;
    }
    &__nav {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
