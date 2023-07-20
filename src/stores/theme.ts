import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDarkModeStore = defineStore('theme', () => {
  const isDarkMode = ref(false)

  function toggleTheme() {
    isDarkMode.value = !isDarkMode.value
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode.value))

    isDarkMode.value
      ? document.body.setAttribute('data-theme', 'dark')
      : document.body.setAttribute('data-theme', 'light')
  }

  return { isDarkMode, toggleTheme }
})
