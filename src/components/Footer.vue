<template>
  <div id="footer">
    <div class="navbar">
      <nav>
        <div class="container">
        </div>
      </nav>
    </div>
    <div>
      <small>Copyright &copy; 2022 Keiichi Katsuno, All rights reserved.</small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
#footer {
  background-color: rgb(60, 146, 146);
  height: 45px;
  color: #fff;
}

#footer .navbar {
  display: block;
  overflow: hidden;
}

#footer nav {
  width: 100%;
  height: 100%;
}

#footer nav .container {
  width: 80%;
  height: 100%;
  margin: 0 auto;
}

#footer nav ul {
  height: 100%;
  list-style: none;
}

#footer nav ul li {
  width: 100px;
  height: 100%;
  display: inline-block;
  line-height: 60px;
  /* float: left; */
}
#footer nav ul li:hover {
  background-color: rgba(255,255,255,0.3);
  transition: background-color .3s;
}

#footer a {
  display: block;
  cursor: pointer;
  color: #fff;
}

@media screen and (max-width:767px) {
  #footer .navbar {
    display: block;
    overflow: hidden;
    height: 45px;
    padding: 10px 0;
    transition: padding 0.5s ease, background 0.5s ease, box-shadow 0.5s ease, border 0.5s ease;
  }

  #footer nav .container {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }

  #footer nav ul {
    float: none;
    width: 310px;
    margin: 0 auto;
  }

  #footer nav ul li {
    width: 75px;
    text-align: center;
    float: left;
    height: 45px;
    line-height: 45px;
  }
}
</style>
