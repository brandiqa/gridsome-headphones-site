<template>
  <div class="py-8 bg-gray-800" v-editable="blok">
    <div class="container mx-auto">
      <h1 class="text-2xl font-semibold text-gray-400">{{ blok.headline }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok'],
}
</script>
