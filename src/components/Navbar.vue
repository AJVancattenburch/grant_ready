<template>
  <nav class="col-12 custom-navbar navbar navbar-expand-sm">
    <div v-for="link in navLinks" :key="link.id" class="col-2 d-flex justify-content-center align-items-center">
      <a v-if="link.id === heroSection.id" @click="scrollTo(link.id)" class="link d-flex">
        <div class="nav-logo">
          <Logo />
        </div>
      </a>
      <div v-else class="d-flex justify-content-center align-items-center text-black fw-bold fs-1 pt-5 mt-5" style="z-index: 1000;">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a v-if="link.URL" :href="link.URL" class="nav-link">{{ link.title }}</a>
          </li>
        </ul>
      </div>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <!-- DROPDOWN COMPONENT HERE -->
      <div>
      </div>
      <!--  CONTENT -->
    </div>
    </div>
  </nav>
</template>

<script>
import { computed, ref } from 'vue';
import { navLinks } from '../constants/index';
import * as data from '../constants/index'
import Logo from '../components/Logo.vue';
import { scrollTo } from '../utils/scrollTo';

export default {
  setup() {

    const navLinks = ref(data.navLinks)
    
    const heroSection = ref(data.heroSection)
    const aboutSection = ref(data.aboutSection)
    const servicesSection = ref(data.servicesSection.services.map(s => {
      return {
        ...s,
        header: s.header,
        icon: s.icon,
        content: s.content
      }
    }))
    const testimonialsSection = ref(data.testimonialsSection.testimonials.map(t => {
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

<style scoped>
.custom-navbar {
  position: fixed;
  top: -6.5rem;
  left: 0;
  width: 100%;
  height: 150px;
  z-index: 1000;
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
    filter: drop-shadow(0 5px 10px var(--blue-vintage));
  }
  &:before {
    box-shadow: inset 0 -5px 10px 0 var(--cream-vintage);
    mix-blend-mode: overlay;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    mix-blend-mode: overlay;
    z-index: 0;
  }
  .nav-logo {
    position: relative;
    top: 3.5rem;
    left: 1rem;
    width: 100px;
    z-index: 1000;
  }
}
.link {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

@media screen and (min-width: 576px) {
  nav {
  }
}
</style>