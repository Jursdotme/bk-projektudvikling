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
        class="absolute w-screen max-w-xs px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0"
      >
        <div class="rounded-lg shadow-lg">
          <div class="overflow-hidden rounded-lg shadow-xs">
            <div
              class="relative z-20 grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8"
            >
              <nuxt-link
                v-for="(subItem, index) in subItems"
                :key="`subItem-${index}`"
                :to="subItem.target"
                class="block p-3 -m-3 space-y-1 transition duration-150 ease-in-out rounded-md hover:bg-gray-50"
              >
                <p class="text-base font-medium leading-6 text-gray-900">
                  {{ subItem.label }}
                </p>
                <p
                  v-if="subItem.description"
                  class="text-sm leading-5 text-gray-500"
                >
                  {{ subItem.description }}
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
  },
  data() {
    return {
      isOpen: false,
    }
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
