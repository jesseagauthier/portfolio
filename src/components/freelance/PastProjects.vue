<template>
  <section class="bg-gray-100 p-20">
    <h2 class="text-4xl font-bold text-center mb-10">Past Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <!-- Dynamic Project Card for specified project IDs -->
      <div
        v-for="project in filteredProjects"
        :key="project.id"
        class="bg-white shadow-lg rounded-lg p-6"
      >
        <img
          :src="project.primaryImage"
          :alt="project.title"
          class="w-full h-48 object-cover rounded-md mb-4"
        />
        <h3 class="text-2xl font-semibold">{{ project.title }}</h3>
        <p class="text-gray-700 mt-2">{{ project.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { projects } from '@/data/projects.js'

const selectedProjectIds = ref([1, 3, 6, 7])

const filteredProjects = computed(() =>
  projects.filter((project) => selectedProjectIds.value.includes(project.id))
)
</script>

<style scoped></style>
