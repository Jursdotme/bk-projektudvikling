<template>
  <div class="relative z-10 bg-white shadow">
    <div
      class="flex items-center justify-between px-4 py-6 mx-auto sm:px-6 md:justify-start md:space-x-10 max-w-7xl"
    >
      <div class="md:flex-1">
        <nuxt-link to="/" class="flex">
          <img
            class="w-auto h-8 sm:h-10"
            src="/images/logo.svg"
            alt="Workflow"
          />
        </nuxt-link>
      </div>
      <div class="-my-2 -mr-2 md:hidden">
        <button
          v-click-outside="externalClick"
          type="button"
          class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
          @click="toggle()"
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div
        class="hidden md:flex md:items-center md:justify-between md:space-x-12"
      >
        <nav class="flex space-x-10">
          <MenuItem
            v-for="(menuItem, index) in menuItems"
            :key="index"
            v-bind="menuItem"
          />
        </nav>
      </div>
    </div>

    <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  -->
    <MobileMenu :mobile-nav-is-open="mobileNavIsOpen" />
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'

export default {
  name: 'Navbar',
  directives: {
    clickOutside: vClickOutside.directive,
  },
  data() {
    return {
      mobileNavIsOpen: false,
      menuItems: [
        { label: 'Salg', target: '/salg', type: 'normal' },
        { label: 'Leje', target: '/leje', type: 'normal' },
        { label: 'Projekter', target: '/projekter ', type: 'normal' },
        { label: 'Nyheder', target: '/nyheder ', type: 'normal' },
        { label: 'Kontakt', target: '/kontakt', type: 'normal' },
      ],
    }
  },
  methods: {
    toggle() {
      this.mobileNavIsOpen = !this.mobileNavIsOpen
    },
    externalClick(event) {
      this.mobileNavIsOpen = false
    },
  },
}
</script>
