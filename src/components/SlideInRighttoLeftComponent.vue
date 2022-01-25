
<template>
  <div ref="slidein" :class="{slidein: visible, hidden: !visible}" class="">
    <slot v-show="visible"></slot>
  </div>
</template>

<script>
export default {
  name: 'SlideInLefttoRightComponent',
  data () {
    return {
      visible: false
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      if (!this.visible) {
        var top = this.$refs.slidein.getBoundingClientRect().top
        this.visible = (top + 100) < window.innerHeight
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hidden {
  opacity: 0;
}

.slidein {
  animation: slideIn 1s;
  opacity: 1;
}

@keyframes slideIn {
  0% {
    -webkit-transform: translate3d(200vh, 0, 0);
    transform: translate3d(200vh, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
</style>
