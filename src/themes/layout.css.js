module.exports = {
  // header and menu in header
  'header': {
    display: 'inline-block',
    width: '90%',

    '&.main': {
      '.logo': {
        float: 'left',
      },
      '.Menu': {
        float: 'right',
        margin: '2em 0 0',
      },
    },
  },

  // headers
  'h1,h2,h3,h4,h5': {
    margin: '.5em 0',
  },
  h1: {
    fontSize: '1.3em',
  },
  h2: {
    fontSize: '1.2em',
    fontWeight: 'bold',
  },
  h3: {
    fontSize: '1.2em',
  },
  h4: {
    fontWeight: 600,
  },
  h5: {
    fontWeight: 600,
  },
}