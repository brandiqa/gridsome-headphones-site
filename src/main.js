// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Page from '~/components/Page.vue'
import Hero from '~/components/Hero.vue'
import ProductList from '~/components/ProductList.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // register components
  Vue.component('Page', Page)
  Vue.component('Hero', Hero)
  Vue.component('ProductList', ProductList)
}
