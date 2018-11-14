import PhoneNumberValidations from 'ember-cli-uniq/enums/phone-number-validation-type';

export default function isValidPhoneNumber(countryCode, number) {
  return PhoneNumberValidations[countryCode]
    ? PhoneNumberValidations[countryCode].test(number)
    : true;
}
