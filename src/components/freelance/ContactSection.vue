<template>
  <section id="contacts" class="p-20 text-center orange-bg text-white">
    <h2 class="text-4xl font-bold mb-10">Let's Work Together</h2>
    <form class="max-w-xl mx-auto mb-8">
      <input type="text" placeholder="Your Name" class="border p-2 rounded w-full mb-4" />
      <input type="email" placeholder="Your Email" class="border p-2 rounded w-full mb-4" />
      <textarea
        placeholder="Your Message"
        rows="4"
        class="border p-2 rounded w-full mb-4"
      ></textarea>
      <button type="submit" class="bg-blue-500 text-white px-6 py-3 rounded font-semibold">
        Send Message
      </button>
    </form>
    <a
      class="inline-block bg-blue-500 text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-black"
      href="mailto:jesse@jessegauthier.dev"
      >jesse@jessegauthier.dev</a
    >
  </section>
</template>
