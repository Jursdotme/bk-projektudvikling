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
      <div
        class="grid max-w-lg gap-8 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none"
      >
        <div
          v-for="item in loadedItems"
          :key="item.slug"
          class="flex flex-col overflow-hidden transition-shadow duration-200 rounded-lg shadow-lg hover:shadow-xl"
        >
          <nuxt-link :to="itemLink(item)" class="flex-shrink-0">
            <img :src="item.thumbnail" class="object-cover w-full" alt="" />
          </nuxt-link>
          <div class="flex flex-col justify-between flex-1 p-6 bg-white">
            <div class="flex-1">
              <nuxt-link :to="itemLink(item)" class="block">
                <h3 class="mt-2 text-xl font-semibold leading-7 text-gray-900">
                  {{ item.title }}
                </h3>
                <p class="mt-3 text-base leading-6 text-gray-500">
                  {{ item.description }}
                </p>
              </nuxt-link>
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
      return 'salg/' + item.slug
    },
  },
}
</script>
