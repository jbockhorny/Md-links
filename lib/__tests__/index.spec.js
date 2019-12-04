const mdLinks = require('../index');

describe('mdLinks', () => {
  it('is a function', () => {
    expect(typeof mdLinks).toBe('function');
  });

});

it('A função deve retornar um texto e um link', () => {
  return expect(mdLinks('./lib/__tests__/fs.md')).resolves.toStrictEqual(
    [{
      "href": "https://pt.wikipedia.org/wiki/Markdown",
      "text": "Markdown",
    },
    {
      "href": "https://nodejs.org/",
      "text": "Node.js",
    },
    {
      "href": "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg",
      "text": "md-links",
    },
    {
      "href": "https://nodejs.org/pt-br/",
      "text": "Node.js",
    },
    {
      "href": "https://developers.google.com/v8/",
      "text": "Chrome",
    }]
  );

});

it('A função deve retornar uma mensagem de erro quando não o houver arquivo', () => {
  return expect(mdLinks('')).rejects.toStrictEqual('Caminho não encontrado');

});

it('A função deve retornar uma mensagem de erro quando não encontrar o caminho', () => {
  return expect(mdLinks('*/README.md')).rejects.toStrictEqual('Problemas no arquivo');

});