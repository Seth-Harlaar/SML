const cardStyles = `
  <body>
    m-0 flex justify-center items-center h-screen bg-[#c8b68e]
    <div>
      text-center 
      <div>
        w-[300px] p-[20px] rounded-lg shadow-lg bg-[#473f35] text-white
        <img>
          w-[150px] h-[150px] rounded-full object-cover mb-4 mx-auto
        </img>
        <h2>
          mb-2 text-xl
        </h2>
        <p>
          mb-2 text-lg
        </p>
        <p>
          <span> text-[#00ff80] </span>
        </p>
      </div>
    </div>
  </body>
`;

function implementStyles(xmlString, rootString){
  // parse the style string and html string at the same time
  const parser = new DOMParser();
  const styleDoc = parser.parseFromString(xmlString, 'text/xml');

  // find root element
  const roots = document.querySelectorAll(`[root="${rootString}"]`);
  
  const root = roots[0];
  
  console.log(root);

  addStyleTags(styleDoc.firstChild, root);
}

let styles = [];

function addStyleTags(xmlNode, htmlElement){
  console.log(htmlElement)
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
        addStyleTags(xmlChild, htmlChild);
      }
    }
  }
}



implementStyles(cardStyles, "userCard");



console.log('end');