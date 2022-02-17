import { createRouter, createWebHashHistory } from 'vue-router'
import Landing from '../views/layouts/Landing.vue'
import Dashboard from '../views/layouts/Dashboard.vue'
const routes = [
  {
    path: '/',
    component: Landing,
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/scanner',
        name: 'scanner',
        component: () => import('../views/Scan.vue')
      },
      {
        path: '/daftar-buku',
        name: 'daftar',
        component: () => import('../views/Daftar.vue')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
      },
      {
        path: '/admin/login',
        name: 'login',
        component: ()=> import('../views/auth/Login.vue')
      },
    ]
  },
  
  {
    path: '/dashboard',
    component: Dashboard,
    children: [
      {
        path: '/admin',
        name: 'dashboard',
        component: ()=> import('../views/dashboard/Index.vue')
      },
      {
        path: '/admin/kategori',
        name: 'kategori',
        component: ()=> import('../views/dashboard/Kategori.vue')
      },
      {
        path: '/admin/buku',
        name: 'buku',
        component: ()=> import('../views/dashboard/Buku.vue')
      }
      ,{
        path: '/admin/buku/:id',
        name: 'editBuku',
        component: ()=> import('../views/dashboard/EditBuku.vue')
      },
      {
        path: '/admin/anggota',
        name: 'anggota',
        component:()=> import('../views/dashboard/Anggota.vue')
      }
    ]
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
