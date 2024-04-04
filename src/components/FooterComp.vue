<template>
  <section id="contact" class="mt-10">
    <div class="flex flex-col justify-center py-14 text-center text-white bg-blue-500">
      <h4 class="text-5xl mb-4">Let's Chat</h4>
      <a
        href="mailto:jessescarr@gmail.com"
        class="px-6 py-3 bg-orange-500 inline-block w-auto mx-auto my-2 text-lg rounded hover:bg-orange-600 transition-colors duration-300 ease-in-out"
      >
        Email
      </a>
      <button
        @click="openCalendly"
        class="px-6 py-3 bg-orange-500 inline-block w-auto mx-auto my-2 text-lg rounded hover:bg-orange-600 transition-colors duration-300 ease-in-out"
      >
        Calendly Link
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
