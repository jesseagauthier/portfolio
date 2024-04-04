<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const navigationLinks = ref([
  { name: 'About', url: '#about' },
  { name: 'Projects', url: '#projects' },
  { name: 'Contact', url: '#contact' },
  { name: 'GitHub', url: 'https://github.com/jesseagauthier' },
  { name: 'CodePen', url: 'https://codepen.io/jessegauthier1994' },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/jesse-gauthier-475a25168/'
  }
])
</script>

<template>
  <header class="inner-wrapper py-6" role="banner">
    <nav class="md:flex md:justify-between flex-wrap" role="navigation">
      <router-link to="/">
        <div id="brand" class="cursor-pointer">
          <h1
            class="orange-text align-middle text-center text-4xl font-bold heading-text hover-blue-text"
          >
            Jesse Gauthier
          </h1>
          <h2
            class="blue-text align-middle text-center text-xl font-bold sub-heading-text hover-orange"
          >
            Front End Developer
          </h2>
        </div>
      </router-link>
      <ul id="navigation" class="flex capitalize items-center flex-wrap justify-center mt-3">
        <li v-for="link in navigationLinks" :key="link.name" class="mx-2 p-2 h-fit">
          <a :href="link.url" class="sub-heading-text text-lg font-medium hover-orange">{{
            link.name
          }}</a>
        </li>
      </ul>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped></style>
