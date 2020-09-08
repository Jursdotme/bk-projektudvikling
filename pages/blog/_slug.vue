<template>
  <div>
    <article
      class="px-4 mx-auto mt-12 prose-sm prose max-w-7xl sm:px-6 lg:px-8 sm:prose lg:prose-lg xl:prose-2xl"
    >
      <h1>{{ post.title }}</h1>

      <img :src="post.thumbnail" alt="" />

      <div v-html="$md.render(post.body)"></div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'PostPage',

  async asyncData({ params, error }) {
    try {
      return {
        post: await require(`@/assets/content/blog/${params.slug}.json`),
      }
    } catch (err) {
      // catches errors both in fetch and response.json
      error({ statusCode: 404, message: 'Post not found' })
    }
  },
}
</script>
