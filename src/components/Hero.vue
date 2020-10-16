<template>
  <div class="py-4 bg-gray-800" v-editable="blok">
    <div class="container mx-auto">
      <h1 class="text-xl font-semibold text-gray-400">{{ blok.headline }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok'],
}
</script>
