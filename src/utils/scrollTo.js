import { logger } from "./Logger.js"
//Scrolls to elements and compensates for fixed headers, so that the header does not cover the element's heading (Adjust padding as needed)
export const scrollTo = (id) => {
  const yOffset = -65;
  let el = document.getElementById(id);
  let y = el.getBoundingClientRect().top + window.scrollY + yOffset;
  if (el) {
    window.scrollTo({top: y, behavior: 'smooth'});
    logger.log(`scrolling to: ${id} w/ html reference: ${el} @ ${y}px from top`);
  }
}
