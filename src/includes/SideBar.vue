<template>
  <div>
    <div id="my-name" class="mt-1 font-bold pl-4 pb-2 flex justify-center gap-x-4 title-for-web">
      <img id="my-photo" src="../assets/my-logo.png" alt="Me">
      <p> Zain Aldeen Fayod<br> <sub>Software Engineer and Full Stack Developer</sub></p>
    </div>
    <div class="flex gap-x-.5">
      <CollectionComponent :requests="requests"/>
      <RequestsComponent :requests="requests"/>
    </div>
  </div>
</template>

<script>
import CollectionComponent from "@/components/collection";
import RequestsComponent from "@/components/requests";
import reqs  from '@/utils/utils';
export default {
  name: 'SideBar-component',
  components: {RequestsComponent, CollectionComponent},
  props: {
    activeRoute: String,
  },
  computed : {
    requests() {

      if ( this.$route.path === '/') return '/';
      let path = this.$route.path.split('/')[1];

      return reqs[path];
    }
  }
}
</script>

<style scoped>
div {
  color: white;
}
sub {
  font-size: 10px;
}
</style>
