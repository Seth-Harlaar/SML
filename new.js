const cardStyles = `
  <div>
    text-align: center;
    <div>
      text-white
      <h2>asdf</h2>
      <p>a</p>
      <p></p>
      <img></img>
    </div>
  </div>
`;

function implementStyles(xmlString, htmlFile, rootString) {
  // parse the style string and html string at the same time
  const parser = new DOMParser();
  const styleDoc = parser.parseFromString(xmlString, 'text/xml');

  // find root element
  const roots = document.querySelectorAll(`[root="${rootString}"]`);

  const root = roots[0];

  addStyleTags(styleDoc.firstChild, root);
}

let styles = [];

function addStyleTags(xmlNode, htmlElement) {
  console.log('first ' + htmlElement);
  
  // find elements that have text
  if(xmlNode.childNodes.length != 0){
    // get the text inside the tags
    const obj = {};
    obj[xmlNode.nodeName] = xmlNode.firstChild.textContent;
    styles = [...styles, obj];

    const elementStyle = xmlNode.firstChild.textContent;
    htmlElement.className = elementStyle;

    let j = 0;
    // then explore children if ther are any
    for (let i = 0; i < xmlNode.childNodes.length; i++) {
      const xmlChild = xmlNode.childNodes[i];
      
      if (xmlChild.nodeType === Node.ELEMENT_NODE) {
        const htmlChild = htmlElement.children[j];
        j++;
        console.log('second ' + htmlChild);
        addStyleTags(xmlChild, htmlChild);
      }
    }
  }
}



implementStyles(cardStyles, "example.html", "firstStyles");
console.log(styles);


console.log('hi');