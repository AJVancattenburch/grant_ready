import { h } from "vue";
import * as data from './index.js';

export const navLinks = data.navLinks.map((link, id) => {
  return {
    id: link.id,
    URL: link.URL,
    title: link.title
  }
});

export const heroSection = Object.values(data.heroSection)

export const aboutSection = Object.values(data.aboutSection)

export const servicesSection = Object.values(data.servicesSection).map(s => {
  return {
    header: s.header,
    services: s => s.map(service =>
      ({
        header: service.header,
        textColor: service.textColor,
        backgroundColor: service.backgroundColor,
        icon: service.icon,
        content: service.content,
        isExpanded: service.isExpanded
      }))
  }
})

export const testimonialsSection = Object.values(data.testimonialsSection).map(t => {
  return {
    header: t.header,
    testimonials: t => t.map(testimonial =>
      ({
        picture: testimonial.picture,
        name: testimonial.name,
        content: testimonial.content
      }))
  }
})