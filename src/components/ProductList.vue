<template>
  <div>
    <p class="mb-4 text-sm font-semibold text-gray-700">
      {{ $static.products.totalCount }} headphones available
    </p>
    <div class="flex flex-wrap">
      <div
        class="mb-4 mr-4 overflow-hidden bg-white rounded shadow-lg"
        v-for="edge in $static.products.edges"
        :key="edge.node.id"
      >
        <img
          class="p-8"
          v-bind:src="
            edge.node.content.image | resize('fit-in/300x300/filters:fill(fff)')
          "
        />
        <div class="px-8">
          <g-link
            class="block text-lg font-bold hover:underline hover:text-gray-700"
            :to="edge.node.full_slug"
          >
            {{ edge.node.content.brand }} {{ edge.node.content.model }}
          </g-link>
          <span class="font-semibold text-md"
            >$ {{ edge.node.content.price }}</span
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
    </div>
  </div>
</template>

<static-query>
  query {
    products: allStoryblokEntry(filter: {full_slug: {regex:"products" }}) {
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
