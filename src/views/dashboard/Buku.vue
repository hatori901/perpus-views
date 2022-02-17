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
              <Pagination
                    :total-pages="total_pages"
                    :total="total"
                    :per-page="perpage"
                    :current-page="currentPage"
                    @pagechanged="onPageClick"
                  />
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'
import Pagination from '@/components/Pagination.vue'

const books = ref('')
export default {
  components: {
    Pagination
  },
  data(){
    return {
        currentPage: 0,
        total: 0,
        total_pages:0,
        perpage:0
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
      this.currentPage = response.data.data.page
      this.perPage = response.data.data.per_page
      this.total = response.data.data.total
      this.totalPages = response.data.data.length - 2
      books.value = response.data.data.data
      console.log(response.data);
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