import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const systemName = ref('Vue Demo')
  return {
    systemName
  }
})
