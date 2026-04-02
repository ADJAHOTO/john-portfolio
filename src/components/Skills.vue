<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import { useI18n } from '../composables/useI18n'

const sectionRef = ref<HTMLElement | null>(null)
useScrollReveal(sectionRef)
const { t } = useI18n()

// Tech logos using devicon CDN
const techsRow1 = [
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg', level: 85 },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', level: 75 },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', level: 65 },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', level: 75 },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', level: 90 },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', level: 85 },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', level: 95 },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', level: 90 },
]

const techsRow2 = [
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', level: 80 },
  { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg', level: 75 },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', level: 70 },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', level: 75 },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', level: 70 },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg', level: 75 },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', level: 85 },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', level: 50 },
]

const skillGroups = computed(() => [
  {
    title: t.value.skills.groups.frontend,
    icon: '◆',
    skills: [
      { name: 'Vue.js / Pinia', level: 85 },
      { name: 'React / Next.js', level: 75 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'TypeScript', level: 70 },
    ]
  },
  {
    title: t.value.skills.groups.backend,
    icon: '◇',
    skills: [
      { name: 'FastAPI (Python)', level: 75 },
      { name: 'Node.js / Express', level: 65 },
      { name: 'API REST', level: 85 },
    ]
  },
  {
    title: t.value.skills.groups.tools,
    icon: '○',
    skills: [
      { name: 'React Native', level: 60 },
      { name: 'PostgreSQL / MongoDB', level: 70 },
      { name: 'Firebase', level: 75 },
      { name: 'Git / GitHub', level: 85 },
    ]
  },
])

const isBarVisible = ref(false)

function onBarSection(el: HTMLElement) {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        isBarVisible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.2 }
  )
  observer.observe(el)
}

const barSection = ref<HTMLElement | null>(null)
onMounted(() => {
  if (barSection.value) onBarSection(barSection.value)
})
</script>

<template>
  <section ref="sectionRef" id="competences" class="py-24 px-6 bg-surface-2 overflow-hidden">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="mb-16" data-reveal="up">
        <span class="text-primary text-sm font-semibold uppercase tracking-wider">{{ t.skills.title }}</span>
        <h2 class="font-heading font-bold text-4xl md:text-5xl mt-2 text-on-surface">{{ t.skills.subtitle }}</h2>
        <p class="text-on-muted mt-4 max-w-lg text-sm leading-relaxed">{{ t.skills.description }}</p>
      </div>

      <!-- MARQUEE ROW 1: Frontend & UI (scrolls right) -->
      <div data-reveal="fade" data-delay="1" class="mb-6 overflow-hidden">
        <div class="flex whitespace-nowrap" style="animation: marquee 40s linear infinite;">
          <div v-for="n in 4" :key="'r1-' + n" class="flex shrink-0 gap-8 pr-8">
            <div
              v-for="tech in techsRow1"
              :key="tech.name + n"
              class="tech-logo-card flex items-center gap-4 border rounded-xl px-6 py-3.5 shrink-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 group"
            >
              <img :src="tech.icon" :alt="tech.name" class="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
              <div>
                <p class="text-sm font-heading font-semibold text-on-surface whitespace-nowrap">{{ tech.name }}</p>
                <p class="text-[10px] text-primary font-bold">{{ tech.level }}%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- MARQUEE ROW 2: Backend & Tools (scrolls left) -->
      <div data-reveal="fade" data-delay="2" class="mb-16 overflow-hidden">
        <div class="flex whitespace-nowrap" style="animation: marquee-reverse 45s linear infinite;">
          <div v-for="n in 4" :key="'r2-' + n" class="flex shrink-0 gap-8 pr-8">
            <div
              v-for="tech in techsRow2"
              :key="tech.name + n"
              class="tech-logo-card flex items-center gap-4 border rounded-xl px-6 py-3.5 shrink-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 group"
            >
              <img :src="tech.icon" :alt="tech.name" class="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
              <div>
                <p class="text-sm font-heading font-semibold text-on-surface whitespace-nowrap">{{ tech.name }}</p>
                <p class="text-[10px] text-primary font-bold">{{ tech.level }}%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Detailed skill bars -->
      <div ref="barSection" class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(group, gi) in skillGroups"
          :key="group.title"
          data-reveal="up"
          :data-delay="gi + 1"
          class="card-bg border rounded-2xl p-8 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
        >
          <h3 class="font-heading font-bold text-lg text-on-surface mb-8 flex items-center gap-3">
            <span class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm">{{ group.icon }}</span>
            {{ group.title }}
          </h3>
          <div class="space-y-6">
            <div v-for="(skill, si) in group.skills" :key="skill.name">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm text-on-surface/80">{{ skill.name }}</span>
                <span class="text-xs font-bold text-primary font-heading">{{ skill.level }}%</span>
              </div>
              <div class="h-2 skill-bar-track rounded-full overflow-hidden">
                <div
                  class="h-full bg-gradient-to-r from-primary to-primary/40 rounded-full"
                  :style="{
                    width: isBarVisible ? skill.level + '%' : '0%',
                    transition: `width 1.2s cubic-bezier(0.16,1,0.3,1) ${gi * 0.2 + si * 0.15 + 0.3}s`
                  }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
