<template>
  <div class="bg-gray-50">
    <div class="py-12 lg:text-center">
      <h1
        class="text-base font-semibold leading-6 tracking-wide text-brand-600 uppercase"
      >
        Employees
      </h1>
      <p
        class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
      >
        Meet the Team
      </p>
      <p class="max-w-2xl mt-4 text-xl leading-7 text-gray-500 lg:mx-auto">
        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
        voluptatum cupiditate veritatis in accusamus quisquam.
      </p>
    </div>

    <ul
      class="grid grid-cols-1 gap-6 mx-auto max-w-7xl sm:p-6 lg:p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <li
        v-for="(salesItem, index) in loadedEmployees"
        :key="index"
        class="flex flex-col col-span-1 text-center bg-white rounded-lg shadow"
      >
        <div class="flex flex-col flex-1 p-8">
          <img
            class="flex-shrink-0 w-32 h-32 mx-auto bg-black rounded-full"
            :src="salesItem.portrait"
            alt=""
          />
          <h3 class="mt-6 text-sm font-medium leading-5 text-gray-900">
            {{ salesItem.title }}
          </h3>
          <dl class="flex flex-col justify-between flex-grow mt-1">
            <dt class="sr-only">Title</dt>
            <dd class="text-sm leading-5 text-gray-500">
              {{ salesItem.salesItemtitle }}
            </dd>
          </dl>
        </div>
        <div class="border-t border-gray-200">
          <div class="flex -mt-px">
            <div class="flex flex-1 w-0 border-r border-gray-200">
              <a
                :href="mailToLink(salesItem)"
                class="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
              >
                <svg
                  class="w-5 h-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                  />
                  <path
                    d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                  />
                </svg>
                <span class="ml-3">Email</span>
              </a>
            </div>
            <div class="flex flex-1 w-0 -ml-px">
              <a
                :href="telLink(salesItem)"
                class="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
              >
                <svg
                  class="w-5 h-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                  />
                </svg>
                <span class="ml-3">Call</span>
              </a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    loadedSalesItems() {
      return this.$store.state.salesItems.slice(0, this.postCount)
    },
  },
  methods: {
    mailToLink(salesItem) {
      return 'mailto:' + salesItem.email
    },
    telLink(salesItem) {
      return 'mailto:' + salesItem.phone
    },
  },
}
</script>
