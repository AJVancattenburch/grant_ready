<template>
  <nav class="col-12 custom-navbar navbar navbar-expand-sm px-3">
    <div v-for="link in navLinks" :key="link.id" class="col-2 d-flex justify-content-center align-items-center">
      <a v-if="link.id === heroSection.id" @click="scrollTo(link.id)" class="link d-flex">
        <div class="nav-logo position-fixed top-0">
          <Logo />
        </div>
      </a>
      <div v-else class="desktop-links shadow-lg fw-bold pt-5 mt-5" style="z-index: 2;">
        <ul class="navbar-nav d-flex justify-content-center align-items-center pt-3 fs-5">
          <li class="nav-item">
            <a v-if="link.id === 'linkedin'" target="_blank" :href="link.external_URL" title="Visit My LinkedIn Profile" class="nav-link">{{ link.name }}<i :class="`mdi ${link.icon} ps-1 pb-1`"></i></a>
            <a v-else @click="scrollTo(link.id)" :title="link.title" class="nav-link">{{ link.name }}</a>
          </li>
        </ul>
      </div>
    </div>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">
        <li>
          <a v-for="link in navLinks" :key="link.id">
            <a v-if="link.id === 'linkedin'" target="_blank" :href="link.external_URL" title="Visit My LinkedIn Profile" class="nav-link">{{ link.name }}<i :class="`mdi ${link.icon} ps-1 pb-1`"></i></a>
            <a v-else-if="link.id !== heroSection.id" @click="scrollTo(link.id)" :title="link.title" class="nav-link">{{ link.name }}</a>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { computed, ref } from 'vue';
import * as data from '../constants/index'
import Logo from '../components/Logo.vue';
import { scrollTo } from '../utils/scrollTo';

export default {
  setup() {

    const navLinks = ref(data.nav_links)
    
    const isMobile = computed(() => window.innerWidth < 500)
    const heroSection = ref(data.hero)
    const aboutSection = ref(data.about)
    const servicesSection = ref(data.service_section.services.map(s => {
      return {
        ...s,
        header: s.header,
        icon: s.icon,
        content: s.content
      }
    }))
    const testimonialsSection = ref(data.testimonial_section.testimonials.map(t => {
      return {
        ...t,
        name: t.name,
        content: t.content
      }
    }))

    return {
      scrollTo,
      navLinks,
      heroSection,
      aboutSection,
      servicesSection,
      testimonialsSection
    }
  },
  components: {
    Logo,
  },
}
</script>

<style scoped lang="scss">
@import url('../assets/scss/_navbar.scss');
</style>