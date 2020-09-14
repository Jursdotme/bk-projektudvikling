<template>
  <div>
    <div class="relative bg-gray-50">
      <main class="lg:relative">
        <div class="grid grid-cols-2 gap-16 py-16 mx-auto max-w-7xl">
          <div>
            <h1
              class="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl"
            >
              {{ item.title }}
            </h1>
            <div
              class="max-w-md mx-auto mt-3 prose text-gray-500 md:mt-5 md:max-w-3xl"
              v-html="$md.render(item.description)"
            ></div>

            <div class="mt-8 overflow-hidden">
              <dl class="grid grid-cols-3 gap-16">
                <div class="flex flex-col">
                  <dt
                    class="order-2 text-base font-medium leading-6 text-gray-500"
                  >
                    Boligareal
                  </dt>
                  <dd
                    class="order-1 text-2xl font-extrabold leading-8 text-brand-400 sm:text-3xl sm:leading-9"
                  >
                    {{ item.specs.area }}
                  </dd>
                </div>
                <div class="flex flex-col">
                  <dt
                    class="order-2 text-base font-medium leading-6 text-gray-500"
                  >
                    Vægtet areal
                  </dt>
                  <dd
                    class="order-1 text-2xl font-extrabold leading-8 text-brand-400 sm:text-3xl sm:leading-9"
                  >
                    {{ item.specs.actualarea }}
                  </dd>
                </div>
                <div class="flex flex-col">
                  <dt
                    class="order-2 text-base font-medium leading-6 text-gray-500"
                  >
                    Rum/værelser
                  </dt>
                  <dd
                    class="order-1 text-2xl font-extrabold leading-8 text-brand-400 sm:text-3xl sm:leading-9"
                  >
                    {{ item.specs.rooms }}
                  </dd>
                </div>
                <div class="flex flex-col">
                  <dt
                    class="order-2 text-base font-medium leading-6 text-gray-500"
                  >
                    Plan
                  </dt>
                  <dd
                    class="order-1 text-2xl font-extrabold leading-8 text-brand-400 sm:text-3xl sm:leading-9"
                  >
                    {{ item.specs.floors }}
                  </dd>
                </div>
                <div class="flex flex-col">
                  <dt
                    class="order-2 text-base font-medium leading-6 text-gray-500"
                  >
                    Byggeår
                  </dt>
                  <dd
                    class="order-1 text-2xl font-extrabold leading-8 text-brand-400 sm:text-3xl sm:leading-9"
                  >
                    {{ item.specs.constructionyear }}
                  </dd>
                </div>
              </dl>
            </div>

            <div class="mt-16 prose">
              <h2>Andet</h2>

              <p>
                {{ item.specs.other }}
              </p>
            </div>
          </div>
          <div>
            <Gallery
              :gallery="item.gallery"
              :featured-image="item.featured_image"
            />
          </div>
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
