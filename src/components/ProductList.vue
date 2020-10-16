<template>
  <div class="container mx-auto mt-8">
    <p class="text-sm font-semibold text-gray-600">
      {{ $static.products.totalCount }} headphones available
    </p>
    <div class="flex flex-wrap mt-8 space-x-4">
      <div v-for="edge in $static.products.edges" :key="edge.node.id">
        <ProductCard :edge="edge" />
      </div>
    </div>
  </div>
</template>

<static-query>
  query {
    products: allStoryblokEntry(sortBy: "created_at", filter: {full_slug: {regex:"products" }}) {
      totalCount
      edges{
        node {
          id
          full_slug
          content
        }
      }
    }
  }
</static-query>

<script>
import ProductCard from './ProductCard'

export default {
  components: {
    ProductCard,
  },
}
</script>
