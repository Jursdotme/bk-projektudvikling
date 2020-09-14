<template>
  <div
    class="relative px-4 pt-16 pb-20 bg-gray-50 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
  >
    <div class="absolute inset-0">
      <div class="bg-white h-1/3 sm:h-2/3"></div>
    </div>
    <div class="relative mx-auto max-w-7xl">
      <div class="text-center">
        <h1
          class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
        >
          Salgsemner
        </h1>
        <p
          class="max-w-2xl mx-auto mt-3 text-xl leading-7 text-gray-500 sm:mt-4"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
          labore natus atque, ducimus sed.
        </p>
      </div>
      <div class="grid grid-cols-1 gap-8 mt-12">
        <div
          v-for="item in loadedItems"
          :key="item.slug"
          class="relative bg-brand-400"
        >
          <div
            class="h-56 bg-brand-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2"
          >
            <img
              class="object-cover w-full h-full"
              :src="itemImage(item)"
              alt="Support team"
            />
          </div>
          <div
            class="relative max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8 lg:py-16"
          >
            <div class="md:ml-auto md:w-1/2 md:pl-10">
              <div
                class="text-base font-semibold leading-6 tracking-wider text-gray-300 uppercase"
              >
                Nyhed
              </div>
              <h2
                class="mt-2 text-3xl font-extrabold leading-9 tracking-tight text-white sm:text-4xl sm:leading-10"
              >
                {{ item.title }}
              </h2>
              <p class="mt-3 text-lg leading-7 text-gray-300">
                {{ item.excerpt }}
              </p>
              <div class="mt-8">
                <div class="inline-flex rounded-md shadow">
                  <nuxt-link
                    :to="itemLink(item)"
                    class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-gray-600 focus:outline-none focus:shadow-outline"
                  >
                    Læs mere
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemCount: 10,
    }
  },
  computed: {
    loadedItems() {
      return this.$store.state.SalesItems.slice(0, this.itemCount)
    },
  },
  methods: {
    itemLink(item) {
      return '/salg/' + item.slug
    },
    itemImage(item) {
      return `https://res.cloudinary.com/jursdotme/image/upload/c_thumb,w_1440,g_face/${item.featured_image}.jpg`
    },
  },
}
</script>
