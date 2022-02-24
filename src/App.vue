<template>
  <div id="app">
    <nav class="flex justify-between">
      <div class="flex gap-x-4 nav">
        <img class="inline mb-2" id="my-ava" :src="require(`./assets/${urls[path]}.png`)" alt="my pic">
        <router-link to="/home">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/experiences">Experiences</router-link> |
        <router-link to="/education">Education</router-link> |
        <router-link to="/skills">Skills</router-link> |
        <router-link to="/achievements">Achievements</router-link>|
        <router-link to="/contacts">Contacts</router-link>
      </div>
      <div class="mr-10">
        <img class="inline mr-1" id="my-pic" src="./assets/me.jpg" alt="my pic">
        <a href="./assets/my-resume.pdf" download="Zain Aldeen Fayod CV"> Download resume</a>
      </div>

    </nav>
    <main>
      <aside>
        <SideBarComponent :active-route="`${$route.path}`"/>
      </aside>
      <router-view class="content"/>
    </main>

  </div>
</template>

<script>
import SideBarComponent from "@/includes/SideBar";
export default {
  components: {SideBarComponent},
  data(){
    return {
      urls : {
        'home': 'zainavatar1',
        'about': 'zainavatar2',
        'experiences': 'zainavatar3',
        'education': 'zainavatar4',
        'skills': 'zainavatar5',
        'achievements': 'zainavatar6',
        'contacts': 'zainavatar7',
      }
    }
  },
  computed: {
    path() {
      if ( this.$route.path === '/') return '/';
      return  this.$route.path.split('/')[1];
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 14px;
}

main {
  height: calc(100vh - 45px);
  display: flex;

}
aside {
  background-color: #292929;
  height: 100%;
  width: 23em;
}
nav {
  height: 45px;
  background-color: #212121;
  text-align: left;
  padding: 10px 0 0 10px;
  border-bottom: 1px solid #747474;
  border-left: #ff6c37 5px solid;

}
#my-pic {
  width: 30px;
  height: 30px;
  border-radius: 20px;
  display: inline;
}

#my-ava {
  width: 30px;
}


nav a {
  font-weight: bold;
  color: #a6a6a6;
}

nav a.router-link-active {
  color: #ff6c37;
}
nav a:hover {
  color: #ff6c37;
}

.content {
  background-color: #212121;
  width: calc(100vw - 23em);
}
</style>
