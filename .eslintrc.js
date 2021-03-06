module.exports = {
  'extends': [
    'eslint:recommended',
    'google',
    'plugin:react/recommended',
  ],
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
      'modules': true,
    },
  },
  'env': {
    'browser': true,
    'node': true,
    'es6': true,
  },
  'rules': {
    'semi': [2, 'never'],
    'indent': ['error',
      2, {
        'SwitchCase': 1,
        'VariableDeclarator': 1,
      },
    ],
  },
}
// module.exports = {
//  'env': {
//    'browser': true,
//    'es2021': true,
//  },
//  'extends': [
//    'google',
//  ],
//  'parserOptions': {
//    'ecmaVersion': 12,
//    'sourceType': 'module',
//  },
//  'rules': {
//  },
// };
