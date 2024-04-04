<template>
  <section id="contact" aria-labelledby="contact-heading" class="mt-10">
    <div class="flex flex-col justify-center py-14 text-center text-white bg-blue-500">
      <h2 id="contact-heading" class="text-5xl mb-4">Let's Chat</h2>
      <a
        href="mailto:jessescarr@gmail.com"
        aria-label="Email Jesse Carr"
        class="px-6 py-3 bg-orange-500 inline-block w-auto mx-auto my-2 text-lg rounded hover:bg-orange-600 transition-colors duration-300 ease-in-out"
        tabindex="0"
      >
        Email Jesse
      </a>
      <button
        @click="openCalendly"
        @keyup.space="openCalendly"
        @keyup.enter="openCalendly"
        aria-label="Schedule a meeting via Calendly"
        class="px-6 py-3 bg-orange-500 inline-block w-auto mx-auto my-2 text-lg rounded hover:bg-orange-600 transition-colors duration-300 ease-in-out"
        tabindex="0"
      >
        Schedule a Meeting
      </button>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    openCalendly() {
      Calendly.initPopupWidget({
        url: 'https://calendly.com/jessegauthier/30min'
      })
    }
  }
}
</script>
