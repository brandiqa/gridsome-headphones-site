<template>
  <div class="container mx-auto mt-8">
    <p class="text-sm font-semibold text-gray-600">
      {{ $static.products.totalCount }} headphones available
    </p>
    <div class="flex flex-wrap mt-8">
      <div v-for="product in products" :key="product.id">
        <ProductCard :product="product" />
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
          name
          full_slug
          content
          created_at
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
  data() {
    return {
      products: null,
    }
  },
  created() {
    // Extract content data into products
    this.products = this.$static.products.edges.map((edge) => {
      const product = edge.node.content
      product.full_slug = edge.node.full_slug
      product.name = edge.node.name
      product.created_at = edge.node.created_at
      return product
    })
  },
}
</script>
