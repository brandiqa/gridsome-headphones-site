<template>
  <div>
    <header class="container flex items-end justify-between px-4 mx-auto my-2">
      <strong>
        <g-link class="text-xl text-green-800" to="/">{{
          $static.metadata.siteName
        }}</g-link>
      </strong>
      <nav class="space-x-2">
        <g-link
          v-for="route in routes"
          :key="route.label"
          class="text-green-800 font-mendium hover:underline hover:text-green-500 active:text-green-400"
          :to="route.to"
          >{{ route.label }}
        </g-link>
      </nav>
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  @apply bg-gray-100 text-gray-800;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
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
          label: 'Products',
          to: '/products',
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
