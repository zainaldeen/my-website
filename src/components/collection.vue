<template>
  <div class="collection pl-3 pr-3 pt-2 flex flex-col">
    <img id="collection-icon" src="../assets/collection.svg" alt="collection icon">
    <span>Collections</span>
  </div>
</template>

<script>
export default {
  name: "collection-component"
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
