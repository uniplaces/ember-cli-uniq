import CountryCodes from 'ember-cli-uniq/enums/country-codes-type';
import PhoneNumberValidations from 'ember-cli-uniq/enums/phone-number-validation-type';

export default function isValidPhoneNumber(countryCode, number) {
  switch (countryCode) {
    case CountryCodes.PT:
      return PhoneNumberValidations.PT.test(number);
    default:
      return true;
  }
}
