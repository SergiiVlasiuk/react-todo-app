module.exports = {
  env: {
    browser : true,
    es2021  : true,
    node    : true,
  },
  extends       : ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  overrides     : [],
  parserOptions : {
    ecmaVersion : 'latest',
    sourceType  : 'module',
  },
  plugins : ['react'],
  rules   : {
    quotes             : ['error', 'single'],
    // we want to force semicolons
    semi               : ['error', 'never'],
    // we use 2 spaces to indent our code
    indent             : ['error', 2],
    // we want to avoid extraneous spaces
    'no-multi-spaces'  : ['error'],
    // we want to not validate props types
    'react/prop-types' : 0,
    // we want to have a single space after colon
    'key-spacing'      : [
      'error',
      {
        // 'afterColon': true,
        // 'align': 'colon',
        // 'on'        : 'colon',
        align: {
          beforeColon : true,
          afterColon  : true,
          //   'on'          : 'colon'
        },
        singleLine: {
          beforeColon : false,
          afterColon  : true,
        },
      },
    ],
    // 'space-after-keywords': ["error", "never"],   
    // 'space-after-keywords': ['error', 'always'],
    // // disable
    // 'init-declarations'  : 'off',
    // 'no-console': 'error',
    // 'no-console': ['error','on'],
    // 'no-inline-comments' : 'off',
    // 'dot-location': ['error', 'property'],
    'dot-location'                  : ['error', 'property'],
    // 'dot-notation': ['error',{ 'allowKeywords': false }],
    'no-whitespace-before-property' : 'error',
  },
}
