<template>
  <div>
    <!-- Gallery -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-3">
      <a
        class="self-center hover:scale-[1.02] shadow-md"
        target="_blank"
        v-for="project of projects"
        :key="project.id"
        :href="project.link"
      >
        <img :src="project.image" :alt="project.name" />
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    id: 1,
    name: 'GottaGo',
    image: './assets/misc/1.png',
    link: 'https://dev-gottago.pantheonsite.io/'
  },
  {
    id: 2,
    name: 'UpMedia',
    image: './assets/misc/2.png',
    link: 'https://upmedia.video/'
  },
  {
    id: 3,
    name: 'The County Cooperage',
    image: './assets/misc/3.png',
    link: 'https://thecountycooperage.ca/'
  },
  {
    id: 4,
    name: 'W Flowers',
    image: './assets/misc/4.png',
    link: 'https://www.figma.com/design/YlbPOHAJ74GZAgk56PK5p2/Portfolio-Pieces?node-id=112-26&t=bvUxLcSLjbUOcs3I-1'
  },
  {
    id: 5,
    name: 'Real Adulting',
    image: './assets/misc/5.png',
    link: 'https://www.figma.com/design/YlbPOHAJ74GZAgk56PK5p2/Portfolio-Pieces?node-id=0-1&t=bvUxLcSLjbUOcs3I-1'
  }
])
</script>
