<template>
  <nuxt-link
    :to="target"
    class="flex items-start p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50"
  >
    <div
      class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-brand-500 rounded-md sm:h-12 sm:w-12"
      v-html="icon"
    ></div>
    <div class="space-y-1">
      <p class="text-base font-medium leading-6 text-gray-900">
        {{ label }}
      </p>
      <p class="text-sm leading-5 text-gray-500">
        {{ description }}
      </p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'AdvancedFlyoutNavItem',
  props: {
    target: {
      type: String,
      default: '/',
    },
    label: {
      type: String,
      default: 'Home',
    },
    description: {
      type: String,
      default: 'The front of the page.',
    },
    icon: {
      type: String,
      default:
        '<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>',
    },
  },
}
</script>
