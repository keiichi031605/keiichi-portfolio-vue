<template>
  <div id="contact">
    <div>
      <section>
        <FadeInComponent>
          <h2 class="title">CONTACT</h2>
        </FadeInComponent>
        <FadeInComponent>
          <div class="card p-5">
            <div>
              <p>
                DM me via Linkedin if you have any questions.
              </p>
              <a href="https://www.linkedin.com/in/keiichi-katsuno/" class="btn text-white mt-4 linkedin">LinkedIn</a>
            </div>
          </div>
        </FadeInComponent>
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

<style>
.linkedin {
  background-color: rgba(65, 184, 131);
}

#contact {
  background-color: #F3F3F3;
  width: 100%;
  padding: 100px 150px;
  box-sizing: border-box;
  position: relative;
  z-index: 0;
  line-height: 1.6;
}

a:hover {
  opacity: 0.7;
}

.title {
  text-align: left;
  margin-bottom: 40px;
  color: rgb(60, 146, 146);
  font-weight: 600;
  letter-spacing: 0.2em;
}

button.submit {
  width: 100%;
}

@media screen and (max-width: 767px) {
  #contact {
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
