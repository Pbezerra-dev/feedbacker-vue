<template>
  <modal-factory />
  <router-view/>
</template>

<script>
import ModalFactory from './components/ModalFactory'
import services from './services'
import { useRouter, useRoute } from 'vue-router'
import { watch } from 'vue'

export default {
  components: { ModalFactory },
  setup () {
    const router = useRouter()
    const route = useRoute()

    watch(() => route.path, async () => {
      if (route.meta.hasAuth) {
        const token = window.localStorage.getItem('token')

        if (!token) {
          router.push({ name: 'Home' })
          return
        }

        const { data } = await services.users.getMe()
        console.log(data)
      }
    })
  }
}
</script>
