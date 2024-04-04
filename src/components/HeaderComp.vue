<template>
  <header class="inner-wrapper py-6" role="banner">
    <nav class="flex justify-between items-center flex-wrap" role="navigation">
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

      <!-- Hamburger Menu Button (Visible on Mobile Only) -->
      <button aria-label="Open menu" class="md:hidden block ml-auto" @click="toggleMenu">
        <svg viewBox="0 0 100 80" width="30" height="30">
          <rect width="100" height="20" fill="#e89e1d"></rect>
          <rect y="30" width="100" height="20" fill="#e89e1d"></rect>
          <rect y="60" width="100" height="20" fill="#e89e1d"></rect>
        </svg>
      </button>

      <!-- Desktop Navigation (Always Visible) -->
      <ul
        id="navigation"
        class="hidden md:flex capitalize items-center justify-center mt-3 md:mt-0"
      >
        <li v-for="link in navigationLinks" :key="link.name" class="mx-2 p-2 h-fit">
          <a :href="link.url" class="sub-heading-text text-lg font-medium hover-orange">{{
            link.name
          }}</a>
        </li>
      </ul>

      <!-- Full-Screen Mobile Menu (Hidden by Default) -->
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 z-10 bg-white md:hidden flex flex-col items-center justify-center"
      >
        <button aria-label="Close menu" class="absolute top-4 right-4" @click="toggleMenu">
          <svg viewBox="0 0 40 40" width="30" height="30">
            <path d="M 10,10 L 30,30 M 30,10 L 10,30" stroke="black" stroke-width="5"></path>
          </svg>
        </button>
        <ul class="text-center">
          <li
            v-for="link in navigationLinks"
            :key="link.name"
            class="block p-4 text-lg font-medium hover-orange"
          >
            <a :href="link.url">{{ link.name }}</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
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

const isMenuOpen = ref(false) // Controls the visibility of the menu

// Toggle menu visibility
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>
<style></style>
