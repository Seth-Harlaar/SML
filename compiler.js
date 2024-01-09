console.log('hi')

import { cardStyles } from "./styles";

function createHTMLElementFromXML(xmlString) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, 'text/xml');

  console.log('xmlDoc');

  return createHTMLElement(xmlDoc.firstChild);
}

function createHTMLElement(xmlNode) {
  const element = document.createElement(xmlNode.nodeName);

  // Set attributes
  if (xmlNode.attributes) {
    for (let i = 0; i < xmlNode.attributes.length; i++) {
      const attribute = xmlNode.attributes[i];
      element.setAttribute(attribute.nodeName, attribute.nodeValue);
    }
  }

  // Set content or children
  if (xmlNode.childNodes.length === 1 && xmlNode.firstChild.nodeType === Node.TEXT_NODE) {
    element.textContent = xmlNode.textContent;
  } else {
    for (let i = 0; i < xmlNode.childNodes.length; i++) {
      const childNode = xmlNode.childNodes[i];
      if (childNode.nodeType === Node.ELEMENT_NODE) {
        const childElement = createHTMLElement(childNode);
        element.appendChild(childElement);
      }
    }
  }

  return element;
}

const htmlElement = createHTMLElementFromXML(cardStyles);
document.body.appendChild(htmlElement);