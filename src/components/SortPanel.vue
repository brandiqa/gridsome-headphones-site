<template>
  <div class="flex items-center justify-between p-4 bg-gray-300">
    <div class="inline-flex items-center space-x-4">
      <label class="font-semibold text-gray-700 text-md" for="sort-input"
        >Sort By</label
      >
      <select
        class="px-2 py-2 text-sm leading-tight text-gray-700 bg-gray-100 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
        id="sort-input"
        v-model="sortByLocal"
      >
        <option value="default">Default</option>
        <option value="name-asc">Name (A-Z)</option>
        <option value="name-desc">Name (Z-A)</option>
        <option value="price-lo">Price (Low to High)</option>
        <option value="price-hi">Price (High to Low)</option>
      </select>
    </div>
    <span class="text-sm font-semibold text-gray-600">
      {{ totalCount }} headphones available
    </span>
  </div>
</template>

<script>
export default {
  props: ['totalCount', 'sortBy'],
  model: {
    prop: 'sortBy',
    event: 'sortchange',
  },
  computed: {
    sortByLocal: {
      get: function () {
        return this.sortBy
      },
      set: function (value) {
        return this.$emit('update:sortBy', value)
      },
    },
  },
}
</script>
