export const scrollTo = (id) => {
  let el = document.getElementById(id)
  if (el) {
    el.classList.add('header-offsetY')
  }
  el.scrollIntoView({ behavior: 'smooth' })
  setTimeout(() => {
    if (el) {
      el.classList.remove('header-offsetY')
    }
  }, 1000)
}