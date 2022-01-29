<template>
  <div class="header-wrap">
    <header id="header">
      <div class="navbar" v-bind:class="{light: isScreentTop}">
        <nav>
          <div class="container">
            <ul class="clearfix">
              <div>
                <li><a href="#profile" v-smooth-scroll="{ duration: 500, offset: -123 }">PROFILE</a></li>
              </div>
              <div>
                <li><a href="#skill" v-smooth-scroll="{ duration: 500 }">SKILL SET</a></li>
              </div>
              <div>
                <li><a href="#experience" v-smooth-scroll="{ duration: 500 }">EXPERIENCE</a></li>
              </div>
              <div>
                <li><a href="#projects" v-smooth-scroll="{ duration: 500 }">PROJECT</a></li>
              </div>
            </ul>
          </div>
        </nav>
      </div>
      <div class="header-sp">
        <div class="header-menu">
          <div class="header-menu-line" @click="naviOpen" :class="{'is-active': active}">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
    <!-- <transition name="navi">
      <nav class="navi" v-show="navi">
        <ul class="navi-wrap">
          <li><a href="#">Profile</a></li>
          <li><a href="#">Skill</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Experience</a></li>
        </ul>
      </nav>
    </transition> -->
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      active: false,
      navi: false,
      scrollY: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  computed: {
    isScreentTop () {
      if (this.scrollY > 0) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    onScroll () {
      this.scrollY = window.pageYOffset
    },
    naviOpen: function () {
      this.active = !this.active
      this.navi = !this.navi
    }
  }
}
</script>

<style scoped>
#header {
  position: fixed;
  width: 100%;
  z-index: 100000;
}

.navbar {
  display: block;
  overflow: hidden;
  height: 60px;
  padding: 15px 0;
  transition: padding 0.5s ease, background 0.5s ease, box-shadow 0.5s ease, border 0.5s ease;
}

.navbar nav {
  width: 100%;
}

.navbar .container {
  width: 80%;
  height: 100%;
  margin: 0 auto;
}

.navbar ul {
  list-style: none;
  float: right;
}

.navbar li {
  width: 100px;
  text-align: center;
  float: left;
  height: 60px;
  line-height: 60px;
}

.navbar a {
  display: block;
  color: #fff;
  width: 100%;
}

.navbar ul li a:hover {
  background-color: rgba(255,255,255,0.2);
  transition: background-color .3s;
}

.light {
  padding: 0;
  background-color: #fff;
  border-bottom: solid 1px #dddddd;
  box-shadow: 0px 2px 3px rgb(0 0 0 / 4%);
  transition: padding 0.5s ease, background 0.5s ease, box-shadow 0.5s ease, border 0.5s ease;
}

.light ul li a {
  color: rgba(8, 33, 31, 0.8);
}

.light ul li a:hover {
  background-color: rgb(60, 146, 146);
  color: #fff;
  transition: background-color .3s;
}

.header-sp{
  display: none;
}

@media screen and (max-width:767px) {
  .navbar {
    display: block;
    overflow: hidden;
    height: 45px;
    padding: 10px 0;
    transition: padding 0.5s ease, background 0.5s ease, box-shadow 0.5s ease, border 0.5s ease;
  }

  .navbar nav {
    width: 100%;
  }

  .navbar .container {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }

  .navbar ul {
    float: none;
    width: 310px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
  }

  .navbar li {
    width: 75px;
    text-align: center;
    float: left;
    height: 45px;
    line-height: 45px;
    font-size: 12px;
  }

  .light {
    padding: 0;
    background-color: #fff;
    border-bottom: solid 1px #dddddd;
    box-shadow: 0px 2px 3px rgb(0 0 0 / 4%);
    transition: padding 0.5s ease, background 0.5s ease, box-shadow 0.5s ease, border 0.5s ease;
  }
}
</style>
