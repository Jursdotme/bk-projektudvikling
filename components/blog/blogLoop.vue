<template>
  <div
    class="relative px-4 pt-16 pb-20 bg-gray-50 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
  >
    <div class="absolute inset-0">
      <div class="bg-white h-1/3 sm:h-2/3"></div>
    </div>
    <div class="relative mx-auto max-w-7xl">
      <div class="text-center">
        <h2
          class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
        >
          From the blog
        </h2>
        <p
          class="max-w-2xl mx-auto mt-3 text-xl leading-7 text-gray-500 sm:mt-4"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
          labore natus atque, ducimus sed.
        </p>
      </div>
      <div
        class="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none"
      >
        <div
          v-for="post in loadedPosts"
          :key="post.slug"
          class="flex flex-col overflow-hidden rounded-lg shadow-lg"
        >
          <nuxt-link :to="postLink(post)" class="flex-shrink-0">
            <img
              :src="post.thumbnail"
              class="object-cover w-full h-48"
              alt=""
            />
          </nuxt-link>
          <div class="flex flex-col justify-between flex-1 p-6 bg-white">
            <div class="flex-1">
              <p class="text-sm font-medium leading-5 text-indigo-600">
                <nuxt-link :to="postLink(post)" class="hover:underline">{{
                  post.category
                }}</nuxt-link>
              </p>
              <nuxt-link :to="postLink(post)" class="block">
                <h3 class="mt-2 text-xl font-semibold leading-7 text-gray-900">
                  {{ post.title }}
                </h3>
                <p class="mt-3 text-base leading-6 text-gray-500">
                  {{ post.description }}
                </p>
              </nuxt-link>
            </div>
            <div class="flex items-center mt-6">
              <div class="flex-shrink-0">
                <img
                  class="w-10 h-10 rounded-full"
                  :src="post.author.portrait"
                  alt=""
                />
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium leading-5 text-gray-900">
                  {{ post.author.name }}
                </p>
                <div class="flex text-sm leading-5 text-gray-500">
                  <time datetime="2020-03-16">
                    {{ post.date | date }}
                  </time>
                  <span class="mx-1"> &middot; </span>
                  <span> 6 min read </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogLoop',
  data() {
    return {
      postCount: 3,
    }
  },
  computed: {
    loadedPosts() {
      return this.$store.state.blogPosts.slice(0, this.postCount)
    },
  },
  methods: {
    postLink(post) {
      return 'blog/' + post.slug
    },
  },
}
</script>
