<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
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

// Contrôle de l'animation d'entrée de page
const pageReady = ref(false)
onMounted(() => {
  requestAnimationFrame(() => {
    setTimeout(() => { pageReady.value = true }, 50)
  })
})
</script>

<template>
  <main class="min-h-screen pt-32 pb-24 px-6 lg:px-12 bg-surface relative overflow-hidden">

    <!-- Particules de fond -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="particle particle-1"></div>
      <div class="particle particle-2"></div>
      <div class="particle particle-3"></div>
    </div>

    <!-- Gradient de fond subtil -->
    <div class="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
         style="background: radial-gradient(ellipse at top right, rgba(227,27,35,0.06), transparent 65%); border-radius: 50%;">
    </div>

    <div class="max-w-[1536px] mx-auto w-full relative z-10">

      <!-- Header animé -->
      <div class="flex flex-col gap-4 mb-16">

        <!-- Bouton retour -->
        <button
          @click="backHome"
          class="back-btn w-fit flex items-center gap-2 text-on-muted hover:text-primary transition-all duration-300 text-sm font-semibold mb-2 group"
          :class="pageReady ? 'animate-slideInLeft' : 'opacity-0'"
          style="animation-delay: 0.05s;"
        >
          <span class="inline-block group-hover:-translate-x-1 transition-transform duration-200">←</span>
          {{ lang === 'fr' ? 'Retour à l\'accueil' : 'Back to home' }}
        </button>

        <!-- Badge + Titre -->
        <div :class="pageReady ? 'animate-fadeInUp' : 'opacity-0'" style="animation-delay: 0.12s;">
          <span class="text-primary text-sm font-semibold uppercase tracking-wider">
            {{ t.projects.title }}
          </span>
          <h1 class="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mt-2 text-on-surface leading-tight">
            {{ lang === 'fr' ? 'Tous mes projets' : 'All my projects' }}
          </h1>
          <!-- Ligne décorative -->
          <div :class="pageReady ? 'line-reveal' : 'w-0'" class="mt-5 h-0.5 bg-gradient-to-r from-primary to-transparent rounded-full transition-all duration-1000" style="transition-delay: 0.4s;"></div>
        </div>

        <!-- Sous-titre -->
        <p
          :class="pageReady ? 'animate-fadeInUp' : 'opacity-0'"
          style="animation-delay: 0.22s;"
          class="text-on-muted max-w-2xl text-base leading-relaxed"
        >
          {{ t.projects.description }}
        </p>

        <!-- Compteur animé -->
        <div :class="pageReady ? 'animate-fadeInUp' : 'opacity-0'" style="animation-delay: 0.3s;" class="flex items-center gap-3 mt-2">
          <span class="text-3xl font-heading font-bold text-primary count-badge">{{ allProjects.length }}</span>
          <span class="text-on-muted text-sm">{{ lang === 'fr' ? 'projets réalisés' : 'completed projects' }}</span>
        </div>
      </div>

      <!-- Grille de projets avec stagger premium -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a
          v-for="(project, i) in allProjects"
          :key="project.title"
          :href="project.link"
          target="_blank"
          class="project-card group card-bg card-shimmer border rounded-2xl overflow-hidden block cursor-pointer"
          :class="pageReady ? 'animate-cardEntrance' : 'opacity-0'"
          :style="`animation-delay: ${0.3 + i * 0.1}s;`"
        >
          <!-- Image avec overlay premium -->
          <div class="aspect-video overflow-hidden relative">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <!-- Overlay gradient -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-300"></div>

            <!-- Badge featured -->
            <span
              v-if="project.featured"
              class="absolute top-3 right-3 bg-primary text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg"
            >
              {{ t.projects.status }}
            </span>

            <!-- Lien icon au hover -->
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400">
              <div class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-xl border border-white/30 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                ↗
              </div>
            </div>
          </div>

          <!-- Contenu -->
          <div class="p-6">
            <span class="text-primary text-xs font-semibold uppercase tracking-wider">{{ project.category }}</span>
            <h3 class="font-heading font-bold text-xl text-on-surface mt-2 mb-3 group-hover:text-primary transition-colors duration-300">
              {{ project.title }}
            </h3>
            <p class="text-sm text-on-muted leading-relaxed mb-5 line-clamp-2">{{ project.description }}</p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mt-auto">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="text-[11px] font-medium tag-bg px-3 py-1 rounded-full transition-all duration-200 group-hover:border-primary/20"
              >{{ tag }}</span>
            </div>
          </div>

          <!-- Barre de progression en bas de carte (couleur primaire) -->
          <div class="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-primary to-primary/30 transition-all duration-500 ease-out mt-auto"></div>
        </a>
      </div>

    </div>
  </main>
</template>

<style scoped>
/* Particules de fond */
.particle {
  position: absolute;
  border-radius: 50%;
  background: rgba(227, 27, 35, 0.12);
  animation: floatParticle 8s ease-in-out infinite;
  pointer-events: none;
}
.particle-1 { width: 300px; height: 300px; top: 10%; left: -100px; animation-delay: 0s; }
.particle-2 { width: 200px; height: 200px; top: 40%; right: -60px; animation-delay: 2.5s; }
.particle-3 { width: 150px; height: 150px; bottom: 15%; left: 30%; animation-delay: 5s; }

@keyframes floatParticle {
  0%, 100% { transform: translateY(0) scale(1); opacity: 0.4; }
  50%       { transform: translateY(-30px) scale(1.05); opacity: 0.7; }
}

/* Ligne décorative */
.line-reveal { width: 80px; }

/* Hover card avancé */
.project-card {
  transition: transform 0.45s cubic-bezier(0.16,1,0.3,1),
              box-shadow 0.45s ease,
              border-color 0.3s ease;
}
.project-card:hover {
  transform: translateY(-8px) scale(1.015);
  box-shadow: 0 24px 48px rgba(227,27,35,0.12), 0 8px 24px rgba(0,0,0,0.15);
  border-color: rgba(227,27,35,0.25);
}

/* Compteur animé */
.count-badge {
  position: relative;
  display: inline-block;
}
.count-badge::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #E31B23, transparent);
  border-radius: 4px;
  transform: scaleX(0);
  transform-origin: left;
  animation: scaleXIn 0.8s cubic-bezier(0.16,1,0.3,1) 0.8s both;
}
@keyframes scaleXIn {
  to { transform: scaleX(1); }
}

/* Bouton retour amélioré */
.back-btn {
  padding: 6px 0;
  position: relative;
}
.back-btn::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: currentColor;
  transition: width 0.3s ease;
}
.back-btn:hover::after { width: 100%; }
</style>
