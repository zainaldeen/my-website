<template>
  <div>
    <div id="my-name" class="max-h-10 mt-2 font-bold pl-4 pb-1 flex items-center gap-x-4">
      <img id="my-photo" src="../assets/my-logo.png" alt="Me">
      <p> Zain Aldeen Fayod<br> <sub>Software Engineer and Full Stack Developer</sub></p>
    </div>
    <div class="flex gap-x-.5">
      <CollectionComponent/>
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
#my-name {
  border-bottom: 1px solid #747474;
}
#my-photo {
  width: 30px;
  height: 30px;
  border: 1px solid white;
  border-radius: 20px;
}
sub {
  font-size: 10px;
}
</style>
