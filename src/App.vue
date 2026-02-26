<script setup>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isHome = computed(() => route.path === '/')
</script>

<template>
  <div class="page-wrap">
    <SiteHeader />
    <main>
      <RouterView />
    </main>
    <SiteFooter v-if="isHome" />
  </div>
</template>
