import { ref } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'

export const useCarStore = defineStore('car', () => {
  const carId = ref(0)

  function goToCarPage(event: Event, carName: string, id: number) {
    event.preventDefault()
    carId.value = id
    localStorage.setItem('carId', JSON.stringify(id))
    router.push(`/car/${carName}`)
  }

  return { carId, goToCarPage }
})
