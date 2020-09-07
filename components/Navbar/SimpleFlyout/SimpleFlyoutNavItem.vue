<template>
  <nuxt-link
    :to="target"
    class="block p-3 -m-3 space-y-1 transition duration-150 ease-in-out rounded-md hover:bg-gray-50"
  >
    <p class="text-base font-medium leading-6 text-gray-900">
      {{ label }}
    </p>
    <p class="text-sm leading-5 text-gray-500">
      {{ description }}
    </p>
  </nuxt-link>
</template>

<script>
export default {
  name: 'SimpleFlyoutNavItem',
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
  },
}
</script>
