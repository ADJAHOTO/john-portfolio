<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import { useI18n } from '../composables/useI18n'

const sectionRef = ref<HTMLElement | null>(null)
useScrollReveal(sectionRef)
const { t } = useI18n()

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const isSending = ref(false)
const showSuccess = ref(false)

const handleSubmit = async () => {
  isSending.value = true
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1500))
  isSending.value = false
  showSuccess.value = true

  // Reset form
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''

  setTimeout(() => {
    showSuccess.value = false
  }, 5000)
}
</script>

<template>
  <section ref="sectionRef" id="contact" class="py-24 px-6 lg:px-12 bg-surface-2 relative overflow-hidden">
    <div class="absolute inset-0 contact-gradient pointer-events-none"></div>

    <div class="max-w-[1536px] w-full mx-auto relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <!-- Left: Text content -->
        <div class="flex flex-col">
          <div
            data-reveal="up"
            class="inline-flex items-center gap-2 badge-bg border rounded-full px-4 py-1.5 mb-8 w-fit"
          >
            <span
              class="w-2 h-2 rounded-full bg-primary"
              style="animation: pulse-glow 2s infinite"
            ></span>
            <span class="text-xs font-medium text-primary">{{ t.contact.status }}</span>
          </div>

          <h2
            data-reveal="up"
            data-delay="1"
            class="font-heading font-bold text-4xl md:text-6xl text-on-surface leading-tight mb-8"
          >
            {{ t.contact.title }}<br />
            <span class="text-primary">{{ t.contact.subtitle }}</span>
          </h2>

          <div class="space-y-6 mb-12">
            <a
              data-reveal="up"
              data-delay="2"
              href="mailto:jeanbenissea@gmail.com"
              class="group flex items-center gap-4 text-lg md:text-xl font-semibold text-on-surface hover:text-primary transition-colors"
            >
              <span
                class="icon-circle w-12 h-12 rounded-full border border-surface flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 transition-all"
                >✉</span
              >
              jeanbenissea@gmail.com
            </a>
            <a
              data-reveal="up"
              data-delay="3"
              href="tel:+2290167152424"
              class="group flex items-center gap-4 text-lg md:text-xl font-semibold text-on-surface hover:text-primary transition-colors"
            >
              <span
                class="icon-circle w-12 h-12 rounded-full border border-surface flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 transition-all"
                >📱</span
              >
              +229 01 67 15 24 24
            </a>
            <a
              data-reveal="up"
              data-delay="4"
              href="https://wa.me/2290167152424"
              target="_blank"
              class="group flex items-center gap-4 text-lg md:text-xl font-semibold text-on-surface hover:text-[#25D366] transition-colors"
            >
              <span
                class="icon-circle w-12 h-12 rounded-full border border-surface flex items-center justify-center group-hover:bg-[#25D366]/10 group-hover:border-[#25D366]/30 transition-all"
                >🟢</span
              >
              {{ t.contact.whatsapp }}
            </a>
          </div>

          <div
            class="mt-auto pt-10 border-t border-surface/50 grid grid-cols-2 gap-8"
            data-reveal="up"
            data-delay="4"
          >
            <div>
              <p class="text-xs text-on-muted uppercase tracking-wider font-semibold mb-4">
                {{ t.contact.networks }}
              </p>
              <ul class="space-y-3">
                <li>
                  <a
                    href="https://linkedin.com/in/adjahoto-jean-benisse"
                    target="_blank"
                    class="text-sm text-on-surface hover:text-primary transition-colors font-medium"
                    >LinkedIn →</a
                  >
                </li>
                <li>
                  <a
                    href="https://github.com"
                    target="_blank"
                    class="text-sm text-on-surface hover:text-primary transition-colors font-medium"
                    >GitHub →</a
                  >
                </li>
              </ul>
            </div>
            <div>
              <p class="text-xs text-on-muted uppercase tracking-wider font-semibold mb-4">
                {{ t.contact.location }}
              </p>
              <p class="text-sm text-on-muted leading-relaxed">
                {{ t.contact.city }}<br />{{ t.contact.country }}
              </p>
            </div>
          </div>
        </div>

        <!-- Right: Contact Form -->
        <div
          class="card-bg border border-surface rounded-3xl p-8 md:p-12 shadow-2xl relative"
          data-reveal="right"
          data-delay="2"
        >
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="text-xs font-bold uppercase tracking-widest text-on-muted ml-1">{{
                  t.contact.form.name
                }}</label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full bg-surface-2 border border-surface rounded-xl px-5 py-4 text-on-surface focus:outline-none focus:border-primary transition-all text-sm placeholder:text-on-muted/30"
                  placeholder="John Doe"
                />
              </div>
              <div class="space-y-2">
                <label class="text-xs font-bold uppercase tracking-widest text-on-muted ml-1">{{
                  t.contact.form.email
                }}</label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full bg-surface-2 border border-surface rounded-xl px-5 py-4 text-on-surface focus:outline-none focus:border-primary transition-all text-sm placeholder:text-on-muted/30"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-xs font-bold uppercase tracking-widest text-on-muted ml-1">{{
                t.contact.form.subject
              }}</label>
              <input
                v-model="form.subject"
                type="text"
                required
                class="w-full bg-surface-2 border border-surface rounded-xl px-5 py-4 text-on-surface focus:outline-none focus:border-primary transition-all text-sm placeholder:text-on-muted/30"
                placeholder="Collaboration"
              />
            </div>

            <div class="space-y-2">
              <label class="text-xs font-bold uppercase tracking-widest text-on-muted ml-1">{{
                t.contact.form.message
              }}</label>
              <textarea
                v-model="form.message"
                required
                rows="4"
                class="w-full bg-surface-2 border border-surface rounded-xl px-5 py-4 text-on-surface focus:outline-none focus:border-primary transition-all text-sm placeholder:text-on-muted/30 resize-none"
                placeholder="..."
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSending"
              class="w-full bg-primary hover:bg-primary/90 text-white font-bold py-5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 group overflow-hidden relative shadow-lg shadow-primary/20"
            >
              <span
                v-if="!isSending"
                class="flex items-center gap-2 group-hover:scale-105 transition-transform"
                >{{ t.contact.form.send }} ✉</span
              >
              <span v-else class="flex items-center gap-2">
                <svg
                  class="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                {{ t.contact.form.sending }}
              </span>
            </button>

            <!-- Success message overlay -->
            <transition name="fade">
              <div
                v-if="showSuccess"
                class="absolute inset-0 bg-surface/95 flex flex-col items-center justify-center rounded-3xl p-8 text-center"
              >
                <div
                  class="w-16 h-16 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-3xl mb-4"
                >
                  ✓
                </div>
                <p class="text-on-surface font-bold text-xl">{{ t.contact.form.success }}</p>
              </div>
            </transition>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
