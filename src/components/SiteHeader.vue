<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isHome = computed(() => route.path === '/')
</script>

<template>
  <header class="topbar">
    <div class="container topbar-inner">
      <RouterLink class="brand" to="/" aria-label="PT Communications & Technology home">
        <span class="brand-mark">PT</span>
        <span class="brand-text">
          Communications<br /><em>&amp; Technology</em>
        </span>
      </RouterLink>

      <nav class="nav" aria-label="Primary">
        <template v-if="isHome">
          <a href="#WhatWeOffer">What We Offer</a>
          <a href="#Empower">Empower Yourself</a>
          <a href="#different">Freelancers Connect</a>
          <a href="#contact">Contact</a>
        </template>
        <template v-else>
          <RouterLink :to="{ path: '/', hash: '#services' }">Services</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#success' }">Success Stories</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#different' }">What Makes Us Different</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#contact' }">Contact</RouterLink>
        </template>
      </nav>
    </div>
  </header>
</template>
