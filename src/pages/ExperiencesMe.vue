<template :key="comp">
  <div>
    <div class="flex pl-5 pt-5 text-grey text-xs sm:text-base">GET: ZainAldeenFayod / Experiences / {{ comp }}</div>
    <div class="flex pl-5 pt-5">
      <h1 style="color: #ff6c37; font-size: 2em"> {{ comp }}</h1>
    </div>
    <div class="max-w-6 pl-5 text-white text-left">
      <h1 class="text-lg sm:text-5xl">{</h1>
    </div>
    <div class="max-w-6 pl-12 mb-2 text-white text-left pr-2 text-sm sm:text-base">
      "Title":&nbsp;&nbsp; "{{ company.Title }}"&nbsp;,
    </div>
    <div class="max-w-6 pl-12 mb-2 text-white text-left pr-2  text-sm sm:text-base">
      "Location":  "{{ company.Location}}" &nbsp;,
    </div>
    <div  class="max-w-6 pl-12 mb-2 text-white text-left pr-2 text-sm sm:text-base">
      "From": &nbsp;&nbsp; "{{ company.Start_Date}}"&nbsp;,
    </div>
    <div class="max-w-6 pl-12 mb-2 text-white text-left pr-2 text-sm sm:text-base">
      "Until": &nbsp;&nbsp; "{{ company.End_Date}}" &nbsp;,
    </div>
    <div class="max-w-6 pl-12 mb-2 text-white text-left pr-2 text-sm sm:text-base" >
      "Description": &nbsp;&nbsp; " <div v-html="company.Description"> &nbsp;</div>
    </div>

    <div class="max-w-6 pl-5 text-white text-left">
      <h1  class="text-lg sm:text-5xl">}</h1>
    </div>
  </div>

</template>

<script>
export default {
  name: "ExperiencesMe",
  data(){
    return {
      comp: String,
      companies: {
        'nestech': {
          'Title': "Software Engineer and Full Stack Web Developer",
          'Location': " Remotely",
          'Start_Date': "August 2021",
          'End_Date': "Now",
          'Description': "<span>● Planned, developed, tested, deployed, and maintained web applications.<br>" +
              "● Analyzed systems and databases for more than 7 projects.<br>" +
              "● Managed and led back-end developers team.<br>" +
              "● Solved ambiguities and conflicts through the development process.  \",</span>"
        },
        'badinan': {
          'Title': "Software Engineer and Full Stack Web Developer",
          'Location': " Remotely",
          'Start_Date': "August 2020",
          'End_Date': "August 2021",
          'Description': "● Planned, designed, tested, and implemented software systems.<br>" +
              "● Supervised and managed teams of part-time and full-time employees.<br>" +
              "● Worked on high quality code in different projects like Doctors Management<br>" +
              "System, POS and Student Mark sheet System.<br>" +
              "● Put plans to keep work on time and follow the deadlines.<br>" +
              "● Analyzed Projects and followed Agile Methodologies to organize team and tasks.  \","
        },
        'tasqment': {
          'Title': "Software Engineer and Project Manager",
          'Location': " Latakia, Syria",
          'Start_Date': "Jun 2021",
          'End_Date': "Now",
          'Description': "● Worked on Project's and database's analysis.<br>" +
              "● Collected data from another systems to facilitate the development process for company's systems <br>" +
              "● Managed team and tasks with Agile methodologies and kept an eye on deadlines <br>" +
              "● Initiated, Planned, Worked on and Maintained company's projects.<br>" +
              "● Built a comfortable atmosphere between team members to increase the productivity of them.  \","

        },
        'unifi': {
          'Title': "Full Stack Web Developer",
          'Location': "Remotely",
          'Start_Date': "April 2019",
          'End_Date': "August 2020",
          'Description': "● Worked on different projects using Laravel and Vuejs Frameworks.<br>" +
              "● Maintained previous projects and gave solutions for it's bugs and problems.  \","

        },
        'techstream': {
          'Title': "Junior Full Stack Developer",
          'Location': "Remotely",
          'Start_Date': "September 2018",
          'End_Date': "April 2019",
          'Description': "● Worked as a fresh web developer using LAMP stack with Vuejs and Laravel frameworks <br>" +
              "● Worked on ERP system called Masterlinxx from scratch and developed many features in this system included " +
              "<br>costumers management, employees management, warehouses management , RFQ orders and purchase order management  \","
        }
      }
    }
  },
  created() {
    this.comp = this.$route.params.company.toUpperCase();
  },
  computed: {
    company() {
      let comp = this.$route.params.company;
      return this.companies[comp];
    }
  },
  watch: {
    "$route.params.company" (){
      this.comp = this.$route.params.company.toUpperCase()  ;

    }
  }
}
</script>

<style scoped>

</style>
