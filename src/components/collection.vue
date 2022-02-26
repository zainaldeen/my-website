<template>
  <div>
    <div class="collection pl-3 pr-3 pt-2 flex flex-col">
      <img id="collection-icon" src="../assets/collection.svg" alt="collection icon">
      <span>Collections</span>
    </div>
    <div class="text-xs reqs-for-mobile" v-for="request in requests" :key="request.name">
      <router-link class="flex gap-x-2 align-center p-1 " :to="`${request.path}`"><span>&gt;</span>{{ request.name }}</router-link><br>
    </div>
  </div>

</template>

<script>
export default {
  name: "collection-component",
  props: {
    requests:{
      path: String,
      name: String
    },
  }
}
</script>

<style scoped>
.collection {
  border-left: 1px solid #ff6c37;
  height: 60px;
  font-size: 12px;
  background-color: #3b3b3b;
}


#collection-icon {
  max-height: 40%;
}
</style>
