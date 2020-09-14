<template>
  <div>
    <div class="relative bg-gray-50">
      <main class="lg:relative">
        <div
          class="w-full pt-16 pb-20 mx-auto text-center max-w-7xl lg:py-16 lg:text-left"
        >
          <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1
              class="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl"
            >
              {{ item.title }}
            </h1>
            <div
              class="max-w-md mx-auto mt-3 prose text-gray-500 md:mt-5 md:max-w-3xl"
              v-html="$md.render(item.description)"
            ></div>

            <div
              class="max-w-md p-8 mx-auto mt-3 prose rounded shadow bg-brand-50 md:mt-5 md:max-w-3xl"
            >
              <h2>Specifikationer</h2>
              <div v-html="$md.render(item.specs)"></div>
            </div>
          </div>
        </div>
        <div
          class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full"
        >
          <Gallery :gallery="gallery" />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SalesItemsPage',
  async asyncData({ params, payload, store }) {
    return {
      item: await store.getters.getSalesItem(params.slug),
    }
  },
  data() {
    return {
      gallery: [
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1273&q=80',
        'https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1564320382348-c06ae02a3897?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1534353641488-754bfb2d6cd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      ],
      index: null,
    }
  },
  methods: {
    imageClass(index) {
      if (index > 0) {
        return 'object-cover w-full h-32'
      } else {
        return 'object-cover w-full col-span-5'
      }
    },
  },
}
</script>
