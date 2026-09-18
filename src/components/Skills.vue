<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import { useI18n } from '../composables/useI18n'

const sectionRef = ref<HTMLElement | null>(null)
useScrollReveal(sectionRef)
const { t } = useI18n()

// Tech logos using devicon CDN
const techsRow1 = [
  { name: 'Vue.js',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',           level: 85 },
  { name: 'React',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',           level: 75 },
  { name: 'Next.js',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',         level: 65 },
  { name: 'TypeScript',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', level: 75 },
  { name: 'Tailwind',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',level: 90 },
  { name: 'JavaScript',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', level: 85 },
  { name: 'HTML5',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',           level: 95 },
  { name: 'CSS3',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',             level: 90 },
]

const techsRow2 = [
  { name: 'Python',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',         level: 80 },
  { name: 'FastAPI',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',       level: 75 },
  { name: 'Node.js',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',         level: 70 },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', level: 75 },
  { name: 'MongoDB',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',       level: 70 },
  { name: 'Firebase',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg',        level: 75 },
  { name: 'Git',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',               level: 85 },
  { name: 'Docker',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',         level: 50 },
]

const skillGroups = computed(() => [
  {
    title: t.value.skills.groups.frontend,
    icon: '◆',
    color: 'from-red-500/20 to-orange-400/10',
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
    color: 'from-blue-500/20 to-cyan-400/10',
    skills: [
      { name: 'FastAPI (Python)', level: 75 },
      { name: 'Node.js / Express', level: 65 },
      { name: 'API REST', level: 85 },
    ]
  },
  {
    title: t.value.skills.groups.tools,
    icon: '○',
    color: 'from-purple-500/20 to-pink-400/10',
    skills: [
      { name: 'React Native', level: 60 },
      { name: 'PostgreSQL / MongoDB', level: 70 },
      { name: 'Firebase', level: 75 },
      { name: 'Git / GitHub', level: 85 },
    ]
  },
])

const isBarVisible = ref(false)
const barSection = ref<HTMLElement | null>(null)

onMounted(() => {
  if (barSection.value) {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          isBarVisible.value = true
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(barSection.value)
  }
})
</script>

<template>
  <section ref="sectionRef" id="competences" class="py-24 px-6 lg:px-12 bg-surface-2 overflow-hidden">
    <div class="max-w-[1536px] mx-auto w-full">

      <!-- Header -->
      <div class="mb-16" data-reveal="up">
        <span class="text-primary text-sm font-semibold uppercase tracking-wider">{{ t.skills.title }}</span>
        <h2 class="font-heading font-bold text-4xl md:text-5xl mt-2 text-on-surface">{{ t.skills.subtitle }}</h2>
        <p class="text-on-muted mt-4 max-w-lg text-sm leading-relaxed">{{ t.skills.description }}</p>
        <!-- Ligne décorative animée -->
        <div class="mt-6 h-0.5 w-16 bg-gradient-to-r from-primary to-transparent rounded-full" style="animation: lineGrow 1.2s cubic-bezier(0.16,1,0.3,1) both 0.4s;"></div>
      </div>

      <!-- ===== SECTION MARQUEE PREMIUM ===== -->
      <div data-reveal="up" data-delay="1" class="mb-20">
        <!-- Rangée 1 → gauche -->
        <div class="marquee-wrapper relative overflow-hidden mb-4 group">
          <!-- Dégradés latéraux pour effet fade -->
          <div class="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style="background: linear-gradient(to right, var(--bg-fade, #111) 0%, transparent 100%);"></div>
          <div class="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style="background: linear-gradient(to left, var(--bg-fade, #111) 0%, transparent 100%);"></div>

          <div class="marquee-track marquee-track-left py-2">
            <!-- Dupliqué pour le loop infini -->
            <div v-for="n in 2" :key="'r1-' + n" class="flex gap-3 mr-3">
              <div
                v-for="tech in techsRow1"
                :key="tech.name + '-r1-' + n"
                class="tech-card-3d card-shimmer flex items-center gap-3 px-5 py-3 rounded-xl border whitespace-nowrap cursor-default select-none tech-logo-card"
                :title="tech.name + ' — ' + tech.level + '%'"
              >
                <div class="relative w-7 h-7 shrink-0">
                  <img :src="tech.icon" :alt="tech.name" class="w-full h-full object-contain" />
                </div>
                <span class="text-sm font-heading font-semibold text-on-surface">{{ tech.name }}</span>
                <!-- Niveau sous forme de mini dot -->
                <span class="text-[10px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded-full">{{ tech.level }}%</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Rangée 2 ← droite (direction inverse) -->
        <div class="marquee-wrapper relative overflow-hidden group">
          <div class="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style="background: linear-gradient(to right, var(--bg-fade, #111) 0%, transparent 100%);"></div>
          <div class="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style="background: linear-gradient(to left, var(--bg-fade, #111) 0%, transparent 100%);"></div>

          <div class="marquee-track marquee-track-right py-2">
            <div v-for="n in 2" :key="'r2-' + n" class="flex gap-3 mr-3">
              <div
                v-for="tech in techsRow2"
                :key="tech.name + '-r2-' + n"
                class="tech-card-3d card-shimmer flex items-center gap-3 px-5 py-3 rounded-xl border whitespace-nowrap cursor-default select-none tech-logo-card"
                :title="tech.name + ' — ' + tech.level + '%'"
              >
                <div class="relative w-7 h-7 shrink-0">
                  <img :src="tech.icon" :alt="tech.name" class="w-full h-full object-contain" />
                </div>
                <span class="text-sm font-heading font-semibold text-on-surface">{{ tech.name }}</span>
                <span class="text-[10px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded-full">{{ tech.level }}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ===== BARRES DE COMPÉTENCES ===== -->
      <div ref="barSection" class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(group, gi) in skillGroups"
          :key="group.title"
          data-reveal="up"
          :data-delay="gi + 1"
          class="skill-group-card card-bg border rounded-2xl p-8 relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/8 hover:-translate-y-2"
        >
          <!-- Fond dégradé subtil propre à chaque groupe -->
          <div :class="`absolute inset-0 bg-gradient-to-br ${group.color} pointer-events-none rounded-2xl opacity-40`"></div>

          <!-- Titre du groupe -->
          <h3 class="font-heading font-bold text-lg text-on-surface mb-8 flex items-center gap-3 relative">
            <span class="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-sm animate-iconPop" :style="`animation-delay: ${gi * 0.15}s`">
              {{ group.icon }}
            </span>
            {{ group.title }}
          </h3>

          <!-- Skills -->
          <div class="space-y-6 relative">
            <div v-for="(skill, si) in group.skills" :key="skill.name" class="group/skill">
              <div class="flex justify-between items-center mb-2.5">
                <span class="text-sm text-on-surface/85 font-medium group-hover/skill:text-on-surface transition-colors">{{ skill.name }}</span>
                <span
                  class="text-xs font-bold text-primary font-heading tabular-nums transition-all duration-300"
                  :style="{
                    opacity: isBarVisible ? 1 : 0,
                    transform: isBarVisible ? 'translateY(0)' : 'translateY(4px)',
                    transition: `all 0.4s ease ${gi * 0.2 + si * 0.15 + 0.5}s`
                  }"
                >
                  {{ skill.level }}%
                </span>
              </div>
              <!-- Track -->
              <div class="h-1.5 skill-bar-track rounded-full overflow-hidden">
                <div
                  class="h-full rounded-full relative overflow-hidden"
                  :style="{
                    width: isBarVisible ? skill.level + '%' : '0%',
                    background: 'linear-gradient(90deg, #E31B23 0%, rgba(227,27,35,0.5) 100%)',
                    transition: `width 1.4s cubic-bezier(0.16,1,0.3,1) ${gi * 0.2 + si * 0.15 + 0.3}s`
                  }"
                >
                  <!-- Shimmer interne sur la barre -->
                  <div
                    class="absolute inset-0 shimmer-bar"
                    :style="`animation-delay: ${gi * 0.2 + si * 0.15 + 1.5}s`"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.shimmer-bar {
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%);
  animation: shimmer 2.5s ease-in-out infinite;
}

@keyframes shimmer {
  0%   { transform: translateX(-100%); }
  100% { transform: translateX(100%);  }
}

/* Fix couleur de fond du fade marquee selon le thème */
:global(html.dark) .marquee-wrapper [style*="bg-fade"] {
  --bg-fade: #111111;
}
:global(html.light) .marquee-wrapper [style*="bg-fade"] {
  --bg-fade: #f0f0f0;
}

/* Fond marquee adapté au thème */
:global(html.dark) .marquee-wrapper > div:first-child,
:global(html.dark) .marquee-wrapper > div:nth-child(2) {
  background: linear-gradient(to right, #111111 0%, transparent 100%) !important;
}
:global(html.dark) .marquee-wrapper > div:nth-child(2) {
  background: linear-gradient(to left, #111111 0%, transparent 100%) !important;
}
:global(html.light) .marquee-wrapper > div:first-child {
  background: linear-gradient(to right, #f0f0f0 0%, transparent 100%) !important;
}
:global(html.light) .marquee-wrapper > div:nth-child(2) {
  background: linear-gradient(to left, #f0f0f0 0%, transparent 100%) !important;
}

.skill-group-card { isolation: isolate; }
</style>
