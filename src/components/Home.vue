<template>
  <div class="home">
    <transition name="slide" appear>
      <div id="nav_sns" v-show="show">
        <ul class="m-0 p-0" style="display: flex; justify-content: space-evenly;">
          <li>
            <a href="https://www.linkedin.com/in/keiichi-katsuno/" target="_blank"><i class="fab fa-linkedin fa-lg"></i></a>
          </li>
          <li>
            <a href="https://github.com/keiichi031605" target="_blank"><i class="fab fa-github fa-lg"></i></a>
          </li>
          <li>
            <a href="#" target="_blank"><i class="far fa-file fa-lg"></i></a>
          </li>
        </ul>
      </div>
    </transition>
    <Splash />
    <Profile />
    <Skill />
    <Contact />
  </div>
</template>

<script>
// @ is an alias to /src
import Splash from '@/components/Splash.vue'
import Profile from '@/components/Profile.vue'
import Skill from '@/components/Skill.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'Home',
  components: {
    Splash,
    Profile,
    Skill,
    Contact
  },
  data () {
    return {
      show: true,
      publicPath: process.env.BASE_URL
    }
  }
}
</script>

<style scoped>
#nav_sns {
  width: 200px;
  padding: 4px 4px 4px 4px;
  position: fixed;
  right: 60px;
  bottom: 60px;
  z-index: 9999;
  background-color: rgb(240, 240, 240);
  border-radius: 7px;
}

li {
  margin: 12px;
}

#nav_sns a {
  display: block;
  color: #000;
  font-size: 24px;
}

#nav_sns a:hover {
  -webkit-transform: scale(1.2,1.2);
  -moz-transform: scale(1.2,1.2);
  -o-transform: scale(1.2,1.2);
  -ms-transform: scale(1.2,1.2);
  transform: scale(1.2,1.2);
  transition: transform 0.1s;
  opacity: 0.5;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 2s;
}

.slide-enter, .slide-leave-to {
  -webkit-transform: translate3d(0, -200vh, 0);
  transform: translate3d(0, -200vh, 0);
}

.slide-enter-to, .slide-leave {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

@media screen and (max-width: 767px) {
  #nav_sns {
    width: 200px;
    padding: 4px 4px 4px 4px;
    position: fixed;
    right: 15px;
    bottom: 25px;
    z-index: 9999;
    background-color: rgb(240, 240, 240);
    border-radius: 7px;
  }
}
</style>
