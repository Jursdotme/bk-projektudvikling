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
              <nuxt-link :to="postLink(post)" class="block">
                <h3 class="mt-2 text-xl font-semibold leading-7 text-gray-900">
                  {{ post.title }}
                </h3>
              </nuxt-link>
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
