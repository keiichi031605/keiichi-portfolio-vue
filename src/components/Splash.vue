<template>
  <div id="splash">
    <div id="parallax" class="splash">
      <div data-depth="0.2" class="ui page grid">
        <h1 class="title text">
          KEIICHI KATSUNO<br/>
        </h1>
        <br>
        <span class="text">ROR DEVELOPER</span>
      </div>
    </div>
    <transition name="slide" appear>
      <a href="#profile" class="scroll-icon right-to-left" v-show="isScreentIconVisible" v-smooth-scroll="{ duration: 500 }">
        <span>SCROLL DOWN →</span>
      </a>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Splash',
  data () {
    return {
      scrollY: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  computed: {
    isScreentIconVisible () {
      if (this.scrollY < 100) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    onScroll () {
      this.scrollY = window.pageYOffset
    }
  }
}
</script>

<style scoped>
.splash {
  position: relative;
  overflow: hidden;
  text-align: center;
  padding: 0em;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0px;
  border-bottom: none;
  background-color: rgb(60, 146, 146);
  background-image: radial-gradient(farthest-corner, rgba(255, 255, 255, 0.4), rgba(10, 73, 100, 0.95));
  height: 100vh;
  min-height: 500px;
}

.text {
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  display: inline;
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-size: 18px;
  font-weight: normal;
  height: auto;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px;
  text-transform: none;
  width: auto;
  z-index: 10000;
}

h1.title {
  font-size: 3rem;
}

a.text {
  color: #fff;
  font-weight: bold;
}

a.scroll-icon {
  position: fixed;
  left: 35px;
  bottom: 30px;
  color: #fff;
  font-size: 18px;
  letter-spacing: 2px;
}

a.scroll-icon:hover {
  -webkit-transform: scale(1.07,1.07);
  -moz-transform: scale(1.07,1.07);
  -o-transform: scale(1.07,1.07);
  -ms-transform: scale(1.07,1.07);
  transform: scale(1.07,1.07);
  transition: transform 0.1s;
  opacity: 0.8;
}

a img {
  width: 60px;
}

a img:hover {
  -webkit-transform: scale(1.07,1.07);
  -moz-transform: scale(1.07,1.07);
  -o-transform: scale(1.07,1.07);
  -ms-transform: scale(1.07,1.07);
  transform: scale(1.07,1.07);
  transition: transform 0.1s;
}

.splash .grid {
  margin-top: 250px;
}

.splash {
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -ms-transition: background-color 3s ease-in-out 2s;
  -moz-transition: background-color 3s ease-in-out 2s;
  -webkit-transition: background-color 3s ease-in-out 2s;
  transition: background-color 3s ease-in-out 2s;
  -webkit-perspective: 1000px;
  -moz-perspective: 1000px;
  -o-perspective: 1000px;
  -ms-perspective: 1000px;
  perspective: 1000px;
}

.right-to-left {
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 1.5s;
}

.slide-enter, .slide-leave-to {
  -webkit-transform: translate3d(-100vh, 0, 0);
  transform: translate3d(-100vh, 0, 0);
}

.slide-enter-to, .slide-leave {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

@media screen and (max-width: 767px) {
  a.scroll-icon {
    position: fixed;
    left: 15px;
    bottom: 25px;
    color: #fff;
    font-size: 18px;
    letter-spacing: 2px;
  }
  h1.title {
  font-size: 2rem;
  }
}
</style>
