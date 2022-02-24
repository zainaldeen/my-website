<template>
  <div>
    <div class="max-h-12 min-h-12 font-bold p-6 gap-x-4 head-main flex items-center">
      <div class="flex justify-between w-full">
        <div class="flex gap-x-2">
          <h4>GET</h4>
          <span class="text-white">Success</span>
        </div>
        <div><a href="mailto:zainaldeenfayod@gmail.com?subject=Ask%20For%20Services"> Just Make Your Request ;) </a></div>
      </div>
    </div>
    <div v-if="is_main_path <= 2">
      <div class="flex justify-center items-center mt-20">
        <img id="main-image" src="../assets/zainavatar10.png">
      </div><br>
      <div>
        <h1 style="color:#ff6c37 "> IF&ensp;</h1>
        <h1 class="text-white">YOU WANT TO KNOW MORE, JUST SELECT ONE OF THE</h1>
        <h1 style="color:#ff6c37 ">&ensp;COLLECTIONS</h1>
      </div>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Home-component',
  data () {
    return {
      msg: 'Welcome to My Website'
    }
  },
  computed: {
    is_main_path() {
      let path = this.$route.path;
      return path.split('/').length;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
a:hover {
  color: #42ff83;
}

.head-main {
  border-left:  1px solid #747474;
  border-right: 1px solid #747474;
  border-bottom:  1px solid #747474;
}

h4 {
  color: #ff6c37;
}

span {
  font-size: 12px;
}

#main-image {
  height: 200px;
  width: 200px;
  border: 1px solid #ff6c37;
  border-radius: 100px;
}
</style>
