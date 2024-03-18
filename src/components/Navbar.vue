<template>
  <nav class="col-12 custom-navbar navbar navbar-expand-sm px-3">
    <div v-for="link in navLinks" :key="link.id" class="col-2 d-flex justify-content-center align-items-center">
      <a v-if="link.id === heroSection.id" @click="scrollTo(link.id)" class="link d-flex">
        <div class="nav-logo">
          <Logo />
        </div>
      </a>
      <div v-else class="shadow-lg fw-bold pt-5 mt-5" style="z-index: 2;">
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
            <a v-if="link.id !== heroSection.id" :href="`#${link.id}`" :title="link.title" class="nav-link" @click="scrollTo(link.id)">{{ link.name }}</a>
          </a>
        </li>
      </ul>
      <!-- LOGIN COMPONENT HERE -->
      <Login />
    </div>
  </nav>
</template>

<script>
import { computed, ref } from 'vue';
import * as data from '../constants/index'
import Logo from '../components/Logo.vue';
import { scrollTo } from '../utils/scrollTo';
import Login from './Login.vue';

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
    Login,
  },
}
</script>

<style scoped>
@import url('../assets/font/Healing Bestie/stylesheet.css');

.custom-navbar {
  position: fixed;
  top: -6.5rem;
  left: 0;
  font-family: 'Healing Bestie Demo';
  text-shadow: 0 2px 0 var(--retro-cream), 0 0px 20px var(--retro-blue);
  width: 100%;
  height: 150px;
  z-index: 2;
  &::after {
    content:'';
    position: absolute;
    top: 1rem;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(transparent 0%, #ffecb400 70%, #ffecb490 100%), url(../assets/img/bg-trees-navbar.png);
    background-size: cover;
    background-position: 100% 60%;
    background-repeat: no-repeat;
    opacity: 0.85;
    filter: drop-shadow(0 5px 10px var(--retro-blue));
  }
  &:before {
    box-shadow: inset 0 -5px 10px 0 var(--retro-cream);
    mix-blend-mode: overlay;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
  }
  .nav-logo {
    position: relative;
    top: 3.5rem;
    left: 1rem;
    width: 100px;
    z-index: 2;
  }
}
button, a {
  text-decoration: none;
  color: var(--retro-brown);
  outline: 0 !important;
  border: 0 !important;
  height: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
}

a:hover {
  text-decoration: none;
}

@media screen and (max-width: 500px) {
  nav {
    max-width: 100%;
    .nav-link {
      display: none;
    }
    button, a {
      all: unset !important;
    }
    .navbar-toggler-icon {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2rem;
      height: 2rem;
      font-size: 2rem;
      color: var(--retro-brown);
      z-index: 1000 !important;
    }
  }
}
</style>