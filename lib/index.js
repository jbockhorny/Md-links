const fs = require('fs')

const mdLinks = (path) => {

  const regex = /\[([^\s)].*?)\]\((http.*?)\)/g;


  return new Promise((resolve, reject) => {
    if (!path) {
      return reject('Caminho não encontrado');
    }
    fs.readFile(path, 'utf8', (err, data) => {

      if (err) {
        return reject('Problemas no arquivo');
      } else {

        const result = data.match(regex)
          .map(elem => {
            const dataMatch = elem.split('](');
            return {
              text: dataMatch[0].slice(1), href: dataMatch[1].slice(0, -1)
            };

          });
        resolve(result)
      };
    });
  });
};

module.exports = mdLinks;