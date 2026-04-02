<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useTheme } from '../composables/useTheme'
import { useI18n } from '../composables/useI18n'

const { isDark, toggle } = useTheme()
const { lang, t, toggleLang } = useI18n()
const scrolled = ref(false)
const menuOpen = ref(false)

const onScroll = () => { scrolled.value = window.scrollY > 50 }

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const links = computed(() => [
  { label: t.value.nav.about, href: '#a-propos' },
  { label: t.value.nav.projects, href: '#projets' },
  { label: t.value.nav.skills, href: '#competences' },
  { label: t.value.nav.path, href: '#parcours' },
  { label: t.value.nav.contact, href: '#contact' },
])
</script>

<template>
  <nav
    class="fixed top-0 left-0 w-full z-[100] transition-all duration-500"
    :class="scrolled
      ? 'py-3 nav-bg backdrop-blur-xl shadow-lg shadow-black/10 border-b border-surface'
      : 'py-5 bg-transparent'"
  >
    <div class="max-w-[1536px] mx-auto px-6 lg:px-12 w-full flex items-center justify-between">
      <a href="#" class="font-heading font-bold text-xl tracking-tight text-on-surface hover:text-primary transition-colors">
        John<span class="text-primary">.</span>
      </a>

      <!-- Desktop links -->
      <div class="hidden md:flex items-center gap-8">
        <a
          v-for="link in links" :key="link.label"
          :href="link.href"
          class="text-sm text-on-muted hover:text-on-surface transition-colors duration-300 font-medium"
        >{{ link.label }}</a>

        <div class="flex items-center gap-2">
          <!-- Language toggle -->
          <button
            @click="toggleLang"
            class="h-10 px-3 rounded-full flex items-center justify-center border border-surface card-bg hover:border-primary/30 transition-all duration-300 hover:scale-110 text-xs font-bold uppercase tracking-widest text-on-surface"
            :title="lang === 'fr' ? 'Switch to English' : 'Passer au Français'"
          >
            {{ lang }}
          </button>

          <!-- Theme toggle -->
          <button
            @click="toggle"
            class="w-10 h-10 rounded-full flex items-center justify-center border border-surface card-bg hover:border-primary/30 transition-all duration-300 hover:scale-110"
            :title="isDark ? 'Mode clair' : 'Mode sombre'"
          >
            <span v-if="isDark" class="text-lg">☀️</span>
            <span v-else class="text-lg">🌙</span>
          </button>
        </div>

        <a href="#contact" class="text-sm font-semibold bg-primary hover:bg-primary/80 text-white px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
          {{ t.nav.cta }}
        </a>
      </div>

      <!-- Mobile: lang + theme + hamburger -->
      <div class="md:hidden flex items-center gap-3">
        <button @click="toggleLang" class="h-9 px-2 rounded-full flex items-center justify-center border border-surface card-bg text-[10px] font-bold uppercase tracking-widest text-on-surface">
          {{ lang }}
        </button>
        <button @click="toggle" class="w-9 h-9 rounded-full flex items-center justify-center border border-surface card-bg">
          <span v-if="isDark" class="text-base">☀️</span>
          <span v-else class="text-base">🌙</span>
        </button>
        <button @click="menuOpen = !menuOpen" class="flex flex-col gap-1.5 p-2">
          <span class="w-6 h-0.5 bg-current text-on-surface transition-all" :class="menuOpen ? 'rotate-45 translate-y-2' : ''"></span>
          <span class="w-6 h-0.5 bg-current text-on-surface transition-all" :class="menuOpen ? 'opacity-0' : ''"></span>
          <span class="w-4 h-0.5 bg-current text-on-surface transition-all" :class="menuOpen ? '-rotate-45 -translate-y-2 w-6' : ''"></span>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
      v-if="menuOpen"
      class="md:hidden absolute top-full left-0 w-full bg-surface border-b border-surface py-6 px-6 flex flex-col gap-4 animate-fadeIn"
    >
      <a
        v-for="link in links" :key="link.label"
        :href="link.href"
        @click="menuOpen = false"
        class="text-on-muted hover:text-on-surface text-lg font-medium py-2"
      >{{ link.label }}</a>
    </div>
  </nav>
</template>
