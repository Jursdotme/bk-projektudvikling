<template>
  <div>
    <article class="max-w-5xl px-4 mx-auto mt-12 sm:px-6 lg:px-8">
      <h1 class="text-6xl font-black tracking-tight">{{ post.title }}</h1>

      <PostMeta :author-data="post.author" :date="post.date" />

      <img :src="post.thumbnail" alt="" class="w-full mt-6 rounded-lg" />

      <div
        class="mx-auto mt-12 prose-sm prose sm:prose lg:prose-lg xl:prose-2xl"
        v-html="$md.render(post.body)"
      ></div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'PostPage',
  async asyncData({ params, payload, store }) {
    return {
      post: await store.getters.getPost(params.slug),
    }
  },
}
</script>
