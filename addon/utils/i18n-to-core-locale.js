export default function i18nToCoreLocale(locale) {
  let [language, localeCode] = locale.split('-');

  return `${language}_${localeCode.toUpperCase()}`;
}
