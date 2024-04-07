<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '../data/projects.js'
import ProjectSideBar from '../components/ProjectSideBar.vue'

const route = useRoute()
const selectedProject = ref(null)

function fetchProjectData(projectId) {
  const project = projects.find((project) => project.id === Number(projectId))
  if (project) {
    selectedProject.value = project
  } else {
    console.error('Project not found')
  }
}

fetchProjectData(route.params.id)

watch(
  () => route.params.id,
  (newId) => {
    fetchProjectData(newId)
    document.body.scrollTop = document.documentElement.scrollTop = 0
  }
)
</script>

<template>
  <div class="min-h-screen">
    <!-- Projects View -->
    <div class="project-details" role="main">
      <!-- Project Section -->
      <div class="flex flex-col">
        <h2 class="align-middle text-center text-4xl font-bold heading-text my-5">
          {{ selectedProject.title }}
        </h2>
        <div class="flex flex-wrap md:flex-nowrap justify-center">
          <img class="w-1/2 h-[100%]" :src="selectedProject.primaryImage" />
          <div class="self-center p-5 w-2/3">
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

        <!-- More Information Section -->
        <div class="hidden md:block mt-10" aria-labelledby="moreInformationHeading">
          <h3 id="moreInformationHeading" class="my-3 text-2xl font-bold text-center">
            More Information
          </h3>
          <div class="flex justify-center">
            <div class="w-[50%] my-2">
              <swiper-container class="my-thumbs my-4" :slides-per-view="4">
                <swiper-slide
                  class="cursor-pointer mx-2"
                  v-for="image in selectedProject.images"
                  :key="image.id"
                >
                  <img :src="image.src" :alt="'Image of ' + image.title" class="" />
                </swiper-slide>
              </swiper-container>
              <swiper-container
                :slides-per-view="1"
                :space-between="spaceBetween"
                :centered-slides="true"
                navigation="true"
                loop="true"
                thumbs-swiper=".my-thumbs"
              >
                <swiper-slide v-for="image in selectedProject.images" :key="image.id">
                  <img :src="image.src" :alt="'Image of ' + image.title" />
                </swiper-slide>
              </swiper-container>
            </div>
            <div id="secondaryContent" class="">
              <p class="text-lg p-5 w-[80%] text-justify">{{ selectedProject.longBio }}</p>
            </div>
          </div>
        </div>
      </div>
      <p class="text-md md:hidden text-center mt-5" role="alert">
        For best viewing, please visit this page on a larger device.
      </p>
    </div>
    <ProjectSideBar class="hidden lg:block" :projects="projects" />
  </div>
</template>

<style>
img {
  border-radius: 8px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
