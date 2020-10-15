<template>
  <div>
    <header class="container flex items-end mx-auto my-4 space-x-8">
      <strong>
        <g-link class="text-3xl text-green-800" to="/">{{
          $static.metadata.siteName
        }}</g-link>
      </strong>
      <nav>
        <g-link
          class="mr-4 font-semibold text-green-700 hover:underline hover:text-green-900 active:text-green-400"
          to="/"
          >Home</g-link
        >
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
</style>
