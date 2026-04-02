import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Composable to add scroll-triggered reveal animations.
 * Watches children with [data-reveal] attribute and adds 'revealed' class when visible.
 */
export function useScrollReveal(containerRef: ReturnType<typeof ref<HTMLElement | null>>) {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )

    if (containerRef.value) {
      const elements = containerRef.value.querySelectorAll('[data-reveal]')
      elements.forEach((el) => observer?.observe(el))
    }
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}
