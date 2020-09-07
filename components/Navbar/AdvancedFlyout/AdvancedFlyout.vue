<template>
  <div class="relative">
    <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
    <button
      v-click-outside="externalClick"
      type="button"
      class="inline-flex items-center space-x-2 text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out group hover:text-gray-900 focus:outline-none focus:text-gray-900"
      @click="toggle()"
    >
      <span>{{ label }}</span>
      <!-- Item active: "text-gray-600", Item inactive: "text-gray-400" -->
      <svg
        class="w-5 h-5 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <transition name="fade">
      <div
        v-show="isOpen"
        class="absolute w-screen max-w-md mt-3 -ml-4 transform lg:max-w-3xl"
      >
        <div class="rounded-lg shadow-lg">
          <div class="overflow-hidden rounded-lg shadow-xs">
            <div
              class="relative z-20 grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8 lg:grid-cols-2"
            >
              <nuxt-link
                v-for="(subItem, index) in regularMenu"
                :key="`subItem-${index}`"
                :to="subItem.target"
                class="flex items-start p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50"
              >
                <div
                  v-if="subItem.icon"
                  class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-md sm:h-12 sm:w-12"
                  v-html="subItem.icon"
                ></div>
                <div class="space-y-1">
                  <p class="text-base font-medium leading-6 text-gray-900">
                    {{ subItem.label }}
                  </p>
                  <p
                    v-if="subItem.description"
                    class="text-sm leading-5 text-gray-500"
                  >
                    {{ subItem.description }}
                  </p>
                </div>
              </nuxt-link>
            </div>
            <div class="p-5 bg-gray-50 sm:p-8">
              <nuxt-link
                v-for="(subItem, index) in wideMenu"
                :key="`subItem-${index}`"
                :to="subItem.target"
                class="flow-root p-3 -m-3 space-y-1 transition duration-150 ease-in-out rounded-md hover:bg-gray-100"
              >
                <div class="flex items-center space-x-3">
                  <div class="text-base font-medium leading-6 text-gray-900">
                    {{ subItem.label }}
                  </div>
                  <span
                    v-if="subItem.pill"
                    class="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-indigo-100 text-indigo-800"
                  >
                    {{ subItem.pill }}
                  </span>
                </div>
                <p class="text-sm leading-5 text-gray-500">
                  Empower your entire team with even more advanced tools.
                </p>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'
export default {
  name: 'AdvancedFlyout',
  directives: {
    clickOutside: vClickOutside.directive,
  },
  props: {
    label: {
      type: String,
      default: 'Label Missing',
    },
    subItems: {
      type: Array,
      default() {
        return { message: 'No object was passed to submenu' }
      },
    },
    type: {
      type: String,
      default: 'regular',
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
  computed: {
    regularMenu() {
      return this.subItems.filter((subMenuItem) => {
        return subMenuItem.type === 'regular'
      })
    },
    wideMenu() {
      return this.subItems.filter((subMenuItem) => {
        return subMenuItem.type === 'wide'
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

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
