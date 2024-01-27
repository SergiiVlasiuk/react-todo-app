module.exports = {
  env: {
    browser : true,
    es2021  : true,
    node    : true,
  },
  // Extends       : ['eslint:recommended', 'plugin:react/recommended', 'plugin:json/recommended', 'prettier'],
  overrides     : [],
  parserOptions : {
    ecmaVersion  : 'latest',
    sourceType   : 'module',
    ecmaFeatures : {
      'jsx': true
    }
  },
  // "devDependencies": {
  // 	"eslint": "^8.36.0",
  // 	"eslint-config-wesbos": "^3.0.2",
  // 	"eslint-plugin-react": "^7.32.2"
  // }
  plugins: [
    'react'
    //  , 'react/jsx-runtime'
  ],
  extends: [
    'eslint:recommended'
    // 'eslint:all'
    , 'plugin:react/recommended'
    // , 'plugin:react/all'
    , 'prettier'
  ],
  rules: {
    quotes             : ['error', 'single'],
    // We want to force semicolons
    semi               : ['error', 'never'],
    // We use 2 spaces to indent our code
    indent             : ['error', 2, { 'SwitchCase': 1 }],
    // We want to avoid extraneous spaces
    'no-multi-spaces'  : ['error'],
    // We want to not validate props types
    'react/prop-types' : 0,
    // We want to have a single space after colon
    'key-spacing'      : [
      'error',
      {
        /*
         * 'afterColon': true,
         * 'align': 'colon',
         * 'on'        : 'colon',
         */
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
    'no-unused-vars'                : ['warn', {
      'vars'               : 'all',
      'args'               : 'after-used',
      'ignoreRestSiblings' : false,
    }],
    'comma-spacing'           : ['error', { 'before': false, 'after': true }],
    'space-in-parens'         : ['error', 'always', { 'exceptions': ['{}', '[]'] }],
    'template-tag-spacing'    : ['error', 'always'],
    'max-statements-per-line' : ['error', { 'max': 1 }],
    'react/jsx-uses-vars'     : 'error',
    // 'arrow-body-style'        : ['warn', 'as-needed'],
    'arrow-spacing'           : ['error', { 'before': true, 'after': true }],
    'react/jsx-sort-props'    : [ 'error' ],
    'no-trailing-spaces'      : 'error',
    // 'no-trailing-spaces'      : ['error', { 'skipBlankLines': true }],
    'no-unused-expressions'   : 'warn',
    'no-unused-vars'          : 'warn',
    'max-statements-per-line' : 'error',
    // 'max-statements-per-line' : ['error', { 'max': 2 }],
    'max-lines'               : ['error', {'max': 300, 'skipBlankLines': true}],

    // 'react/jsx-max-props-per-line': [1, {
    //   'maximum': {},
    //   // 'when': 'always',
    // }],
    // 'react/jsx-uses-react': ['error'],
    // 'react/jsx-uses-vars': ['error'],
    // 'react/jsx-props-multiline': [true, {
    //   'maximum': {
    //     'single' : 1,
    //     'multi'  : 2
    //   },
    //   'when': 'always',
    // }],

    // 'react/jsx-filename-extension' : [1, { 'extensions': ['.js', '.jsx'] }],
  },
}
