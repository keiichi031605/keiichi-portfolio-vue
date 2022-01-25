<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1 {
  font-weight: normal;
}

.clearfix::after {
  content: "";
  display: block;
  clear: both;
}

.el-form-item__label {
  color: black !important;
}

.pc {
  display: block;
}

.sp {
  display: none;
}

/* reset */
h1,h2,h3,h4,h5,h6, p {
  margin: 0;
}

a {
  text-decoration: none;
}

ul {
  margin: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 0;
}

li {
  list-style: none;
}

img {
  vertical-align: top;
}

@media screen and (max-width: 767px) {
  .pc {
    display: none;
  }

  .sp {
    display: block;
  }
}
</style>
