const mdLinks = (path) => {

  const regex = /\[(\S.*?)\]\((http.*?)\)/g
  let myArray = []
  const fs = require('fs')

  return new Promise((resolve, reject) => {
    if (!path) {
        return reject('Caminho não encontrado');
    }
    fs.readFile(path, 'utf8', (err, data) => {

      if (err) {
          return reject('Problemas no arquivo');
      } else {
        let result = regex.exec(data)
        do {
          const text = result[1]
          const href = result[2]
          myArray.push({ text, href })
          result = regex.exec(data)

        } while (result !== null);
        return resolve(myArray)
      }

    });
  })
}

module.exports = mdLinks;