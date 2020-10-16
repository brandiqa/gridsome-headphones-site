<template>
  <div class="mb-4 overflow-hidden bg-white rounded shadow-lg">
    <div class="px-8 py-4">
      <img
        class="w-full"
        v-bind:src="product.image | resize('fit-in/240x300/filters:fill(fff)')"
        :alt="product.name"
      />
    </div>
    <div class="flex justify-between px-2">
      <g-link
        class="block text-lg font-bold tracking-tight hover:underline hover:text-gray-700"
        :to="product.full_slug"
      >
        {{ product.brand }} {{ product.model }}
      </g-link>
      <span class="text-lg font-semibold text-green-700"
        >${{ product.price }}</span
      >
    </div>
    <div
      class="flex justify-between px-2 py-4 mt-3 text-sm text-gray-700 border-t-2 border-gray-400"
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
