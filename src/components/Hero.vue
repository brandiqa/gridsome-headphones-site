<template>
  <div class="p-8" v-editable="blok">
    <h1 class="text-4xl font-semibold">{{ blok.headline }}</h1>
  </div>
</template>

<script>
export default {
  props: ['blok'],
}
</script>
