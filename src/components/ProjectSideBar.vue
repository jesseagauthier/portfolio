<script setup>
defineProps({
  projects: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div>
    <div>
      <h2>Template</h2>
      <!-- Project Cards
      <div v-for="project of props.projects" :key="project.id">
        <h3>{{ project.title }}</h3>
      </div> -->
    </div>
  </div>
</template>
