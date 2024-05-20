<template>
  <!-- Project Section -->
  <section id="projects" class="mt-10" aria-labelledby="projects_heading">
    <h2 id="projects_heading" class="text-2xl font-bold mb-4">
      Projects (Click Project Image for More Information)
    </h2>
    <div class="grid md:grid-cols-3 gap-5">
      <router-link
        v-for="project in projects"
        :key="project.id"
        :to="`/projects/${project.id}`"
        class="group rounded overflow-hidden flex flex-col"
        aria-label="View project details"
      >
        <div class="relative w-full">
          <img :src="project.primaryImage" :alt="project.title" class="w-full shadow-lg" />
          <div
            class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent to-gray-300 opacity-0 group-hover:opacity-60 transition-opacity duration-300"
          ></div>
        </div>
        <div class="flex justify-between bg-[#e89e1d] p-3 capitalize mt-auto bg-opacity-85">
          <p class="text-lg self-center">{{ project.title }}</p>
          <p class="self-center">{{ project.type }}</p>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { projects } from '../data/projects.js'
</script>
