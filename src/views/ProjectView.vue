<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '../data/projects.js'

export default {
  setup() {
    const route = useRoute()
    const selectedProject = ref(null)
    const isLoading = ref(true)

    const fetchProjectData = () => {
      const projectId = Number(route.params.id)
      return projects.find((project) => project.id === projectId)
    }

    selectedProject.value = fetchProjectData()
    onMounted(async () => {
      try {
        console.log(route.params.id)
        document.body.scrollTop = document.documentElement.scrollTop = 0
      } catch (error) {
        console.error('Failed to fetch project data:', error)
      } finally {
        isLoading.value = false
      }
    })

    return { selectedProject, isLoading }
  }
}
</script>

<template>
  <!-- Projects View -->
  <div class="project-details min-h-screen inner-wrapper">
    <!-- Project Section -->
    <div class="flex flex-col">
      <h3 class="text-xl md:hidden text-center">
        For best viewing please visit this page on a larger device
      </h3>
      <h2 class="align-middle text-center text-4xl font-bold heading-text my-5">
        {{ selectedProject.title }}
      </h2>

      <a
        class="orange-bg mx-auto p-3 mt-5 rounded-md gold-bg-hover"
        :href="selectedProject.link"
        target="_blank"
      >
        Project Link
      </a>
      <div class="flex flex-wrap md:flex-nowrap align-middle justify-evenly mt-9">
        <img
          class="w-[100%] md:w-[100%] min-w-[550px] h-[350px] rounded-xl my-3 md:my-0"
          :src="selectedProject.primaryImage"
          :alt="selectedProject.title"
        />
        <div class="self-center flex flex-col justify-center">
          <p class="md:w-[80%] w-[90%] mx-auto text-xl">
            {{ selectedProject.shortBio }}
          </p>
        </div>
      </div>
      <div class="hidden md:block mt-10">
        <h3 class="my-3 text-2xl font-bold text-center">More Information</h3>
        <div id="secondaryContent" class="grid grid-cols-2 space-x-3">
          <div class="grid md:grid-cols-2 gap-3">
            <div
              class="flex flex-col space-y-2"
              v-for="image in selectedProject.images"
              :key="selectedProject.id"
            >
              <h4 class="text-center font-medium">{{ image.title }}</h4>
              <img
                class="w-full object-cover"
                :src="image.src"
                :alt="'Image ' + image.title"
                :key="image"
              />
            </div>
          </div>
          <div class="p-3">
            <p class="text-lg">{{ selectedProject.longBio }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Contact Section -->
  <section id="contact" class="mt-10">
    <div class="flex flex-col justify-center py-14 text-center text-white bg-blue-500">
      <h4 class="text-5xl mb-6 text-center">Let's Chat</h4>
      <div class="flex justify-center space-x-3 mt-6 mx-auto">
        <a
          href="mailto:jessescarr@gmail.com"
          class="px-6 py-3 bg-orange-500 inline-block w-auto text-lg rounded hover:bg-orange-600 transition-colors duration-300 ease-in-out"
        >
          Email
        </a>
        <a
          href="#"
          @click.prevent="openCalendly"
          class="px-6 py-3 bg-orange-500 inline-block w-auto text-lg rounded hover:bg-orange-600 transition-colors duration-300 ease-in-out"
        >
          Calendly Link
        </a>
      </div>
    </div>
  </section>
</template>
