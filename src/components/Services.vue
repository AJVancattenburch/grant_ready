<template>
  <section class="d-flex flex-column align-items-center services-section">
    <h1 class="col-12 services-header text-center p-2">{{ serviceSection.header }}</h1>

    <div class="container horizontal-accordion my-5">
      <div
        v-for="service in services"
        class="card choice unset small pt-0 p-4 mx-1"
        :key="service.name"
        @click="toggleActiveService(service.name)"
        :class="`${service.name}-icon`"
        :style="{
          backgroundColor: service.backgroundColor,
          color: service.textColor
        }"
      >
        <div class="card-header text-capitalize pt-2 d-flex justify-content-center" :class="`${service.name}-header`">
          <img :src="service.icon" class="header-icon col-2 img-fluid" width="auto" alt="">
          <span class="col-10">{{ service.name }}</span>
        </div>
        <div class="card-body pt-0 mt-0" :class="`${service.name}-body`">
          <p class="card-text p-3 pt-0 mt-0">{{ service.content }}</p>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { service_section } from '../constants/index.js'
import { logger } from "../utils/Logger.js"

export default {
  setup() {

    const serviceSection = ref(service_section)
    const services = computed(() => serviceSection.value.services)
    const activeSection = computed(() => services.value.find(s => s.isExpanded))

    //Expands default card when section is scrolled into view
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const choice = document.querySelector(".planning-icon")
          choice.classList.remove("small")
          choice.classList.add("default-expand")
          observer.unobserve(entry.target)
        }
      })
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
      once: true
    })
    
    const toggleActiveService = (section) => {
      activeSection.value = section
      const choiceArray = document.querySelectorAll(".choice")
      choiceArray.forEach((card) => {
          card.addEventListener("click", () => {
            choiceArray.forEach((element) => {
              element.classList.remove("default-expand", "expand", "unset")
              element.classList.add("small")

              element.setAttribute("data-text", element.querySelector(".card-header").textContent)
            })
            card.classList.remove("small")
            card.classList.add("expand")
            card.classList.add("card-header")
          });
      });
    }

    onMounted(() => {
      const defaultServiceCard = activeSection.value
      logger.log(defaultServiceCard)
      activeSection.value = observer
      const choiceArray = document.querySelectorAll(".choice")
      choiceArray.forEach((element) => {
        const setHeaderContent = element.setAttribute("data-text", element.querySelector(".card-header").textContent)
        if (defaultServiceCard) {
          observer.observe(element)
          setHeaderContent
        } else {
          element.classList.remove("expand", "unset", "card-header")
          element.classList.add('small')
        }
      })
    })

    return {
      observer,
      serviceSection,
      services,
      activeSection,
      toggleActiveService,
      textColor: computed(() => `${services.value.map(s => s.textColor)}`),
      backgroundColor: computed(() => `url(${services.value.backgroundColor})`),
    }
  }
}
</script>

<style scoped lang="scss">
@import url('../assets/font/Mystical Woods/stylesheet.css');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  z-index: 1;
}

