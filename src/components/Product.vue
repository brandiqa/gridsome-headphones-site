<template>
  <div v-editable="blok">
    <Breadcrumb :page="blok.brand + ' ' + blok.model" />
    <div
      class="flex flex-col justify-center p-4 mt-4 bg-white md:space-x-16 md:flex-row place-items-center container-mx-auto"
    >
      <div class="px-4">
        <img v-bind:src="blok.image | resize('fit-in/400x400')" />
      </div>
      <div class="px-4">
        <h2 class="text-4xl font-bold tracking-wider">
          {{ blok.brand }} {{ blok.model }}
        </h2>
        <h3 class="text-xl font-semibold text-green-700">$ {{ blok.price }}</h3>
        <div class="mt-4 md:mt-16">
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
            class="w-full py-4 mt-8 font-semibold text-center text-gray-200 bg-gray-800 md:mt-16 hover:bg-gray-900 hover:text-white"
          >
            <v-icon name="cart-arrow-down" /> ADD TO CART
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
