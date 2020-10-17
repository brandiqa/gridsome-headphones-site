<template>
  <footer class="py-8 text-sm text-center text-gray-400 bg-gray-800">
    <div
      class="container flex flex-col justify-between px-8 mx-auto space-y-4 md:flex-row md:space-y-0"
    >
      <span>Copyright @ 2020</span>
      <span>
        Powered by:
        <a href="https://gridsome.org/" target="_blank" rel="noreferrer"
          >Gridsome</a
        >
        ,
        <a href="https://www.storyblok.com/" target="_blank" rel="noreferrer"
          >StoryBlok</a
        >
        &amp;
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"
          >TailwindCSS</a
        >
      </span>

      <a
        href="https://github.com/brandiqa/gridsome-headphones-site"
        target="_blank"
        rel="noreferrer"
      >
        <v-icon name="brands/github" /> GitHub
      </a>
    </div>
  </footer>
</template>

<style scoped>
a {
  @apply text-green-400 font-semibold;
}
</style>
