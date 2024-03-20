<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <span>©2024 AJ Vancattenburch | All Rights Reserved </span>
    <div class="col-4 d-flex justify-content-end">
      <span>Contact Website Creator:</span>
      <a href="https://my3dlandingpage.web.app/" target="_blank">
        <i class="mdi mdi-web" title="Creator's Portfolio Website">Website</i>
      </a>
      <a href="https://my3dlandingpage.web.app/" target="_blank">
        <i class="mdi mdi-web" title="Creator's Portfolio Website">Website</i>
      </a>
      <a href="https://my3dlandingpage.web.app/" target="_blank">
        <i class="mdi mdi-web" title="Creator's Portfolio Website">Website</i>
      </a>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root{
  --main-height: calc(100vh - 32px - 64px);
}

* {
  font-family: 'Futura' Condensed Medium;
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
}

footer {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 35px;
  color: var(--retro-cream);
  font-weight: 500;
  background-color: var(--retro-brown);
  position: fixed;
  bottom: 0;
  z-index: 2;
}
</style>
