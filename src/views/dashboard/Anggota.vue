<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="max-w-6xl mx-auto">
    <div class="flex flex-col my-10">
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
                    Kategori
                  </th>
                  <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Stok
                  </th>
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="book in books" :key="book.id">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {{ book.judul }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ book.penulis }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ book.rak.name }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ book.stok }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a v-bind:href="'#/admin/buku/'+book.id" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                  </td>
                </tr>
              </tbody>
              <VueTailwindPagination class="min-w-full"
              :current="2"
              :total="total"
              :per-page="perPage"
              @page-changed="currentPage = onPageClick($event)"

              text-before-input="Sebelumnya"
              text-after-input="Selanjutnya"/>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import axios from 'axios'
import VueTailwindPagination from '@ocrv/vue-tailwind-pagination'
import { ref } from 'vue'

const books = ref([])
export default {
  components: {
    VueTailwindPagination
  },
  data(){
    return{
      currentPage: 0,
      perPage: 0,
      total: 0,
    }
  },
  methods:{
    onPageClick(event){
      this.currentPage = event
      this.getData(this.currentPage)
    },
    async getData(pageNumber){
      var response = await axios.get(
        `http://perpus.win/api/data/buku?page=${pageNumber}`
      )
      var responseData = response.data;
      this.currentPage = responseData.page
      this.perPage = responseData.per_page
      this.total = responseData.total
      books.value = responseData.data.data
    }
  },
  mounted(){
    this.currentPage = 1
    this.getData(this.currentPage)
  },
  setup() {
    return {
      books,
    }
  },
}
</script>