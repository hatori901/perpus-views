<template>
    <h2>{{ buku }}</h2>
</template>
<script>
import { onMounted, ref } from '@vue/runtime-core'
import {useRouter} from 'vue-router'
import axios from 'axios'
const buku = ref('')
export default {
    setup() {
        const router = useRouter()
        const id = router.currentRoute._value.params.id
        onMounted(()=>{
            axios.get('http://perpus.win/api/data/buku/get/'+id)
            .then(response =>{
                buku.value = response.data.data
            })
        })

        return {
            buku
        }
    },
}
</script>