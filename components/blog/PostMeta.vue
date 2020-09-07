<template>
  <div class="flex items-center mt-6">
    <div class="flex-shrink-0">
      <img
        class="w-10 h-10 rounded-full"
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
        alt=""
      />
    </div>
    <div class="ml-3">
      <p class="text-sm font-medium leading-5 text-gray-900">Author Name</p>
      <div class="flex text-sm leading-5 text-gray-500">
        <time datetime="2020-03-16">
          {{ date | date }}
        </time>
        <span class="mx-1"> &middot; </span>
        <span> 6 min read </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostMeta',
  props: {
    date: { type: String, default: '0000000' },
  },
}
</script>
