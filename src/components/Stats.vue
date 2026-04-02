<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const statsRef = ref(null)

const stats = [
  { value: '15+', label: 'Technologies maîtrisées', color: 'text-rouge' },
  { value: '05+', label: 'Projets en entreprise', color: 'text-white' },
  { value: '04', label: 'Ans de formation', color: 'text-rouge' },
  { value: '100%', label: 'Énergie créative', color: 'text-white' },
]

onMounted(() => {
  const cards = sectionRef.value.querySelectorAll('.stat-card')
  gsap.from(cards, {
    scrollTrigger: { trigger: sectionRef.value, start: 'top 80%' },
    y: 60,
    opacity: 0,
    duration: 0.9,
    stagger: 0.15,
    ease: 'power3.out',
  })
})
</script>

<template>
  <section ref="sectionRef" class="py-32 bg-gris overflow-hidden">
    <div class="container mx-auto px-6 max-w-7xl">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-1">
        <div
          v-for="(stat, i) in stats" :key="i"
          class="stat-card group px-10 py-12 border border-white/5 hover:border-rouge/30 transition-all duration-700 hover:bg-rouge/5 text-center"
        >
          <div class="text-6xl lg:text-8xl font-syne font-black tracking-tighter mb-3" :class="stat.color">
            {{ stat.value }}
          </div>
          <p class="text-[10px] font-syne font-bold uppercase tracking-[0.4em] text-white/30 group-hover:text-white/60 transition-colors duration-500">
            {{ stat.label }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
