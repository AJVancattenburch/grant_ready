import Pop from './Pop'
import { logger } from './Logger';
//What is the correct way to bring in the svg file since it isn't defined as a const? The answer is:
import { curvedLines } from "../assets/index.js";

function getElem(id) {
  try {
    const elem = document.getElementById(id)
    if (!elem) {
      throw new Error('Invalid element Id ' + id)
    }
    return elem
  } catch (error) {
    logger.error('[ATTEMPTING_TO_SET_HTML]', id)
    Pop.error(error)
  }
}


export function addClasses(element, ...classNames) {
  element.classList.add(...classNames)
}
export function removeClasses(element, ...classNames) {
  element.classList.remove(...classNames)
}

export function setHTML(id, html) {
  getElem(id).innerHTML = html
}

export function setText(id, text) {
  getElem(id).innerText = text
}

export function addAttribute(id, attr, querySelector) {
  getElem(id).setAttribute(attr, getElem(id).querySelector(querySelector).textContent)
}

export function removeAttribute(id, attr) {
  getElem(id).removeAttribute(attr)
}