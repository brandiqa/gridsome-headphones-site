<template>
  <div class="container mx-auto">
    <header class="flex justify-between my-4">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="">
        <g-link
          class="mr-4 font-semibold text-green-700 hover:underline hover:text-green-500 active:text-green-400"
          to="/"
          >Home</g-link
        >
        <g-link
          class="mr-4 font-semibold text-green-700 hover:underline hover:text-green-500 active:text-green-400"
          to="/about/"
          >About</g-link
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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
/*
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}
*/
</style>
