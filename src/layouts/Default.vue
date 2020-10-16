<template>
  <div class="flex flex-col min-h-screen overflow-x-hidden">
    <header class="container flex items-end justify-between px-4 mx-auto my-2">
      <strong>
        <g-link class="text-xl text-green-800" to="/">{{
          $static.metadata.siteName
        }}</g-link>
      </strong>
      <Navbar />
    </header>
    <div class="flex-1">
      <slot />
    </div>
    <Footer />
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

.fa-icon {
  @apply mr-2;
}
</style>

<script>
import Navbar from './Navbar'
import Footer from './Footer'

export default {
  components: {
    Navbar,
    Footer,
  },
}
</script>
