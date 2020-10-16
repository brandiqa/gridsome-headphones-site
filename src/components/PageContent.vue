<template>
  <div class="container mx-auto" v-editable="blok">
    <div v-html="richtext"></div>
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
