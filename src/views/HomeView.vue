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
      <section
        id="about"
        class="grid grid-cols-1 lg:grid-cols-4 gap-4"
        aria-labelledby="tldr_title"
      >
        <div id="tldr" class="p-8 gold-bg-hover lg:col-span-2">
          <img src="/assets/profile.jpg" alt="" />
          <!-- <h2 id="tldr_title" class="underline text-2xl heading-text font-medium mb-3 text-white">
            TLDR:
          </h2>
          <ul aria-label="Quick summary">
            <li>
              Seeking web development roles in growth-oriented, mentorship-focused organizations.
            </li>
            <li>
              Graduated with a degree in Interactive Media from Algonquin College in March 2024.
            </li>
            <li>
              Pioneered dynamic redevelopment of The Country Cooperage's Shopify platform, boosting
              sales by 320% in three months.
            </li>
            <li>
              Crafted bespoke Shopify themes for brand consistency and enhanced user experience.
            </li>
            <li>
              Proficient in full-stack development with expertise in front-end technologies such as
              HTML, CSS, and JavaScript, and back-end frameworks like Node.js and Express.js.
            </li>
            <li>Experienced in database management using SQL and NoSQL databases.</li>
            <li>
              Successfully integrated third-party libraries and RESTful APIs to streamline online
              transactions and enhance site performance.
            </li>
            <li>
              Adept at collaborating with cross-functional teams to deliver high-quality solutions
              that meet client requirements and exceed expectations.
            </li>
          </ul> -->
        </div>
        <div id="intro" class="flex gold-bg-hover leading-relaxed lg:col-span-2 h-[100%]">
          <p class="text-black md:w-[80%] m-auto text-xl">
            Web Developer with a strong technical background and extensive experience in front-end
            technologies such as HTML, CSS, and JavaScript. Proficient in creating responsive,
            user-friendly web applications with a focus on design and usability. Skilled in managing
            both SQL and NoSQL databases. Experienced in working with cross-functional teams to
            deliver high-quality solutions that meet and exceed client expectations. Expertise in
            implementing promotional features, troubleshooting technical issues, and monitoring
            performance metrics. Dedicated to staying current with the latest web development trends
            and technologies to foster innovation and continuous improvement.
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
            class="p-8 blue-bg text-center gold-bg-hover w-full md:basis-1/2 flex flex-col justify-center"
          >
            <p v-if="edu.honours" class="font-bold text-xl">Graduated With Honours</p>

            <h3 class="text-medium text-xl m-0 self-center">{{ edu.program }}</h3>
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
                {{ experience.jobTitle }} @ <br />
                {{ experience.companyName }}
              </h3>
              <p>{{ experience.period }}</p>
              <p class="text-left my-2">{{ experience.disc }}</p>
            </div>
          </article>
        </div>
      </section>
      <!-- Certifications
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
      </section> -->
    </div>
  </main>
</template>
