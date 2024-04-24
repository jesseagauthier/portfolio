<script setup>
import { defineProps, onMounted, watchEffect, ref } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  projects: {
    type: Array,
    required: true
  }
})

const sortedProjects = ref([])

const sortProjectsByImageSize = async () => {
  const projectsWithSize = await Promise.all(
    props.projects.map(async (project) => {
      return new Promise((resolve) => {
        const img = new Image()
        img.onload = () => {
          const size = img.width * img.height
          resolve({ ...project, size })
        }
        img.src = project.primaryImage
      })
    })
  )

  sortedProjects.value = [...projectsWithSize].sort((a, b) => b.size - a.size)
}

onMounted(sortProjectsByImageSize)

watchEffect(() => {
  props.projects.length && sortProjectsByImageSize()
})
</script>

<!--  -->

<template>
  <div class="py-5">
    <h4 class="text-2xl font-bold">More Projects</h4>
    <div class="flex space-x-3">
      <RouterLink v-for="project in sortedProjects" :key="project" :to="`/projects/${project.id}`"
        ><img :src="project.primaryImage"
      /></RouterLink>
    </div>
  </div>
</template>
