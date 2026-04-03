<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from '../composables/useI18n'

const router = useRouter()
const { lang, t } = useI18n()

const backHome = () => {
  router.push('/')
}

const allProjects = computed(() => [
  {
    title: 'K-Talent',
    category: t.value.projects.items.ktalent.category,
    description: t.value.projects.items.ktalent.description,
    tags: ['Vue.js', 'Pinia', 'FastAPI', 'PostgreSQL', 'Docker'],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop',
    featured: true,
    link: '#',
  },
  {
    title: 'Osons',
    category: t.value.projects.items.osons.category,
    description: t.value.projects.items.osons.description,
    tags: ['Vue.js', 'Pinia', 'FastAPI', 'PostgreSQL', 'Docker'],
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop',
    featured: false,
    link: '#',
  },
  {
    title: 'LinguaIA',
    category: t.value.projects.items.linguaia.category,
    description: t.value.projects.items.linguaia.description,
    tags: ['Next.js', 'Firebase', 'OpenAI'],
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop',
    featured: false,
    link: '#',
  },
  {
    title: 'E-Shopify',
    category: t.value.projects.items.eshopify.category,
    description: t.value.projects.items.eshopify.description,
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop',
    featured: true,
    link: '#',
  },
  {
    title: 'CryptoTracker',
    category: t.value.projects.items.cryptotracker.category,
    description: t.value.projects.items.cryptotracker.description,
    tags: ['Vue.js', 'Tailwind', 'CoinGecko API'],
    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=2069&auto=format&fit=crop',
    featured: false,
    link: '#',
  },
  {
    title: 'TravelDiary',
    category: t.value.projects.items.traveldiary.category,
    description: t.value.projects.items.traveldiary.description,
    tags: ['Nuxt 3', 'Supabase', 'Leaflet'],
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2035&auto=format&fit=crop',
    featured: false,
    link: '#',
  },
  {
    title: 'FitApp',
    category: t.value.projects.items.fitapp.category,
    description: t.value.projects.items.fitapp.description,
    tags: ['React Native', 'Firebase', 'Redux'],
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
    featured: false,
    link: '#',
  },
  {
    title: 'AgencySite',
    category: t.value.projects.items.agencysite.category,
    description: t.value.projects.items.agencysite.description,
    tags: ['Astro', 'Tailwind', 'GSAP'],
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop',
    featured: false,
    link: '#',
  },
  {
    title: 'SmartHome Auth',
    category: t.value.projects.items.smarthome.category,
    description: t.value.projects.items.smarthome.description,
    tags: ['Vue.js', 'FastAPI', 'WebSockets'],
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop',
    featured: true,
    link: '#',
  }
])
</script>

<template>
  <main class="min-h-screen pt-32 pb-24 px-6 lg:px-12 bg-surface">
    <div class="max-w-[1536px] mx-auto w-full">
      <!-- Header -->
      <div class="flex flex-col gap-6 mb-16 relative">
        <button 
          @click="backHome"
          class="w-fit flex items-center gap-2 text-on-muted hover:text-primary transition-colors text-sm font-semibold mb-4"
        >
          <span>←</span> {{ lang === 'fr' ? 'Retour à l\'accueil' : 'Back to home' }}
        </button>
        
        <div>
          <span class="text-primary text-sm font-semibold uppercase tracking-wider">{{ t.projects.title }}</span>
          <h1 class="font-heading font-bold text-4xl md:text-5xl mt-2 text-on-surface">
            {{ lang === 'fr' ? 'Tous mes projets' : 'All my projects' }}
          </h1>
        </div>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a
          v-for="(project, i) in allProjects"
          :key="project.title"
          :href="project.link"
          target="_blank"
          class="group card-bg border rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 animate-fadeInUp block cursor-pointer"
          :style="{ animationDelay: `${(i % 3) * 100}ms` }"
        >
          <div class="aspect-video overflow-hidden relative">
            <img :src="project.image" :alt="project.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <span v-if="project.featured" class="absolute top-3 right-3 bg-primary text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
              {{ t.projects.status }}
            </span>
          </div>
          <div class="p-6">
            <span class="text-primary text-xs font-semibold uppercase tracking-wider">{{ project.category }}</span>
            <h3 class="font-heading font-bold text-2xl text-on-surface mt-2 mb-3 group-hover:text-primary transition-colors duration-300">{{ project.title }}</h3>
            <p class="text-sm text-on-muted leading-relaxed mb-5">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mt-auto">
              <span v-for="tag in project.tags" :key="tag" class="text-[11px] font-medium tag-bg px-3 py-1 rounded-full">{{ tag }}</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </main>
</template>
