<template>
  <div
    v-show="mobileNavIsOpen"
    class="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
  >
    <div class="rounded-lg shadow-lg">
      <div class="bg-white divide-y-2 rounded-lg shadow-xs divide-gray-50">
        <div class="px-5 pt-5 pb-6 space-y-6">
          <div class="flex items-center justify-between">
            <div>
              <img
                class="w-auto h-8"
                src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                alt="Workflow"
              />
            </div>
            <div class="-mr-2">
              <button
                type="button"
                class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <nav class="grid gap-6">
              <nuxt-link
                v-for="(item, index) in primaryMenu"
                :key="index"
                :to="item.target"
                href="#"
                class="flex items-center p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50"
              >
                <div
                  class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md bg-brand-500"
                  v-html="item.icon"
                ></div>
                <div class="text-base font-medium leading-6 text-gray-900">
                  {{ item.label }}
                </div>
              </nuxt-link>
            </nav>
          </div>
        </div>
        <div class="px-5 py-6 space-y-6">
          <div class="grid grid-cols-2 gap-4">
            <nuxt-link
              v-for="(item, index) in secondaryMenu"
              :key="index"
              :to="item.target"
              class="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700"
            >
              {{ item.label }}
            </nuxt-link>
          </div>
          <div class="space-y-6">
            <span class="flex w-full rounded-md shadow-sm">
              <a
                href="#"
                class="flex items-center justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-brand-600 hover:bg-brand-500 focus:outline-none focus:border-brand-700 focus:shadow-outline-brand active:bg-brand-700"
              >
                Sign up
              </a>
            </span>
            <p
              class="text-base font-medium leading-6 text-center text-gray-500"
            >
              Existing customer?
              <a
                href="#"
                class="transition duration-150 ease-in-out text-brand-600 hover:text-brand-500"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileMenu',
  props: {
    mobileNavIsOpen: Boolean,
  },
  data() {
    return {
      isOpen: false,
      mobileMenuItems: [
        { label: 'Nyheder', target: '/', type: 'secondary' },
        { label: 'Docs', target: '/', type: 'secondary' },
        { label: 'Enterprise', target: '/', type: 'secondary' },
        { label: 'Blog', target: '/', type: 'secondary' },
        { label: 'Help Center', target: '/', type: 'secondary' },
        { label: 'Guides', target: '/', type: 'secondary' },
        { label: 'Security', target: '/', type: 'secondary' },
        { label: 'Events', target: '/', type: 'secondary' },
      ],
    }
  },
  computed: {
    primaryMenu() {
      return this.mobileMenuItems.filter((menuItem) => {
        return menuItem.type === 'primary'
      })
    },
    secondaryMenu() {
      return this.mobileMenuItems.filter((menuItem) => {
        return menuItem.type === 'secondary'
      })
    },
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
    externalClick(event) {
      this.isOpen = false
    },
  },
}
</script>
