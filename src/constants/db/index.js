import { link } from './context/navLinks';
import { about } from './context/about';
import { hero } from './context/hero';
import { service_section } from './context/services';
import { testimonial_section } from './context/testimonials';

const navLink = link.map((link) => {
  return {
    id: link.id,
    URL: link.external_URL,
    title: link.title
  }
});

const service = service.services.map((service) => {
  return {
    id: service.id,
    textColor: service.textColor,
    backgroundColor: service.backgroundColor,
    icon: service.icon,
    content: service.content,
    isExpanded: service.isExpanded
  }
});

const testimonials = testimonials.map((testimonial) => {
  return {
    company_name: testimonial.company_name,
    title: testimonial.title,
    content: testimonial.content
  }
});

const database = {
  navLink,
  about,
  hero,
  service,
  service,
  testimonial,
  testimonial
};

export const db = database;