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

  // head() {
  //   return {
  //     meta: [
  //       // Twitter
  //       // Test on: https://cards-dev.twitter.com/validator
  //       {
  //         hid: 'twitter:card',
  //         name: 'twitter:card',
  //         content: 'summary_large_image'
  //       },
  //       { hid: 'twitter:site', name: 'twitter:site', content: '@wellrefresh' },
  //       {
  //         hid: 'twitter:url',
  //         name: 'twitter:url',
  //         content: 'https://www.wellrefresh.com'
  //       },
  //       {
  //         hid: 'twitter:title',
  //         name: 'twitter:title',
  //         content: 'Wellrefresh - Diet, Weight Loss, Fitness'
  //       },
  //       {
  //         hid: 'twitter:description',
  //         name: 'twitter:description',
  //         content:
  //           'A Health and Wellness website aiming to help people with dieting, weight loss, and fitness.'
  //       },
  //       {
  //         hid: 'twitter:image',
  //         name: 'twitter:image',
  //         content: '/twitter-seo-card.png'
  //       }
  //     ]
  //   }
  // }
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
