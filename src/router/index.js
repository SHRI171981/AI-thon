import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import UploadView from '@/views/UploadView.vue'
import SettingView from '@/views/SettingView.vue'
import ResultView from '@/views/ResultView.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/upload',
      name: 'upload',
      component: UploadView
    },
    {
      path: '/result',
      name: 'result',
      component: ResultView
    },
    {
      path: '/setting',
      name: 'setting',
      component: SettingView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
    path: '/camera',
    name: 'CameraCapture',
    component: CaptureCamera
    }
  ],
})

export default router
