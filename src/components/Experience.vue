<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import { useI18n } from '../composables/useI18n'

const sectionRef = ref<HTMLElement | null>(null)
useScrollReveal(sectionRef)
const { t } = useI18n()
</script>

<template>
  <section ref="sectionRef" id="parcours" class="py-24 px-6 bg-surface">
    <div class="max-w-4xl mx-auto">
      <div class="mb-16" data-reveal="up">
        <span class="text-primary text-sm font-semibold uppercase tracking-wider">{{ t.experience.title }}</span>
        <h2 class="font-heading font-bold text-4xl md:text-5xl mt-2 text-on-surface">{{ t.experience.subtitle }}</h2>
      </div>

      <div class="space-y-1">
        <div
          v-for="(exp, i) in t.experience.items"
          :key="i"
          data-reveal="left"
          :data-delay="i + 1"
          class="group grid grid-cols-1 md:grid-cols-[140px,1fr] gap-4 md:gap-8 p-6 rounded-xl hover:bg-primary/[0.03] transition-all duration-300 border border-transparent hover:border-surface"
        >
          <div class="flex items-start gap-3">
            <span
              class="mt-1.5 w-2.5 h-2.5 rounded-full shrink-0"
              :class="exp.period === t.experience.active ? 'bg-primary' : 'bg-on-muted/30'"
              :style="exp.period === t.experience.active ? 'animation: pulse-glow 2s infinite;' : ''"
            ></span>
            <span class="text-sm font-semibold" :class="exp.period === t.experience.active ? 'text-primary' : 'text-on-muted'">{{ exp.period }}</span>
          </div>
          <div>
            <h3 class="font-heading font-bold text-xl text-on-surface group-hover:text-primary transition-colors mb-1">{{ exp.company }}</h3>
            <p class="text-sm text-on-muted italic mb-1">{{ exp.role }}</p>
            <p v-if="exp.project" class="text-xs text-primary/80 font-semibold mb-3">{{ exp.project }}</p>
            <ul class="space-y-1">
              <li v-for="task in exp.tasks" :key="task" class="text-sm text-on-muted leading-relaxed flex items-start gap-2">
                <span class="text-primary mt-1 text-xs">▸</span>
                {{ task }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
