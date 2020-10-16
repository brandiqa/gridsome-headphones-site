<template>
  <div class="container mx-auto mt-4" v-editable="blok">
    <div class="prose lg:prose-xl" v-html="richtext"></div>
  </div>
</template>

<script>
export default {
  props: ['blok'],
  computed: {
    richtext() {
      return this.blok.content
        ? this.$storyapi.richTextResolver.render(this.blok.content)
        : ''
    },
  },
}
</script>
