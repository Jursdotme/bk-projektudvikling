<template>
  <div class="grid grid-cols-4 gap-2">
    <template v-for="(photo, imageIndex) in gallery">
      <img
        :key="imageIndex"
        :class="imageClass(imageIndex)"
        :src="imageSrc(imageIndex, photo)"
        alt=""
        @click="index = imageIndex"
      />
    </template>
    <client-only>
      <LightGallery
        :images="lightboxSrc(featuredImage, gallery)"
        :index="index"
        :disable-scroll="true"
        @close="index = null"
      />
    </client-only>
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
    featuredImage: {
      type: String,
      default: '',
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
        return 'cursor-pointer hover:shadow-xl shadow transition duration-200 object-cover w-full h-32'
      } else {
        return 'cursor-pointer hover:shadow-xl shadow transition duration-200 object-cover w-full col-span-4'
      }
    },
    imageSrc(index, photo) {
      if (index > 0) {
        return (
          'https://res.cloudinary.com/jursdotme/image/upload/c_thumb,w_280,g_face/' +
          photo +
          '.jpg'
        )
      } else {
        return (
          'https://res.cloudinary.com/jursdotme/image/upload/c_thumb,w_1200,g_face/' +
          photo +
          '.jpg'
        )
      }
    },
    lightboxSrc(featuredImage, gallery) {
      const allImages = [featuredImage, ...gallery]
      const allImageUrls = []

      for (const image of allImages) {
        allImageUrls.push(
          `https://res.cloudinary.com/jursdotme/image/upload/c_thumb,w_1440,g_face/${image}.jpg`
        )
      }
      return allImageUrls
    },
  },
}
</script>
