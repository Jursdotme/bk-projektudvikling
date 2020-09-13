<template>
  <div>
    <article class="max-w-5xl px-4 mx-auto mt-12 sm:px-6 lg:px-8">
      <h1 class="text-6xl font-black tracking-tight">{{ item.title }}</h1>

      <PostMeta :author-data="item.author" :date="item.date" />

      <img :src="item.thumbnail" alt="" class="w-full mt-6 rounded-lg" />

      <div
        class="mx-auto mt-12 prose-sm prose sm:prose lg:prose-lg xl:prose-2xl"
        v-html="$md.render(item.body)"
      ></div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'SalesItemsPage',
  async asyncData({ params, payload, store }) {
    return {
      item: await store.getters.getSalesItem(params.slug),
    }
  },
}
</script>
