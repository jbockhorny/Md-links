
const mdLinks = require('../index');

describe('mdLinks', () => {
  it('is a function', () => {
    expect(typeof mdLinks).toBe('function');
  });

});

it('A função deve trazer um objeto com um texto e um link', () => {
  return expect(mdLinks('./lib/__tests__/fs.md')).resolves.toStrictEqual(
    [{
      text: 'Markdown',
      href: 'https://pt.wikipedia.org/wiki/Markdown'
    },
    { text: 'Node.js', href: 'https://nodejs.org/' },
    {
      text: 'md-links',
      href:
        'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg'
    }],
  );

});
