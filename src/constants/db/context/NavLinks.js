const links = [
  {
    id: "hero",
    title: "",
    name: "Hero"
  },
  {
    id: "about",
    title: "Who We Are",
    name: "About"
  },
  {
    id: "services",
    title: "What We Do",
    name: "Services"
  },
  {
    id: "testimonials",
    title: "What People Say",
    name: "Testimonials"
  },
  {
    id: "linkedin",
    title: "",
    name: "LinkedIn",
    icon: "mdi-linkedin",
    external_URL: "https://www.linkedin.com/in/brianna-richards-2012/"
  }
]

const mapped_links = links.map((link) => {
  return {
    id: link.id,
    title: link.title ? link.title : null,
    name: link.name,
    icon: link.icon ? link.icon : null,
    external_URL: link.external_URL ? link.external_URL : null
  }
});


export const nav_links = mapped_links