'use strict';

module.exports = {
  extends: 'recommended',
  rules: {
    'no-bare-strings': false,
    'attribute-indentation': {
      'mustache-open-end': 'last-attribute',
      'open-invocation-max-len': 120
    },
    // @TODO: Remove the below rules
    'no-invalid-interactive': false,
    'no-inline-styles': false
  }
};
