const xmlContent = `  
<body.any checked>
  m-0 flex justify-center items-center h-screen bg-slate-700 
  <div>
    text-center 
    </div>
    <div>
      w-[300px] p-[20px] rounded-lg shadow-lg bg-white
      <img>
        w-[150px] h-[150px] rounded-full object-cover mb-4 mx-auto
      </img>
      <h2>
        mb-2 text-xl
      </h2>
      <p>
        mb-2 text-lg
        asdf
      </p>
      <p></p>
    </div>
  </div>
  <div>
    asdf
  </div>
</body>
`

const options = {
  ignoreAttributes: false,
  attributeNamePrefix : "@_",
  allowBooleanAttributes: true,
  alwaysCreateTextNode: true,
  preserveOrder: true,
};

const parser = new XMLParser(options);
const xmlObj = parser.parse(xmlContent);

console.log(JSON.stringify(xmlObj, null, 2));


// loop through all the children
