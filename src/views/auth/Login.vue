
<template>
  <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Masuk Portal Perpus SMEGA
        </h2>
      </div>
      <div v-if="loginFailed" class="backdrop-filter backdrop-blur-xl bg-opacity-30 py-2 px-2 bg-red-500 text-white rounded-md">
          Email atau password anda salah!
      </div>
      <form @submit.prevent="login" class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" v-model="user.email" name="email" type="email" autocomplete="email" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Email address" />
            <div v-if="validation.email" class="text-red-500 text-sm text-left">
              {{ validation.email[0] }}
            </div>
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" v-model="user.password" type="password" autocomplete="current-password" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Password" />
            <div v-if="validation.password" class="text-red-500 text-sm text-left">
              {{ validation.password[0] }}
            </div>
          </div>
        </div>
        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon class="h-5 w-5 text-blue-500 group-hover:text-blue-400" aria-hidden="true" />
            </span>
            Masuk
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { LockClosedIcon } from '@heroicons/vue/solid'
import {ref, reactive, onMounted} from 'vue'
import {useRouter} from 'vue-router'
import axios from 'axios'
import {useLoading} from 'vue-loading-overlay'

export default {
    setup(){
        const router = useRouter()
        const $loading = useLoading()
        const user = reactive({
            email: '',
            password: ''
        })
        const validation = ref([])

        const loginFailed = ref(null)
        onMounted(()=>{
          const token = localStorage.getItem('token')
          if(token){
            return router.push({
              name: 'dashboard'
            })
          }
        })
        function login(){
          const cancel = ()=>{
            console.log('User canceled the loader')
          }
          const loader = $loading.show({
            container: false,
            canCancel: true,
            onCancel: cancel,
            blur: '50px'
          })
            let email = user.email
            let password =  user.password

            axios.post('http://perpus.win/api/auth/login',{
                email,
                password
            }).then(response =>{
                if(response.data.success){
                    loader.hide()
                    localStorage.setItem('token', response.data.token)
                    return router.push({
                        name: 'dashboard'
                    })
                }
                loader.hide()
                loginFailed.value = true
            })
            .catch(error =>{
                validation.value = error.response.data
            })
            
        }

        return {
            user,
            validation,
            loginFailed,
            login,
        }
    },
  components: {
    LockClosedIcon,
  },
}
</script>