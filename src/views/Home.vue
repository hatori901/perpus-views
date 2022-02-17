<template>
  <main class="bg-gray-200 min-h-screen">
        <div class="mx-auto max-w-7xl">
          <div class="lg:grid lg:grid-cols-12 lg:gap-8">
            <div class="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
              <div>
                <h1 class="mt-4 text-4xl tracking-tight font-extrabold text-blue-500 sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                  <span class="md:block">PERBAIKI MASA DEPAN</span>
                  {{ ' ' }}
                  <span class="text-blue-500 md:block">DENGAN MEMBACA BUKU</span>
                </h1>
                <form action="#" class="sm:max-w-xl sm:mx-auto lg:mx-0 my-10">
                  <div class="sm:flex">
                    <div class="min-w-0 flex-1">
                      <label for="search" class="sr-only">Search</label>
                      <input id="search" type="text" placeholder="Cari buku ..." class="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900" />
                    </div>
                    <div class="mt-3 sm:mt-0 sm:ml-3">
                      <button type="submit" class="block w-full py-3 px-4 rounded-md shadow-lg bg-blue-500 text-white font-medium ring-2 ring-blue-300 hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900">Cari Buku</button>
                    </div>
                  </div>
                  <p class="mt-3 text-sm text-gray-700 sm:mt-4">Start your free 14-day trial, no credit card necessary. By providing your email, you agree to our <a href="#" class="font-medium text-white">terms of service</a>.</p>
               </form>
              </div>
            </div>
            <div class="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
              <div class="sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
               <div class="max-w-7xl mx-auto">
                  <div class="bg-white shadow-lg py-2 rounded-lg mx-10 my-10">
                    <qrcode-vue :value="value" class="mx-auto my-5" :size="size" :level="H"></qrcode-vue>
                  </div>
                <p class="text-lg font-bold">Silahkan scan QR Code diatas melalui aplikasi Perpus SMEGA</p>
              </div>
              </div>
            </div>
          </div>
          <div class="max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:px-8">
            <div class="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
              <div v-for="tier in tiers" :key="tier.name" class="bg-white border border-gray-200 rounded-lg shadow-lg divide-y divide-gray-200">
                <div class="p-6">
                  <h2 class="text-lg leading-6 font-medium text-gray-900">{{ tier.name }}</h2>
                  <p class="mt-4 text-sm text-gray-500">{{ tier.description }}</p>
                  <p class="mt-8">
                    <span class="text-4xl font-extrabold text-gray-900">${{ tier.priceMonthly }}</span>
                    {{ ' ' }}
                    <span class="text-base font-medium text-gray-500">/mo</span>
                  </p>
                  <a :href="tier.href" class="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">Buy {{ tier.name }}</a>
                </div>
                <div class="pt-6 pb-8 px-6">
                  <h3 class="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
                  <ul role="list" class="mt-6 space-y-4">
                    <li v-for="feature in tier.includedFeatures" :key="feature" class="flex space-x-3">
                      <CheckIcon class="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                      <span class="text-sm text-gray-500">{{ feature }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </main>
</template>

<script>
import QrcodeVue from 'qrcode.vue'
import { CheckIcon } from '@heroicons/vue/solid'
const tiers = [
  {
    name: 'Hobby',
    href: '#',
    priceMonthly: 12,
    description: 'All the basics for starting a new business',
    includedFeatures: ['Potenti felis, in cras at at ligula nunc.', 'Orci neque eget pellentesque.'],
  },
  {
    name: 'Freelancer',
    href: '#',
    priceMonthly: 24,
    description: 'All the basics for starting a new business',
    includedFeatures: [
      'Potenti felis, in cras at at ligula nunc. ',
      'Orci neque eget pellentesque.',
      'Donec mauris sit in eu tincidunt etiam.',
    ],
  },
  {
    name: 'Startup',
    href: '#',
    priceMonthly: 32,
    description: 'All the basics for starting a new business',
    includedFeatures: [
      'Potenti felis, in cras at at ligula nunc. ',
      'Orci neque eget pellentesque.',
      'Donec mauris sit in eu tincidunt etiam.',
      'Faucibus volutpat magna.',
    ],
  },
  {
    name: 'Enterprise',
    href: '#',
    priceMonthly: 48,
    description: 'All the basics for starting a new business',
    includedFeatures: [
      'Potenti felis, in cras at at ligula nunc. ',
      'Orci neque eget pellentesque.',
      'Donec mauris sit in eu tincidunt etiam.',
      'Faucibus volutpat magna.',
      'Id sed tellus in varius quisque.',
      'Risus egestas faucibus.',
      'Risus cursus ullamcorper.',
    ],
  },
]

export default {
  data(){
    const rand = Math.floor(Math.random() * 9999999)
    return {
      value: 'https://mysterious-sands-71320.herokuapp.com/api/data/rak?rand='+rand,
      size: 300
    }
  },
  components:{
    QrcodeVue,
    CheckIcon
  },
  setup(){
    return {
      tiers,
    }
  }
}
</script>

<style>

</style>