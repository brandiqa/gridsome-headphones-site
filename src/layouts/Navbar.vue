<template>
  <nav class="space-x-2">
    <g-link
      v-for="route in routes"
      :key="route.label"
      class="text-green-800 font-mendium hover:underline hover:text-green-500 active:text-green-400"
      :to="route.to"
      >{{ route.label }}
    </g-link>
  </nav>
</template>

<style>
nav .active--exact {
  @apply text-green-600 font-semibold underline;
}
</style>

<script>
export default {
  data() {
    return {
      routes: [
        {
          label: 'Home',
          to: '/',
        },
        {
          label: 'About',
          to: '/about',
        },
        {
          label: 'Contact',
          to: '/contact',
        },
      ],
    }
  },
}
</script>
