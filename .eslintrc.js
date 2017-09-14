module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'rules': {
    'react/jsx-filename-extension': ['off', { 'extensions': ['.js', '.jsx'] }],
    'semi': ['off'],
    'space-before-blocks': ['error', { 'functions': 'always', 'keywords': 'always' }],
    'jsx-a11y/href-no-hash': ['off']
  }
}
