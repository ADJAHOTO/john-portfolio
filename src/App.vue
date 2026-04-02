<script setup lang="ts">
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import WhatsAppFab from './components/WhatsAppFab.vue'
import LoadingOverlay from './components/LoadingOverlay.vue'
import { useLoader } from './composables/useLoader'

const { isLoading } = useLoader()
</script>

<template>
  <div class="min-h-screen bg-background selection:bg-primary selection:text-white">
    <Navigation />

    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <Footer />
    <WhatsAppFab />
    <LoadingOverlay :isVisible="isLoading" />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
