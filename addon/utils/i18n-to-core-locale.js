export default function i18nToCoreLocale(locale) {
  let [language, locale] = locale.split('-');

  return `${language}_${locale.toUpperCase()}`;
}
