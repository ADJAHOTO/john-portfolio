<script setup lang="ts">
import Navigation from './components/Navigation.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Experience from './components/Experience.vue'
import Contact from './components/Contact.vue'
import Cursor from './components/Cursor.vue'
</script>

<template>
  <div class="min-h-screen bg-background selection:bg-primary selection:text-white">
    <Cursor />
    <Navigation />
    
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  </div>
</template>
