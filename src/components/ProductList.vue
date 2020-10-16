<template>
  <div class="container mx-auto mt-2">
    <SortPanel
      class="mx-4"
      :totalCount="$static.products.totalCount"
      :sortBy="sortBy"
      @update:sortBy="setSortBy"
    />
    <div class="flex flex-wrap justify-center px-4 mt-4 md:justify-between">
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
import SortPanel from './SortPanel'

export default {
  components: {
    ProductCard,
    SortPanel,
  },
  data() {
    return {
      products: null,
      sortBy: 'default',
    }
  },
  methods: {
    setSortBy(value) {
      this.sortBy = value
    },
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
