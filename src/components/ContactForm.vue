<template>
  <div v-editable="blok" class="container mx-auto my-12">
    <div class="w-2/3 mx-auto lg:w-2/5">
      <div>
        <label for="fullname" class="text-sm font-bold text-gray-600 uppercase"
          >Full Name</label
        >
        <input
          id="fullname"
          class="w-full p-3 mt-2 text-gray-900 bg-gray-300 rounded-lg focus:outline-none focus:shadow-outline focus:bg-white"
          type="text"
          placeholder=""
        />
      </div>
      <div class="mt-8">
        <label for="email" class="text-sm font-bold text-gray-600 uppercase"
          >Email</label
        >
        <input
          id="email"
          class="w-full p-3 mt-2 text-gray-900 bg-gray-300 rounded-lg focus:outline-none focus:shadow-outline focus:bg-white"
          type="text"
        />
      </div>
      <div class="mt-8">
        <label for="message" class="text-sm font-bold text-gray-600 uppercase"
          >Message</label
        >
        <textarea
          id="message"
          class="w-full h-32 p-3 mt-2 text-gray-900 bg-gray-300 rounded-lg focus:outline-none focus:shadow-outline focus:bg-white"
        ></textarea>
      </div>
      <div class="mt-8">
        <button
          class="w-full p-3 text-sm font-bold tracking-wide text-gray-100 uppercase bg-green-700 rounded-lg focus:outline-none focus:shadow-outline"
        >
          Send Message
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok'],
}
</script>
