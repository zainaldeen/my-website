import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'
import HomeMe from "@/pages/HomeMe";
import AboutMe from "@/pages/AboutMe";
import ExperiencesMe from "@/pages/ExperiencesMe";
import EducationMe from "@/pages/EducationMe";
import SkillsMe from "@/pages/SkillsMe";
import AchievementsMe from "@/pages/AchievementsMe";
import ContactsMe from "@/pages/ContactsMe";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'me',
          name: 'HomeMe',
          component: HomeMe
        },
      ]
    },

    {
      path: '/about',
      name: 'About',
      component: Home,
      children: [
        {
          path: 'me',
          name: 'AboutMe',
          component: AboutMe
        },
      ]
    },
    {
      path: '/experiences',
      name: 'Experiences',
      component: Home,
      children: [
        {
          path: 'me',
          name: 'ExperiencesMe',
          component: ExperiencesMe
        },
      ]
    },
    {
      path: '/education',
      name: 'Education',
      component: Home,
      children: [
        {
          path: 'me',
          name: 'EducationMe',
          component: EducationMe
        },
      ]
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Home,
      children: [
        {
          path: 'me',
          name: 'SkillsMe',
          component: SkillsMe
        },
      ]
    },
    {
      path: '/achievements',
      name: 'Achievements',
      component: Home,
      children: [
        {
          path: 'me',
          name: 'AchievementsMe',
          component: AchievementsMe
        },
      ]
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Home,
      children: [
        {
          path: 'me',
          name: 'ContactsMe',
          component: ContactsMe
        },
      ]
    },
    {
      path: '/*',
      name: '404',
      component: NotFound
    },


  ]
})
