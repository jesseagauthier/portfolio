<script setup>
import { skills } from '../data/skills.js'
import { certifications } from '../data/certifications.js'
import { education } from '../data/education.js'
import { experiences } from '../data/experiences.js'
</script>

<template>
  <main class="flex flex-col gap-6 mt-10">
    <div>
      <!-- About Section -->
      <section id="about" class="flex flex-wrap md:flex-nowrap" aria-labelledby="tldr_title">
        <div id="tldr" class="p-8 md:basis-2/3 lg:basis-2/5 blue-bg gold-bg-hover">
          <h2 id="tldr_title" class="underline text-2xl heading-text font-medium mb-3 text-white">
            TLDR:
          </h2>
          <ul aria-label="Quick summary">
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
      <section id="education" class="mt-10" aria-labelledby="education_heading">
        <h2 id="education_heading" class="text-2xl font-bold mb-4">Education</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <article
            v-for="edu in education"
            :key="edu.program"
            class="p-8 blue-bg block text-center gold-bg-hover w-full md:basis-1/2"
          >
            <h3 class="text-medium text-xl">{{ edu.program }}</h3>
            <p>{{ edu.institution }}</p>
            <p>{{ edu.years }}</p>
          </article>
        </div>
      </section>
      <!-- Skills Section -->
      <section id="skills" class="mt-10" aria-labelledby="skills_heading">
        <h2 id="skills_heading" class="text-2xl font-bold mb-4">Skills</h2>
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
      <!-- Experience Section -->
      <section id="experience" class="mt-10" aria-labelledby="experience_heading">
        <h2 id="experience_heading" class="text-2xl font-bold mb-4">Experience</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <article v-for="experience in experiences" :key="experience.jobTitle" class="mb-6 flex">
            <div class="p-8 blue-bg text-center gold-bg-hover">
              <h3 class="text-xl font-bold">
                {{ experience.jobTitle }} @ {{ experience.companyName }}
              </h3>
              <p>{{ experience.period }}</p>
              <p class="text-left my-2">{{ experience.disc }}</p>
            </div>
          </article>
        </div>
      </section>
      <!-- Certifications -->
      <section id="certifications" class="mt-10" aria-labelledby="certifications_heading">
        <h2 id="certifications_heading" class="text-2xl font-bold mb-4">Certifications</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <article
            v-for="certification in certifications"
            :key="certification.title"
            class="p-8 blue-bg text-center gold-bg-hover w-100"
          >
            <h3 class="text-xl font-bold">{{ certification.title }}</h3>
            <p>{{ certification.organization }}</p>
            <p>{{ certification.year }}</p>
          </article>
        </div>
      </section>
    </div>
  </main>
</template>
