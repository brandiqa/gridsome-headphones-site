<template>
  <div class="container mx-auto mt-2">
    <div class="flex items-center justify-between p-4 bg-gray-300">
      <div class="inline-flex items-center space-x-4">
        <label class="font-semibold text-gray-700 text-md" for="sort-input"
          >Sort By</label
        >
        <select
          class="px-2 py-2 text-sm leading-tight text-gray-700 bg-gray-100 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
          id="sort-input"
          v-model="sortBy"
        >
          <option value="default">Default</option>
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
          <option value="price-lo">Price (Low to High)</option>
          <option value="price-hi">Price (High to Low)</option>
        </select>
      </div>
      <span class="text-sm font-semibold text-gray-600">
        {{ $static.products.totalCount }} headphones available
      </span>
    </div>
    <div class="flex flex-wrap mt-2">
      <div v-for="product in sortedProducts" :key="product.id">
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
      sortBy: 'default',
    }
  },
  created() {
    // Extract content & edge data into products
    this.products = this.$static.products.edges.map((edge) => {
      const product = edge.node.content
      product.full_slug = edge.node.full_slug
      product.name = edge.node.name
      product.created_at = new Date(edge.node.created_at)
      return product
    })
  },
  computed: {
    sortedProducts() {
      if (this.sortBy == 'name-asc') {
        return this.products.sort((a, b) => a.name.localeCompare(b.name))
      } else if (this.sortBy == 'name-desc') {
        return this.products.sort((a, b) => b.name.localeCompare(a.name))
      } else if (this.sortBy == 'price-lo') {
        return this.products.sort((a, b) => a.price - b.price)
      } else if (this.sortBy == 'price-hi') {
        return this.products.sort((a, b) => b.price - a.price)
      } else {
        return this.products.sort((a, b) => b.created_at - a.created_at)
      }
    },
  },
}
</script>
