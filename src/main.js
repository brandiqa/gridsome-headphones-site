// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Page from '~/components/Page.vue'
import Hero from '~/components/Hero.vue'
import Product from '~/components/Product.vue'
import ProductList from '~/components/ProductList.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // register components
  Vue.component('Page', Page)
  Vue.component('Hero', Hero)
  Vue.component('ProductList', ProductList)
  Vue.component('Product', Product)

  // register filters
  Vue.filter('resize', (image, option) => {
    var imageService = '//img2.storyblok.com/'
    var path = image.replace('//a.storyblok.com', '')
    return imageService + option + path
  })

  Vue.filter('driverType', (value) => {
    switch (value) {
      case 'D':
        return 'dynamic'
      case 'BA':
        return 'balanced armature'
      case 'PM':
        return 'planar magnetic'
      case 'E':
        return 'electrostatic'
      case 'BC':
        return 'bone conduction'
      default:
        return 'Unknown'
    }
  })

  Vue.filter('backType', (value) => {
    switch (value) {
      case 'open':
        return 'open back'
      case 'semi':
        return 'semi open'
      case 'closed':
        return 'closed back'
      default:
        return 'Unknown'
    }
  })
}
