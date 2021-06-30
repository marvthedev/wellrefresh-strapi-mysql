<template>
  <div class="layout">
    <div class="header-spacing">
      <NavBar />
    </div>
    <Nuxt />
    <div class="footer-spacing"><Foot /></div>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'
import Foot from '~/components/Foot'

export default {
  components: {
    NavBar,
    Foot
  }
}
</script>

<style lang="scss">
//Used to keep footer at the bottom
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
  }
}

.header-spacing {
  margin-bottom: 25%;
  @media (min-width: 1248px) {
    margin-bottom: 8%;
  }
}

.footer-spacing {
  margin-top: 14%;
  @media (min-width: 1248px) {
    margin-top: 6%;
  }
}

html {
  font-family: 'PT Serif', serif;
  font-size: 62.5%;
  font-weight: 300;
  color: #333;
  word-spacing: 0;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: none;
}

/* Typography */
a {
  text-decoration: none;
  color: #333;
}

p {
  line-height: 1.5;
}

h1,
h2,
h3 {
  font-family: 'Lato', sans-serif;
  font-weight: 900;
}

h2 {
  font-size: 2.4rem;
}

/* Forms */
input,
textarea {
  font-family: inherit;
  font-size: 1.4rem;

  /* Remove unwanted thick border-top on iOS devices */
  -webkit-appearance: none;
}

textarea {
  resize: none;
}

// Article grid cards styling
.card {
  display: flex;
  flex-direction: column;
  border: 1px solid #e7ebfb;
  border-top: 0;
  border-radius: 1rem;
  box-shadow: 0px 1.6rem 2rem -2.2rem rgba(0, 0, 0, 0.48);
  &__txt-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1.4rem;
  }
  &__img {
    width: 100%;
    height: auto;
    border-radius: 1rem 1rem 0 0;
  }
  &__category-container {
    display: flex;
  }

  &__category {
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 1rem;
    background: $secondary__color;
    padding: 0.24rem 0.4rem;
    border-radius: 0.14rem;
    color: white;
    text-transform: uppercase;
  }
  &__title {
    margin-top: 0.8rem;
    font-size: 2rem;
  }
}

@media (min-width: 1248px) {
  .card {
    &:hover {
      box-shadow: 0px 1.6rem 2rem -1.5rem rgba(0, 0, 0, 0.48);
      transform: translateY(-1rem);
    }
    &__title {
      font-size: 2rem;
    }
  }
}
</style>
