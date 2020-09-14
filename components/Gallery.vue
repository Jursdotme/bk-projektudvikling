<template>
  <div class="grid grid-cols-5 gap-1 mt-1">
    <template v-for="(photo, imageIndex) in gallery">
      <img
        :key="imageIndex"
        :class="imageClass(imageIndex)"
        :src="photo"
        alt=""
        @click="index = imageIndex"
      />
    </template>
    <no-ssr>
      <LightGallery
        :images="gallery"
        :index="index"
        :disable-scroll="true"
        @close="index = null"
      />
    </no-ssr>
  </div>
</template>

<script>
export default {
  title: 'Gallery',
  props: {
    gallery: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      index: null,
    }
  },
  methods: {
    imageClass(index) {
      if (index > 0) {
        return 'object-cover w-full h-32'
      } else {
        return 'object-cover w-full col-span-5'
      }
    },
  },
}
</script>
