<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import { useI18n } from '../composables/useI18n'

const sectionRef = ref<HTMLElement | null>(null)
useScrollReveal(sectionRef)
const { t } = useI18n()
</script>

<template>
  <section ref="sectionRef" id="a-propos" class="py-24 px-6 lg:px-12 bg-surface-2 overflow-hidden">
    <div class="max-w-6xl mx-auto w-full text-center">
      <div data-reveal="up">
        <span class="text-primary text-sm font-semibold uppercase tracking-wider">{{ t.about.title }}</span>
        <h2 class="font-heading font-bold text-4xl md:text-5xl mt-2 mb-10 text-on-surface">{{ t.about.subtitle }}</h2>
      </div>

      <div class="card-bg border border-surface rounded-3xl p-8 md:p-12 shadow-xl relative text-left" data-reveal="up" data-delay="1">
        <p class="text-xl md:text-2xl text-on-surface/90 font-medium leading-relaxed mb-10 border-l-4 border-primary pl-6 py-2">
          {{ t.about.description }}
        </p>

        <div class="space-y-6 text-on-muted leading-relaxed text-base md:text-lg">
          <p v-for="(p, index) in t.about.content" :key="index" v-html="p"></p>
        </div>

        <div class="mt-12 pt-8 border-t border-surface flex flex-col sm:flex-row items-center gap-6">
          <div class="flex -space-x-3">
            <div v-for="i in 3" :key="i" class="w-12 h-12 rounded-full border-4 border-surface-2 bg-primary/10 flex items-center justify-center text-lg shadow-sm">
              {{ ['⚡', '💻', '🚀'][i-1] }}
            </div>
          </div>
          <p class="text-sm md:text-base font-heading font-bold italic text-primary tracking-wide">
            {{ t.about.signature }}
          </p>
        </div>
        
        <!-- Subtle background decoration inside the card -->
        <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-primary rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-spin-slow {
  animation: spin 15s linear infinite;
}
.animate-reverse-spin-slow {
  animation: reverse-spin 10s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
@keyframes reverse-spin {
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
}
</style>
