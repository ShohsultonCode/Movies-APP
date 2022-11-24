const $ = (selector) => document.querySelector(selector) 
const $$ = (selector)=> document.querySelectorAll(selector)
const createElement = (tagName, className, content)=>{
    const newElement = document.createElement(tagName)
    newElement.setAttribute('class', className)
    newElement.innerHTML = `${content}`
    return newElement
}


