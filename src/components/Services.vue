<template>
  <section class="d-flex flex-column align-items-center services-section">
    <h1 class="col-12 services-header text-center text-uppercase p-2">{{ serviceSection.header }}</h1>

    <div class="container horizontal-accordion my-5">
      <div
        v-for="service in services"
        class="card choice unset small pt-0 p-4 mx-1"
        :key="service.name"
        @click="toggleActiveService(service.name)"
        :class="`${service.name}-icon`"
        :style="{
          backgroundColor: service.backgroundColor,
          color: service.textColor,
        }"
      >
        <div class="card-header text-capitalize pt-2 d-flex justify-content-center" :class="`${service.name}-header`">
          <img :src="service.icon" class="header-icon col-2 img-fluid" width="auto" alt="">
          <span class="col-10">{{ service.name }}</span>
        </div>
        <div class="card-body pt-0 mt-0" :class="`${service.name}-body`">
          <p class="card-text p-3 pt-0 mt-0" :class="`service${service.id}-text`">{{ service.content }}</p>
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

    const activeService = (id) => {
      const data = serviceSection.value.services.find(s => s.id === id)
      return data
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
      activeService,
      backgroundColor: computed(() => {
        return `${activeService.backgroundColor}`
      }),
      activeSection,
      toggleActiveService,
      textColor: computed(() => `${services.value.map(s => s.textColor)}`),
    }
  }
}
</script>

<style scoped lang="scss">
@import url('../assets/scss/_services_section.scss');
</style>