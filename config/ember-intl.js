/*jshint node:true*/

module.exports = function(/* environment */) {
  return {
    locales: null,
    fallbackLocale: null,
    inputPath: 'translations',
    autoPolyfill: false,
    disablePolyfill: true,
    publicOnly: false,
    errorOnNamedArgumentMismatch: false,
    errorOnMissingTranslations: false,
    stripEmptyTranslations: false,
    requiresTranslation(/* key, locale */) {
      return true;
    }
  };
};
