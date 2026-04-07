<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useScrollReveal } from '../composables/useScrollReveal'
import { useI18n } from '../composables/useI18n'
import { useLoader } from '../composables/useLoader'
import osonsImage from '../assets/Projects/osons.png'
import ktalentImage from '../assets/Projects/talent.png'
import shopverseImage from '../assets/Projects/shopverse.png'

const sectionRef = ref<HTMLElement | null>(null)
useScrollReveal(sectionRef)
const { t } = useI18n()
const router = useRouter()
const { showLoader, hideLoader } = useLoader()

const navigateToAllProjects = () => {
  showLoader()
  setTimeout(() => {
    router.push('/projects').then(() => {
      setTimeout(hideLoader, 300)
    })
  }, 1200)
}

const projects = computed(() => [
  {
    title: 'K-Talent',
    category: t.value.projects.items.ktalent.category,
    description: t.value.projects.items.ktalent.description,
    tags: ['Vue.js', 'Pinia', 'FastAPI', 'Tailwind CSS', 'TypeScript', 'PostgreSQL', 'Docker'],
    image: ktalentImage,
    featured: true,
    link: '#',
  },
  {
    title: 'Osons',
    category: t.value.projects.items.osons.category,
    description: t.value.projects.items.osons.description,
    tags: ['Vue.js', 'Pinia', 'Tailwind CSS', 'FastAPI', 'PostgreSQL', 'Docker'],
    image: osonsImage,
    featured: false,
    link: 'https://osonsbenin.org/',
  },
  {
    title: 'ShopVerse',
    category: t.value.projects.items.shopverse.category,
    description: t.value.projects.items.shopverse.description,
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript, framer-motion'],
    image: shopverseImage,
    featured: false,
    link: 'https://benadjahoto-shop-modern.vercel.app/',
  },
])
</script>

<template>
  <section ref="sectionRef" id="projets" class="py-24 px-6 lg:px-12 bg-surface relative overflow-hidden">

    <!-- Background decoration -->
    <div class="absolute bottom-0 left-0 w-96 h-96 pointer-events-none"
         style="background: radial-gradient(ellipse at bottom left, rgba(227,27,35,0.05), transparent 70%); border-radius: 50%;">
    </div>

    <div class="max-w-[1536px] mx-auto w-full relative z-10">

      <!-- Header -->
      <div class="flex flex-col gap-4 mb-16">
        <div data-reveal="up">
          <span class="text-primary text-sm font-semibold uppercase tracking-wider">{{ t.projects.title }}</span>
          <h2 class="font-heading font-bold text-4xl md:text-5xl mt-2 text-on-surface">{{ t.projects.subtitle }}</h2>
        </div>
        <p data-reveal="up" data-delay="2" class="text-on-muted max-w-2xl text-base leading-relaxed">{{ t.projects.description }}</p>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a
          v-for="(project, i) in projects"
          :key="project.title"
          :href="project.link"
          target="_blank"
          data-reveal="up"
          :data-delay="i + 1"
          class="project-card group card-bg card-shimmer border rounded-2xl overflow-hidden block cursor-pointer"
        >
          <!-- Image zone -->
          <div class="aspect-video overflow-hidden relative">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>

            <!-- Featured badge -->
            <span
              v-if="project.featured"
              class="absolute top-3 right-3 bg-primary text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg"
            >
              {{ t.projects.status }}
            </span>

            <!-- Arrow reveal on hover -->
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400">
              <div class="w-11 h-11 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-lg border border-white/30 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                ↗
              </div>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <span class="text-primary text-xs font-semibold uppercase tracking-wider">{{ project.category }}</span>
            <h3 class="font-heading font-bold text-2xl text-on-surface mt-2 mb-3 group-hover:text-primary transition-colors duration-300">
              {{ project.title }}
            </h3>
            <p class="text-sm text-on-muted leading-relaxed mb-5 line-clamp-2">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mt-auto">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="text-[11px] font-medium tag-bg px-3 py-1 rounded-full"
              >{{ tag }}</span>
            </div>
          </div>

          <!-- Underline accent -->
          <div class="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-primary to-primary/20 transition-all duration-500 ease-out"></div>
        </a>
      </div>

      <!-- CTA -->
      <div class="mt-16 flex justify-center" data-reveal="up" data-delay="4">
        <button
          @click="navigateToAllProjects"
          class="cta-btn group relative btn-outline-theme border font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 overflow-hidden"
        >
          <!-- Glow bg on hover -->
          <span class="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-full"></span>
          <span class="relative">{{ t.projects.seeAll }}</span>
          <span class="relative group-hover:translate-x-2 transition-transform duration-300 text-primary">→</span>
        </button>
      </div>

    </div>
  </section>
</template>

<style scoped>
.project-card {
  transition: transform 0.45s cubic-bezier(0.16,1,0.3,1),
              box-shadow 0.45s ease,
              border-color 0.3s ease;
}
.project-card:hover {
  transform: translateY(-8px) scale(1.012);
  box-shadow: 0 24px 48px rgba(227,27,35,0.1), 0 8px 24px rgba(0,0,0,0.12);
  border-color: rgba(227,27,35,0.2);
}

.cta-btn {
  box-shadow: 0 0 0 1px rgba(227,27,35,0.1);
}
.cta-btn:hover {
  box-shadow: 0 8px 24px rgba(227,27,35,0.15), 0 0 0 1px rgba(227,27,35,0.2);
}
</style>
