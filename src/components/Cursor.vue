<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

// Custom smooth cursor
const cursorRef = ref<HTMLDivElement | null>(null)
const cursorDotRef = ref<HTMLDivElement | null>(null)

const mouse = { x: 0, y: 0 }
const cursor = { x: 0, y: 0 }
let raf: number

function lerp(a: number, b: number, t: number) { return a + (b - a) * t }

function updateCursor() {
  cursor.x = lerp(cursor.x, mouse.x, 0.1)
  cursor.y = lerp(cursor.y, mouse.y, 0.1)
  if (cursorRef.value) {
    cursorRef.value.style.transform = `translate(${cursor.x - 24}px, ${cursor.y - 24}px)`
  }
  if (cursorDotRef.value) {
    cursorDotRef.value.style.transform = `translate(${mouse.x - 3}px, ${mouse.y - 3}px)`
  }
  raf = requestAnimationFrame(updateCursor)
}

onMounted(() => {
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX
    mouse.y = e.clientY
  })
  raf = requestAnimationFrame(updateCursor)
})
</script>

<template>
  <!-- CUSTOM CURSOR -->
  <div ref="cursorRef" class="pointer-events-none fixed top-0 left-0 z-[9999] w-12 h-12 rounded-full border border-rouge/60 transition-transform duration-0 hidden md:block"></div>
  <div ref="cursorDotRef" class="pointer-events-none fixed top-0 left-0 z-[9999] w-1.5 h-1.5 rounded-full bg-rouge hidden md:block"></div>
</template>
