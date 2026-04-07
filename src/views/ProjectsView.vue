<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from '../composables/useI18n'
import ktalentImage from '../assets/Projects/talent.png'
import osonsImage from '../assets/Projects/osons.png'
import shopverseImage from '../assets/Projects/shopverse.png'
import taskflowImage from '../assets/Projects/taskflow.png'
import beningastroImage from '../assets/Projects/beningastro.png'
import linguaiaImage from '../assets/Projects/linguaai.png'


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
    tags: ['Vue.js', 'Pinia', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'PostgreSQL', 'Docker'],
    image: ktalentImage,
    featured: true,
    link: '#',
  },
  {
    title: 'Osons',
    category: t.value.projects.items.osons.category,
    description: t.value.projects.items.osons.description,
    tags: ['Vue.js', 'Pinia', 'FastAPI', 'Tailwind CSS', 'PostgreSQL', 'Docker'],
    image: osonsImage,
    featured: false,
    link: 'https://osonsbenin.org/',
  },
  {
    title: 'ShopVerse',
    category: t.value.projects.items.shopverse.category,
    description: t.value.projects.items.shopverse.description,
    tags: ['Vue.js', 'Pinia', 'FastAPI', 'Tailwind CSS', 'PostgreSQL', 'Docker'],
    image: shopverseImage,
    featured: true,
    link: 'https://benadjahoto-shop-modern.vercel.app/',
  },
  {
    title: 'LinguaIA',
    category: t.value.projects.items.linguaia.category,
    description: t.value.projects.items.linguaia.description,
    tags: ['Next.js', 'Firebase', 'Tailwindcss', 'TypeScript', 'OpenAI'],
    image: linguaiaImage,
    featured: false,
    link: '#',
  },
  
  {
    title: 'TaskFlow',
    category: t.value.projects.items.taskflow.category,
    description: t.value.projects.items.taskflow.description,
    tags: ['Vue.js', 'Tailwind', 'CoinGecko API'],
    image: taskflowImage,
    featured: false,
    link: 'https://taskflow-peach-alpha.vercel.app/',
  },
  {
    title: 'BeninGastro',
    category: t.value.projects.items.beningastro.category,
    description: t.value.projects.items.beningastro.description,
    tags: ['Vue.js', 'Tailwind', 'CoinGecko API'],
    image: beningastroImage,
    featured: false,
    link: 'https://beningastro.netlify.app/',
  },
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
