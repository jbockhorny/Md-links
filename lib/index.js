// criação e exportação da função mdLinks.

const fs = require("fs");

  const mdLinks = (path)=> {

    fs.readFile(path, "utf8", (error, data)=> {
      if(error) throw error;
      console.log(data);

  });
}

module.exports = {mdLinks,} 
