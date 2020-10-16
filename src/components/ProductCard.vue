<template>
  <div class="mb-4 mr-4 overflow-hidden bg-white rounded shadow-lg">
    <img
      class="px-8 py-4"
      v-bind:src="product.image | resize('fit-in/300x300/filters:fill(fff)')"
    />
    <div class="flex justify-between px-4">
      <g-link
        class="block text-lg font-bold hover:underline hover:text-gray-700"
        :to="product.full_slug"
      >
        {{ product.brand }} {{ product.model }}
      </g-link>
      <span class="text-lg font-semibold text-green-700"
        >${{ product.price }}</span
      >
    </div>
    <div
      class="flex justify-between p-4 mt-3 text-sm text-gray-600 border-t-2 border-gray-400"
    >
      <span>{{ product.driver | driverType }}</span>
      <span>{{ product.backType | backType }}</span>
      <span>{{ product.impedance }} Ohms</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],
}
</script>