.services-section {
  position: relative;
  height: 100vh;
  width: 100%;
  display: block;
  .services-header {
    position: relative;
    color: var(--retro-cream);
    font-family: 'Healing Bestie Demo';
    font-size: 3rem;
    background: var(--shadow-retro-red);
    border: 5px groove var(--shadow-retro-orange);
    border-right: 0;
    border-left: 0;
    filter: drop-shadow(0 0 5px var(--shadow-retro-cream));
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url(../assets/img/woodgrain-texture.png);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      opacity: .25;
    }
  }

  .container {
    position: relative;
    display: flex;
    width: 100%;
    padding: 0;
  }
  .card-header {
    position: relative;
    top: 0;
    border: 0;
    background: transparent;
    height: 100px;
    > .header-icon {
      position: absolute;
      top: 0;
      left: 10%;
      width: 100px;
      height: 100px;
    }
    > span {
      width: 100%;
      height: 100px;
      display: grid;
      place-content: center;
      align-items: center;
      font-size: 2.5rem;
      text-shadow: 0 1px 0 var(--retro-cream);
    
    }
  }
  .choice {
    position: relative;
    height: 500px;
    box-sizing: border-box;
    padding: 0;
    overflow: hidden;
    float: left;
    align-items: center;
    transition: width 0.2s;
    border-radius:15px;
    box-shadow: inset 0 0 25px 0 var(--retro-brown);
    filter: drop-shadow(0 0 25px var(--shadow-retro-orange));
    [class$="-header"] {
      position: relative;
      &::after {
        content: '';
        position: absolute;
        display: grid;
        place-content: center;
        align-items: center;
        background: v-bind(icon);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        top: 0;
        left: 0;
        width: 100px;
        height: 100px;
        z-index: 1;
      }
    }
    .card-header {
      font-size: 3rem;
    }
    .card-body {
      font-family: system-ui;
      font-weight: 500;
    }
  }
  .default-expand,
  .expand {
    width: 100% !important;
    height: 100% !important;
    min-height: 350px;
    font-family: 'Healing Bestie Demo';
    &:has(.planning-body) {
      background: url('../assets/img/curved-lines.svg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      width: 100%;
      height: 500px;
      background-color: transparent !important;
      border-bottom-left-radius: 30%;
    }
    > div:has(.building-header, .facilitating-header), .building-body, .facilitating-body {
      position: relative;
      display: grid;
      place-content: center;
      align-items: center;
      transition-delay: 200ms;
      opacity: 1 !important;
      font-size: 1.25rem;
      text-shadow: 1px 1px .5px #000;
      > p {
        position: relative;
        opacity: 1 !important;
      }
    }
    &::before {
      content: '';
      position: absolute;
      display: grid;
      place-content: center;
      align-items: center;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      border-radius: 3px;
    }
    
  }
  .expand:has(.planning-body) {
    position: relative;
    display: grid;
    place-content: center;
    align-items: center;
    transition-delay: 200ms;
    opacity: 1 !important;
    font-size: 1.25rem !important;
    text-shadow: 1px 1px .5px #000;
    > .planning-header {
      position: absolute;
      display: grid;
      justify-content: center;
      top: 0;
      left: 0;
      width: 100%;
      height: 500px;
      z-index: 1;
      border-radius: 3px;
    }
  }
  .unset {
    position: relative;
    width: 10%;
    background-color: v-bind(backgroundColor);
    &:has(.planning-body) {
      background-color: transparent;
      background: url('../assets/img/curved-lines.svg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      width: 100%;
      height: 500px;
    }
  }
  [class$="-icon"] {
    position: relative;
    width: 100%;
    height: 500px;
    filter: drop-shadow(0 0 25px var(--retro-brown));
    &::before,
    &::after {
      content: attr(data-text);
      position: absolute;
      display: grid;
      top: 100%;
      left: 0;
    }
  }
  .default-expand {
    .planning-body {
      position: relative;
      display: grid;
      transition-delay: 200ms;
      opacity: 1 !important;
      font-size: 1.25rem !important;
      text-shadow: 1px 1px .5px #000;
      overflow: hidden;
      > p {
        position: relative;
        opacity: 0;
        animation: slideRight 1s ease-in-out .5s forwards;
        @keyframes slideRight {
          0% { transform: translateX(-100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
      }
    }
  }
  .small {
    position: relative;
    width: 10%;
    height: 500px;
    filter: drop-shadow(0 0 25px var(--retro-brown));
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 60%;
      z-index: 100;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      background: v-bind(icon);
      transform: translateX(0%);
    }
    &::after {
      content: attr(data-text);
      position: absolute;
      display: grid;
      justify-content: center;
      place-content: center;
      align-items: center;
      top: 0;
      right: 0;
      height: 100%;
      width: 100%;
      text-transform: capitalize;
      font-size: 2.5rem;
      text-shadow: 0 1px 0 var(--retro-cream);
      background-color: v-bind(backgroundColor);
      transform: rotate(270deg) translate(0%);
    }
  }
  .small > div {
    transform: rotate(270deg) !important;
    transform-origin: 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    > p {
      opacity: 0 !important;
    }
  }
  .unset:has(.building-header, .facilitating-header) div {
    opacity: 0;
  }
}
  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 500px) {
    .services-section .default-expand:has(.planning-body), .services-section .expand:has(.planning-body) {
      background: var(--retro-blue) !important;
      .card-text {
        height: 350px;
        border-radius: 15px;
        overflow-y: auto;
        scroll-behavior: smooth;
        padding: 0;
        font-size: 18px;
        font-weight: 500;
        text-align: left;
        
        box-shadow: 0 -30px 5px var(--shadow-retro-blue) inset;
        padding-bottom: 2rem;
      }
    }
    .card-text {
      height: 350px;
      border-radius: 15px;
      overflow-y: auto;
      scroll-behavior: smooth;;
      font-size: 18px;
      font-weight: 500;
      text-align: left;
      
      box-shadow: 0 -30px 5px var(--shadow-retro-blue) inset;
    }
  }
</style>