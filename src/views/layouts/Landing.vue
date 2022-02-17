<template>
  <div class="z-20 fixed w-full mx-auto">
    <Popover class="relative w-full max-w-7xl md:my-3 rounded-lg backdrop-filter backdrop-blur-md bg-opacity-20 shadow-md bg-blue-500 mx-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span class="sr-only">Workflow</span>
            <h2 class="text-gray-700 font-bold text-2xl">PERPUS SMEGA</h2>
          </a>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span class="sr-only">Open menu</span>
            <MenuIcon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden md:flex space-x-10">
            <router-link router-link :to="{name: 'Home'}" class="mx-5 text-gray-700 text-md font-bold">Home</router-link>
            <router-link :to="{name: 'About'}" class="mx-5 text-gray-700 text-md font-bold">About</router-link>
            <router-link :to="{name: 'daftar'}" class="mx-5 text-gray-700 text-md font-bold">Daftar Buku</router-link>
            <router-link v-if="!auth" :to="{name: 'login'}" class="mx-5 text-gray-700 text-md font-bold">Login</router-link>
            <router-link v-if="auth" :to="{name: 'dashboard'}" class="mx-5 text-gray-700 text-md font-bold">Dashboard</router-link>
        </PopoverGroup>
      </div>
    </div>

    <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <PopoverPanel focus class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
              </div>
              <div class="-mr-2">
                <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <router-link router-link :to="{name: 'Home'}" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-5">Home</router-link>
                <router-link router-link :to="{name: 'About'}" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-5">Tentang</router-link>
                <router-link router-link :to="{name: 'daftar'}" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-5">Daftar Buku</router-link>
                <router-link router-link v-if="!auth" :to="{name: 'login'}" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-5">Portal</router-link>
                <router-link router-link v-if="auth" :to="{name: 'dashboard'}" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-5">Portal</router-link>
              </nav>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
  </div>
  <div>
      <div class="absolute bg-purple-400 md:bg-blue-500 rounded-full right-48 top-20" style="width:500px;height:500px"/>
      <div class="absolute bg-purple-500 rounded-full left-10 bottom-28" style="width:200px;height:200px"/>
      <Particles
                id="tsparticles"
                :particlesInit="particlesInit"
                :particlesLoaded="particlesLoaded"
                :options="{
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: false,
                            },
                            onHover: {
                                enable: false,
                            },
                            resize: true
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40
                            },
                            push: {
                                quantity: 4
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: '#89ade0'
                        },
                        links: {
                            color: '#467bb3',
                            distance: 150,
                            enable: true,
                            opacity: 5,
                            width: 2
                        },
                        collisions: {
                            enable: true
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outMode: 'bounce',
                            random: false,
                            speed: 5,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800
                            },
                            value: 50
                        },
                        opacity: {
                            value: 0.5
                        },
                        shape: {
                            type: 'circle'
                        },
                        size: {
                            random: true,
                            value: 5
                        }
                    },
                    detectRetina: true
                }"
        />
      <router-view class="backdrop-filter backdrop-blur-lg bg-opacity-5 pt-28 z-10"/>
  </div>
</template>

<script>
import {ref,onMounted} from 'vue'
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import {
  MenuIcon,
  XIcon,
} from '@heroicons/vue/outline'


export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    MenuIcon,
    XIcon,
  },
  setup() {
    const token = localStorage.getItem('token')
    const auth = ref(false)
    onMounted(()=> {
      if(token){
        auth.value = true
      }
    })
    return {
      auth
    }
  },
}
</script>