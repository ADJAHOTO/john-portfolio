import { ref, watch } from 'vue'

const isDark = ref(true)

// Initialize from localStorage
const saved = localStorage.getItem('portfolio-theme')
if (saved) {
  isDark.value = saved === 'dark'
}

// Apply class on html element
function applyTheme() {
  const html = document.documentElement
  if (isDark.value) {
    html.classList.add('dark')
    html.classList.remove('light')
  } else {
    html.classList.add('light')
    html.classList.remove('dark')
  }
}

watch(isDark, () => {
  localStorage.setItem('portfolio-theme', isDark.value ? 'dark' : 'light')
  applyTheme()
}, { immediate: true })

export function useTheme() {
  return {
    isDark,
    toggle: () => { isDark.value = !isDark.value },
  }
}
