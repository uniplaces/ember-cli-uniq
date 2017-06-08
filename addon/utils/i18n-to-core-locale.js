export default function i18nToCoreLocale(locale) {
  let separated = locale.split('-');

  return `${separated[0]}_${separated[1].toUpperCase()}`;
}
