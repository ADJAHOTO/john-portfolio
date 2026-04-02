<script setup lang="ts">
import { useI18n } from '../composables/useI18n'
const { t } = useI18n()
</script>

<template>
  <footer class="bg-surface pt-20 pb-10 border-t border-surface overflow-hidden relative">
    <!-- Decorative background elements -->
    <div
      class="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -mr-48 -mt-48"
    ></div>
    <div
      class="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -ml-32 -mb-32"
    ></div>

    <div class="max-w-6xl mx-auto px-6 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <!-- Logo & Tagline -->
        <div class="col-span-1 lg:col-span-2">
          <a
            href="#"
            class="font-heading font-bold text-2xl tracking-tighter text-on-surface mb-6 block"
          >
            JB<span class="text-primary">.</span>
          </a>
          <p class="text-on-muted max-w-xs leading-relaxed mb-8">
            Digital Creator & Fullstack Developer. Transforming complex ideas into elegant digital
            solutions.
          </p>
          <div class="flex gap-4">
            <a
              href="https://linkedin.com/in/adjahoto-jean-benisse"
              target="_blank"
              class="w-10 h-10 rounded-full border border-surface card-bg flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all"
              >in</a
            >
            <a
              href="https://github.com"
              target="_blank"
              class="w-10 h-10 rounded-full border border-surface card-bg flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all"
              >gh</a
            >
          </div>
        </div>

        <!-- Links -->
        <div>
          <h4 class="font-heading font-bold text-sm uppercase tracking-widest text-on-surface mb-6">
            {{ t.nav.projects }}
          </h4>
          <ul class="space-y-4">
            <li>
              <a href="#projets" class="text-on-muted hover:text-primary transition-colors text-sm"
                >K-Talent</a
              >
            </li>
            <li>
              <a href="#projets" class="text-on-muted hover:text-primary transition-colors text-sm"
                >LinguaIA</a
              >
            </li>
            <li>
              <a href="#projets" class="text-on-muted hover:text-primary transition-colors text-sm"
                >TaskFlow</a
              >
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="font-heading font-bold text-sm uppercase tracking-widest text-on-surface mb-6">
            {{ t.nav.contact }}
          </h4>
          <ul class="space-y-4">
            <li class="text-sm text-on-muted flex items-start gap-3">
              <span class="text-primary">📍</span>
              {{ t.contact.city }}, {{ t.contact.country }}
            </li>
            <li class="text-sm text-on-muted flex items-center gap-3">
              <span class="text-primary">✉</span>
              jeanbenissea@gmail.com
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div
        class="pt-8 border-t border-surface/50 flex flex-col md:flex-row justify-between items-center gap-6"
      >
        <p class="text-xs text-on-muted">© 2026 Jean Bénisse Adjahoto. All Rights Reserved.</p>
        <p class="text-xs text-on-muted font-medium">
          {{ t.contact.madeWith }}
        </p>
      </div>
    </div>
  </footer>
</template>
