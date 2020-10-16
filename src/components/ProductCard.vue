<template>
  <div class="mb-4 overflow-hidden bg-white rounded shadow-lg">
    <img
      class="p-8"
      v-bind:src="
        edge.node.content.image | resize('fit-in/300x300/filters:fill(fff)')
      "
    />
    <div class="flex justify-between px-8">
      <g-link
        class="block text-lg font-bold hover:underline hover:text-gray-700"
        :to="edge.node.full_slug"
      >
        {{ edge.node.content.brand }} {{ edge.node.content.model }}
      </g-link>
      <span class="text-lg font-semibold text-green-700"
        >${{ edge.node.content.price }}</span
      >
    </div>
    <div
      class="flex justify-between p-4 mt-3 text-sm text-gray-600 border-t-2 border-gray-400"
    >
      <span>{{ edge.node.content.driver | driverType }}</span>
      <span>{{ edge.node.content.backType | backType }}</span>
      <span>{{ edge.node.content.impedance }} Ohms</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['edge'],
}
</script>
