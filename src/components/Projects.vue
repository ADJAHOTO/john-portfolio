<script setup lang="ts">
import { ref, computed } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import { useI18n } from '../composables/useI18n'

const sectionRef = ref<HTMLElement | null>(null)
useScrollReveal(sectionRef)
const { t } = useI18n()

const projects = computed(() => [
  {
    title: 'K-Talent',
    category: t.value.projects.items.ktalent.category,
    description: t.value.projects.items.ktalent.description,
    tags: ['Vue.js', 'Pinia', 'FastAPI', 'PostgreSQL', 'Docker'],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop',
    featured: true,
  },
  {
    title: 'TaskFlow',
    category: t.value.projects.items.taskflow.category,
    description: t.value.projects.items.taskflow.description,
    tags: ['Next.js', 'PostgreSQL', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop',
    featured: false,
  },
  {
    title: 'LinguaIA',
    category: t.value.projects.items.linguaia.category,
    description: t.value.projects.items.linguaia.description,
    tags: ['Next.js', 'Firebase', 'OpenAI'],
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop',
    featured: false,
  },
])
</script>

<template>
  <section ref="sectionRef" id="projets" class="py-24 px-6 lg:px-12 bg-surface">
    <div class="max-w-[1536px] mx-auto w-full">
      <div class="flex flex-col gap-6 mb-16">
        <div data-reveal="up">
          <span class="text-primary text-sm font-semibold uppercase tracking-wider">{{ t.projects.title }}</span>
          <h2 class="font-heading font-bold text-4xl md:text-5xl mt-2 text-on-surface">{{ t.projects.subtitle }}</h2>
        </div>
        <p data-reveal="up" data-delay="2" class="text-on-muted max-w-2xl text-base leading-relaxed">{{ t.projects.description }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(project, i) in projects"
          :key="project.title"
          data-reveal="up"
          :data-delay="i + 1"
          class="group card-bg border rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
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
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in project.tags" :key="tag" class="text-[11px] font-medium tag-bg px-3 py-1 rounded-full">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
