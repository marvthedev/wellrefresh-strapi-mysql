<template>
  <div>
    <NavBar />
    <Nuxt />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'

export default {
  components: {
    NavBar
  }
}
</script>

<style>
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
}

p {
  line-height: 150%;
}

h1,
h2,
h3 {
  font-family: 'Lato', sans-serif;
  font-weight: 900;
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
</style>
