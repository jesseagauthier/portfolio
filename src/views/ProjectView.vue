<script setup>
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '../data/projects.js'

const route = useRoute()
const selectedProject = ref(null)
const selectedImage = ref('')

watchEffect(() => {
  const projectId = route.params.id
  const project = projects.find((p) => p.id === Number(projectId))

  if (project) {
    selectedProject.value = project
    selectedImage.value = project.primaryImage // Initialize selectedImage with primary image
  } else {
    console.error('Project not found')
  }

  // Reset scroll position
  window.scrollTo(0, 0)
})
</script>

<template>
  <div class="min-h-screen">
    <div class="project-details" role="main">
      <div class="flex flex-col">
        <h2 class="text-center text-4xl font-bold my-5">{{ selectedProject.title }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          <div class="col-span-2 p-4">
            <img class="h-[80%]" :src="selectedImage" />
            <div class="flex">
              <img
                v-for="image in selectedProject.images"
                :key="image.src"
                :src="image.src"
                @click="selectedImage = image.src"
                class="max-w-[14vw] cursor-pointer"
              />
            </div>
          </div>
          <div class="col-span-2 p-4">
            <p>{{ selectedProject.shortBio }}</p>
            <a
              class="block w-fit orange-bg mx-auto p-3 mt-5 rounded-md gold-bg-hover"
              :href="selectedProject.link"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="'Learn more about ' + selectedProject.title"
            >
              Project Link
            </a>
          </div>
        </div>
      </div>
      <p class="text-md md:hidden text-center mt-5" role="alert">
        For best viewing, please visit this page on a larger device.
      </p>
    </div>
  </div>
</template>

<style>
img {
  border-radius: 8px;
}
</style>
