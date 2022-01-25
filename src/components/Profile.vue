<template>
  <div id="profile">
    <transition name="slide" appear>
      <h1 class="title tag">Profile</h1>
    </transition>
    <div class="pc">
      <FadeInComponent>
        <div class="profile-wrapper">
          <div class="profile-content-wrapper clearfix">
            <div class="content mt-5">
              <h3>Hey! My name is Keiichi.</h3>
              <br/>
              <h3>I am a RoR developer based in Melbourne. Currently working at Stack Team App as a full-stack software developer. I'm enjoying building my skill set in back-end and front-end web application development. Always coming across the joy of the programming!</h3>
            </div>
            <div class="profile-image">
              <img src="../assets/keiichi.jpeg" alt="profile">
            </div>
          </div>
        </div>
      </FadeInComponent>
    </div>

    <div class="sp">
      <FadeInComponent>
        <div class="profile-wrapper">
          <table class="profile-content-wrapper clearfix">
            <tr>
              <th class="profile-image">
                <img src="../assets/keiichi.jpeg" alt="profile">
              </th>
              <td class="content">
              <h3>Hey! My name is Keiichi.</h3>
              </td>
            </tr>
          </table>
            <h3>I am a RoR developer based in Melbourne. Currently working at Stack Team App as a full-stack software developer. I'm enjoying building my skill set in back-end and front-end web application development. Always coming across the joy of the programming!</h3>
        </div>
      </FadeInComponent>
    </div>
  </div>
</template>

<script>
import FadeInComponent from '@/components/FadeInComponent.vue'

export default {
  name: 'Profile',
  components: {
    FadeInComponent
  }
}
</script>

<style scoped>
#profile {
  background-color: rgb(240, 240, 240);
  height: calc(100vh - 62px);
  width: 100%;
  padding: 0px 150px;
  box-sizing: border-box;
}

.title{
  text-align: left;
  margin-bottom: 40px;
  color: rgb(60, 146, 146);
  font-weight: 600;
  letter-spacing: 0.2em;
}

.tag {
  width: 25%;
  margin: 0 auto;
  padding: 15px;
  text-align: center;
  line-height: 1;
  background: rgb(240, 240, 240);
  border-radius: 10px 10px 0 0;
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
}

.profile-wrapper {
  width: 100%;
  height: calc(100vh - 62px);
  display: flex;
  align-items: center;
  transform: translate3d(0, -62px, 0);
}

.profile-content-wrapper {
  width: 100%;
  height: 300px;
}

.profile-content-wrapper .content {
  width: 70%;
  height: 200px;
  float: right;
  text-align: left;
  line-height: 1.6;
}

.profile-content-wrapper .profile-image {
  width: 25%;
  height: 200px;
  float: left;
}

.profile-content-wrapper .profile-image img {
  width: 100%;
  border-radius: 100%;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 1s;
}

.slide-enter, .slide-leave-to {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.slide-enter-to, .slide-leave {
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
}

@media screen and (max-width: 767px) {
  #profile {
    padding: 0px 10px;
    box-sizing: border-box;
  }

  .tag {
    width: 50%;
    margin: 0 auto;
    padding: 15px;
    text-align: center;
    line-height: 1;
    background: #fff;
    border-radius: 10px 10px 0 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  #profile {
    height: initial;
    margin-bottom: 20px;
  }

  .profile-wrapper {
    width: 100%;
    height: initial;
    display: block;
    transform: translate3d(0, -62px, 0);
  }

  .profile-wrapper p {
    line-height: 1.6;
  }

  .profile-content-wrapper {
    width: 100%;
    height: initial;
    margin: 0 auto;
    padding: 30px;
    box-sizing: border-box;  }

  .profile-content-wrapper .content {
    width: 55%;
    height: initial;
    float: none;
    text-align: center;
    line-height: 1.6;
    padding-top: 10px;
  }

  .profile-content-wrapper .profile-image {
    width: 40%;
    height: initial;
    float: none;
  }

}
</style>
