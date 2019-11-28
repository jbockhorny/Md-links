const mdLinks = (path) => {

  const regex = /\[(\S.*?)\]\((http.*?)\)/g
  let myArray = []
  const fs = require('fs')

  return new Promise((resolve, reject) => {
    if (!path) {
      const message = new Error('Caminho não encontrado');
      return reject('message')
    }
    fs.readFile(path, 'utf8', (err, data) => {

      if (err) {
        reject(err);
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