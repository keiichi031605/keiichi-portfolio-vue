<template>
  <div id="projects">
    <div>
      <section>
        <h1 class="title">Projects</h1>
          <div class="card">
            <div>
              <a href="" target="_brank">Sorry. I am building the project page at the moment.
                <img src="" alt="">
              </a>
            </div>
          </div>
      </section>
    </div>
  </div>
</template>

<script>
import FadeInComponent from '@/components/FadeInComponent.vue'

export default {
  name: 'Experience',
  components: {
    FadeInComponent
  }
}
</script>

<style scoped>

#projects {
  background-color: rgba(176, 176, 176, 0.9);
  width: 100%;
  padding: 100px 150px;
  box-sizing: border-box;
  position: relative;
  z-index: 0;
  line-height: 1.6;
  height: 1200px;
}

.card {
  padding: 36px;
}

a:hover {
  opacity: 0.7;
}

.bg-blar:before{
  content: '';
  background: inherit;
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  z-index: -1;
}

.title {
  text-align: left;
  margin-bottom: 40px;
  color: rgb(60, 146, 146);
  font-weight: 600;
  letter-spacing: 0.2em;
}

.form {
  width: 75%;
  margin: 0 auto;
}

button.submit {
  width: 100%;
}

@media screen and (max-width: 767px) {
  #projects {
    padding: 20px 10px;
    box-sizing: border-box;
    line-height: 1.6;
  }

  .title{
    text-align: center;
    margin-bottom: 0px;
  }
}
</style>
