<template>
  <div class="requests pl-2 pt-2">
    <div class="flex">
      <img src="../assets/plus.svg" alt="plus">
      <input type="text" disabled placeholder="             Some Info" class="text-" style="opacity: 0.4; width: 80%">
    </div>
    <div class="mt-2 pl-1" v-for="request in requests" :key="request.name">
       <router-link class="flex gap-x-3 " :to="`${request.path}`"><span>&gt;</span>{{ request.name }}</router-link><br>
    </div>
  </div>
</template>

<script>
export default {
  name: "requests-component",
  props: {
    requests:{
      path: String,
      name: String
    },
  }
}
</script>

<style scoped>
.requests {
  border-left: 1px solid #747474;
  height: calc(100vh - 105px);
}

::placeholder {
  color: white ;
  opacity: 0.5; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #ff6c37 ;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: #ff6c37 ;
}
</style>
