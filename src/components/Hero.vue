<script setup lang="ts">
import { useI18n } from '../composables/useI18n'
const { t } = useI18n()
</script>

<template>
  <section class="min-h-screen flex items-center relative overflow-hidden bg-surface pt-20 pb-16">
    <!-- Subtle gradient bg -->
    <div class="absolute inset-0 hero-gradient-1 pointer-events-none"></div>
    <div class="absolute inset-0 hero-gradient-2 pointer-events-none"></div>

    <div class="max-w-6xl mx-auto px-6 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        <!-- Text content (3/5) -->
        <div class="lg:col-span-3 order-2 lg:order-1">
          <!-- Status badge -->
          <div
            class="animate-fadeInUp delay-1 inline-flex items-center gap-2 badge-bg border rounded-full px-4 py-1.5 mb-8"
          >
            <span
              class="w-2 h-2 rounded-full bg-primary"
              style="animation: pulse-glow 2s infinite"
            ></span>
            <span class="text-xs font-medium text-primary">{{ t.hero.status }}</span>
          </div>

          <!-- Name -->
          <h1
            class="animate-fadeInUp delay-2 font-heading font-bold text-5xl md:text-6xl lg:text-[4rem] leading-[1.1] tracking-tight mb-6 text-on-surface"
          >
            {{ t.hero.greeting }}<br />
            <span class="text-primary">{{ t.hero.name }}</span>
          </h1>

          <!-- Description -->
          <p
            class="animate-fadeInUp delay-3 text-lg md:text-xl text-on-muted max-w-lg leading-relaxed mb-10"
            v-html="t.hero.description"
          ></p>

          <!-- CTAs -->
          <div class="animate-fadeInUp delay-4 flex flex-wrap gap-4">
            <a
              href="#projets"
              class="bg-primary hover:bg-primary/85 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5"
            >
              {{ t.hero.viewProjects }} →
            </a>
            <a
              href="#contact"
              class="btn-outline-theme border font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
            >
              {{ t.hero.contactMe }}
            </a>
            <a
              href="/src/assets/ADJAHOTO Jean Bénisse.pdf"
              download
              class="group border border-primary/20 hover:border-primary/50 text-primary px-8 py-3.5 rounded-full font-bold transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5"
            >
              <span class="text-lg group-hover:translate-y-0.5 transition-transform">⬇</span>
              {{ t.hero.downloadCV }}
            </a>
          </div>

          <!-- Quick stats -->
          <div class="animate-fadeInUp delay-5 flex gap-10 mt-14 pt-8 border-t stat-border">
            <div>
              <div class="text-3xl font-heading font-bold text-on-surface">15+</div>
              <div class="text-xs text-on-muted mt-1">{{ t.hero.stats.techs }}</div>
            </div>
            <div>
              <div class="text-3xl font-heading font-bold text-on-surface">5+</div>
              <div class="text-xs text-on-muted mt-1">{{ t.hero.stats.projects }}</div>
            </div>
            <div>
              <div class="text-3xl font-heading font-bold text-primary">L3</div>
              <div class="text-xs text-on-muted mt-1">{{ t.hero.stats.degree }}</div>
            </div>
          </div>
        </div>

        <!-- Photo (2/5) with animations -->
        <div class="lg:col-span-2 order-1 lg:order-2 flex justify-center animate-scaleIn delay-2">
          <div class="relative animate-float">
            <!-- Glow ring behind photo -->
            <div
              class="absolute -inset-4 rounded-3xl opacity-50"
              style="animation: glow-ring 3s ease-in-out infinite"
            ></div>

            <!-- Photo frame -->
            <div
              class="w-64 h-80 md:w-72 md:h-96 lg:w-80 lg:h-[420px] rounded-2xl overflow-hidden border border-surface shadow-2xl shadow-black/30 relative group"
            >
              <img
                src="/me.jpeg"
                alt="Jean Bénisse Adjahoto"
                class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />
              <!-- Overlay on hover -->
              <div
                class="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-500"
              ></div>
            </div>

            <!-- Decorative corners with animation -->
            <div
              class="absolute -top-3 -right-3 w-20 h-20 border-t-2 border-r-2 border-primary/50 rounded-tr-2xl transition-all duration-500 hover:border-primary"
            ></div>
            <div
              class="absolute -bottom-3 -left-3 w-20 h-20 border-b-2 border-l-2 border-primary/50 rounded-bl-2xl transition-all duration-500 hover:border-primary"
            ></div>

            <!-- Stack badge -->
            <div
              class="absolute -bottom-5 -right-5 stack-badge border rounded-xl px-4 py-3 shadow-xl animate-fadeInUp delay-5"
            >
              <p class="text-[10px] text-on-muted uppercase tracking-wider mb-1">
                {{ t.hero.stack }}
              </p>
              <p class="text-sm font-heading font-semibold text-on-surface">
                Vue · FastAPI · React
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Tech marquee banner -->
  <div class="marquee-bar py-3 overflow-hidden">
    <div class="flex whitespace-nowrap" style="animation: marquee 20s linear infinite">
      <span
        v-for="n in 8"
        :key="n"
        class="text-xs font-bold uppercase tracking-widest text-white/90 px-4"
      >
        Vue.js &nbsp;·&nbsp; React &nbsp;·&nbsp; FastAPI &nbsp;·&nbsp; Node.js &nbsp;·&nbsp;
        PostgreSQL &nbsp;·&nbsp; React Native &nbsp;·&nbsp; Firebase &nbsp;·&nbsp; MongoDB
        &nbsp;·&nbsp; Tailwind CSS &nbsp; ✦ &nbsp;
      </span>
    </div>
  </div>
</template>
