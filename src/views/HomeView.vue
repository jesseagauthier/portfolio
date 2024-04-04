<script setup>
import { skills } from '../data/skills.js'
import { projects } from '../data/projects.js'
import { certifications } from '../data/certifications.js'
import { education } from '../data/education.js'
import { experiences } from '../data/experiences.js'
</script>

<template>
  <main class="flex flex-col gap-6 mt-10" role="main">
    <div class="inner-wrapper">
      <!-- About Section -->
      <section id="about" class="flex flex-wrap md:flex-nowrap">
        <div id="tldr" class="p-8 md:basis-2/3 lg:basis-2/5 blue-bg gold-bg-hover">
          <h3 id="tldr_title" class="underline text-2xl heading-text font-medium mb-3 text-white">
            TLDR:
          </h3>
          <ul>
            <li>
              Seeking Web development roles in growth-oriented, mentorship-focused organization.
            </li>
            <li>
              Pursuing a degree in Interactive Media at Algonquin College, anticipating graduation
              in March 2024.
            </li>
            <li>
              Pioneered dynamic redevelopment of County Cooperage's Shopify platform, boosting sales
              by 320% in three months.
            </li>
            <li>
              Crafted bespoke Shopify theme for brand consistency and enhanced user experience.
            </li>
          </ul>
        </div>
        <div id="intro" class="p-3 md:p-8 md:basis-2/3 align-middle self-center">
          <p class="text-black md:w-[80%] mx-auto text-xl">
            Technically minded professional with diverse experience in full-stack development,
            specializing in front-end technologies, such as HTML, CSS, and JavaScript, as well as
            back-end frameworks like Node.js and Express.js. Well-versed in developing responsive
            and user-friendly web applications, with keen eye for design and usability. Proficient
            in database management using SQL and NoSQL databases. Adept at collaborating with
            cross-functional teams to deliver high-quality solutions that meet client requirements
            and exceed expectations. Demonstrated ability to implement and test promotional
            features, troubleshoot technical issues, and monitor performance metrics Skilled at
            staying updated with latest trends and technologies in web development to drive
            innovation and continuous improvement.
          </p>
        </div>
      </section>
      <!-- Education Section -->
      <section id="education" class="mt-10">
        <h3 class="text-2xl font-bold mb-4">Education</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div
            v-for="edu in education"
            :key="edu.program"
            class="p-8 blue-bg block text-center gold-bg-hover w-full md:basis-1/2"
          >
            <h4 class="text-medium text-xl">{{ edu.program }}</h4>
            <p class="text-light">{{ edu.institution }}</p>
            <p>{{ edu.years }}</p>
          </div>
        </div>
      </section>
      <!-- Skills Section -->
      <section id="skills" class="mt-10">
        <h3 class="text-2xl font-bold mb-4">Skills</h3>
        <div class="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-8 gap-8">
          <img
            v-for="skill in skills"
            :key="skill.name"
            :src="skill.image"
            :alt="skill.name"
            class="h-16 m-auto"
          />
        </div>
      </section>
      <!-- Experience Section  -->
      <section id="experience" class="mt-10">
        <h3 class="text-2xl font-bold mb-4">Experience</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div v-for="experience in experiences" :key="experience.jobTitle" class="mb-6 flex">
            <div class="p-8 blue-bg text-center gold-bg-hover">
              <h4 class="text-xl font-bold">
                {{ experience.jobTitle }} @ {{ experience.companyName }}
              </h4>
              <p class="text">{{ experience.period }}</p>
              <p class="text-left my-2">{{ experience.disc }}</p>
            </div>
          </div>
        </div>
      </section>
      <!-- Certifications -->
      <section id="certifications" class="mt-10">
        <h3 class="text-2xl font-bold mb-4">Certifications</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div
            v-for="certification in certifications"
            :key="certification.title"
            class="p-8 blue-bg text-center gold-bg-hover w-100"
          >
            <h4 class="text-xl font-bold">{{ certification.title }}</h4>
            <p>{{ certification.organization }}</p>
            <p>{{ certification.year }}</p>
          </div>
        </div>
      </section>
      <!-- Project Section -->
      <section id="projects" class="mt-10">
        <h3 class="text-2xl font-bold mb-4">Projects (Click Project Image for More Information)</h3>
        <div class="grid md:grid-cols-3 gap-5">
          <router-link
            v-for="project in projects"
            :key="project.id"
            :to="`/projects/${project.id}`"
            class="group rounded overflow-hidden flex flex-col"
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
    </div>
  </main>
</template>
