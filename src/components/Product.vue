<template>
  <div v-editable="blok">
    <Breadcrumb :page="blok.brand + ' ' + blok.model" />
    <div
      class="flex flex-col justify-center p-4 mt-8 space-x-16 bg-white md:flex-row place-items-center container-mx-auto"
    >
      <div>
        <img class="p-4" v-bind:src="blok.image | resize('fit-in/400x400')" />
      </div>
      <div class="p-4">
        <h2 class="text-4xl font-bold tracking-wider">
          {{ blok.brand }} {{ blok.model }}
        </h2>
        <h3 class="text-xl font-semibold text-gray-700">$ {{ blok.price }}</h3>
        <div class="mt-16">
          <h4 class="text-lg font-semibold text-gray-800">SPECS</h4>
          <ul class="pl-8 mt-2 text-gray-700 list-disc">
            <li class="capitalize">
              Transducer Type: {{ blok.driver | driverType }}
            </li>
            <li>Operating Principle: {{ blok.backType | backType }}</li>
            <li class="capitalize">Pad Type: {{ blok.padType }}</li>
            <li>Impedance: {{ blok.impedance }} Ohms</li>
          </ul>
          <button
            class="inline-flex items-center p-24 py-4 mt-16 text-center text-gray-200 bg-gray-800 hover:bg-gray-900 hover:text-white"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
            ORDER
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from './Breadcrumb'

export default {
  props: ['blok'],
  components: {
    Breadcrumb,
  },
}
</script>
