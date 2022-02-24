<template>
  <div>

  </div>

</template>

<script>
export default {
  name: "ExperiencesMe",
  data(){
    return {
      companies: {
        'nestech': [

        ],
        'badinan': {

        },
        'tasqment': {

        },
        'unifi': {

        },
        'techstream': {

        }
      }
    }
  },
  computed: {
    company() {
      return this.companies[this.$route.params.company];
    }
  }
}
</script>

<style scoped>

</style>
