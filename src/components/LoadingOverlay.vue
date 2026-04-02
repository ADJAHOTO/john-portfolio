<script setup lang="ts">
import { useI18n } from '../composables/useI18n'

const props = defineProps<{
  isVisible: boolean
}>()

const { t } = useI18n()
</script>

<template>
  <transition name="fade-overlay">
    <div
      v-if="isVisible"
      class="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-background backdrop-blur-xl"
    >
      <div class="relative flex items-center justify-center w-24 h-24 mb-6">
        <!-- Outer ringing -->
        <span class="absolute inset-0 border-4 border-surface rounded-full"></span>
        <span
          class="absolute inset-0 border-4 border-primary rounded-full border-t-transparent animate-spin"
        ></span>
        <!-- Inner glow -->
        <div class="w-10 h-10 bg-primary/20 rounded-full animate-pulse blur-xl"></div>
      </div>
      <p class="font-heading font-bold text-xl text-on-surface tracking-widest uppercase animate-pulse">
        {{ t.Loading }}
      </p>
    </div>
  </transition>
</template>

<style scoped>
.fade-overlay-enter-active,
.fade-overlay-leave-active {
  transition: opacity 0.5s ease, backdrop-filter 0.5s ease;
}

.fade-overlay-enter-from,
.fade-overlay-leave-to {
  opacity: 0;
  backdrop-filter: blur(0px);
}
</style>
