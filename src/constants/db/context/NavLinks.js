const nav_links = [
  {
    id: "hero",
    title: "Hero"
  },
  {
    id: "about",
    title: "About"
  },
  {
    id: "services",
    title: "Services"
  },
  {
    id: "testimonials",
    title: "Testimonials"
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    icon: "mdi-linkedin",
    external_URL: "https://www.linkedin.com/in/brianna-richards-2012/"
  }
]

const nav_link = nav_links.map((link) => {
  return {
    id: link.id,
    title: link.title,
    icon: link.icon ? link.icon : null,
    external_URL: link.external_URL ? link.external_URL : null
  }
});


export {
  nav_link
}