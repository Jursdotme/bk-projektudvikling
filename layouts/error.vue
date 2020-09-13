<template>
  <div class="bg-white">
    <div
      class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 md:py-16 lg:px-8 lg:py-20"
    >
      <h2
        v-if="error.statusCode === 404"
        class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
      >
        Side ikke fundet<br />
        <span class="text-indigo-600"
          >Tjek om du har skrevet den rigtige adresse.</span
        >
      </h2>
      <h2
        v-else
        class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
      >
        Teknisk fejl<br />
        <span class="text-indigo-600"
          >Prøv at klikke tilbage og prøv igen.</span
        >
      </h2>
      <div class="flex mt-8">
        <div class="inline-flex rounded-md shadow">
          <nuxt-link
            to="/"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:shadow-outline"
          >
            Home page
          </nuxt-link>
        </div>
        <div class="inline-flex ml-3">
          <nuxt-link
            to="/contact"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-indigo-700 transition duration-150 ease-in-out bg-indigo-100 border border-transparent rounded-md hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300"
          >
            Hjælp
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['error'],
}
</script>
