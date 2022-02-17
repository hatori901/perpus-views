<template>
  <div class="min-h-screen">
    <div class="max-w-7xl mx-auto">
    <h2 class="text-2xl my-4">Daftar Buku Perpustakaan SMEGA</h2>
    <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Judul
                </th>
                <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Penulis
                </th>
                <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Penerbit
                </th>
                <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stok
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(book, personIdx) in buku" :key="book.email" :class="personIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {{ book.judul }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ book.penulis }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ book.penerbit }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ book.stok }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
import {ref, onMounted} from 'vue'
import axios from 'axios'


export default {
  setup() {
    const buku = ref('')
    onMounted(() => {
        axios.get('http://perpus.win/api/data/buku')
        .then(response => {
            buku.value = response.data.data.data
        })
    })
    return {
      buku,
    }
  },
}
</script>