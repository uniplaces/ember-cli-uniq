import { gte } from '@ember/object/computed';
import Route from '@ember/routing/route';
import moment from 'moment';

export default Route.extend({
  model() {
    return {
      checked: false,
      options: ['A', 'B', 'C'],
      isOpen: true,
      isSignup: true,
      isLogin: false,
      withEmail: true,
      minDate: moment().subtract(1, 'days'),
      startDate: moment(),
      disabledDates: [
        moment().add(2, 'days'),
        moment().add(3, 'days')
      ],
      date: null,
      dropdown: {
        selected: null
      },
      datepickerInputLabel: 'Move-in date',
      datepickerInputPlaceholder: 'Insert date',
      genderOptions: [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' }
      ],
      errorOptions: ['female'],
      multiOptions: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' }
      ],
      uniSelectOptions: [
        { key: '1', value: 'One', disabled: true },
        { key: '2', value: 'Two' },  // options are enabled by default
        { key: '3', value: 'Three' }
      ],
      uniSelectAliasOptions: [
        { key: '1', value: 'This is a one', alias: 'One' },
        { key: '2', value: 'This is a two', alias: 'Two' },
        { key: '3', value: 'This is a three', alias: 'Three' }
      ],
      uniSelectAliasGroups: [
        {
          key: 'g1',
          value: 'This is a group',
          options: [
            { key: '1', value: 'long explanation for one', alias: 'one' },
            { key: '2', value: 'long explanation for two', alias: 'two' }
          ]
        },
        {
          key: 'g2',
          value: 'This is another group',
          options: [
            { key: '3', value: 'long explanation for three', alias: 'three' },
            { key: '4', value: 'long explanation for four', alias: 'four' }
          ]
        }
      ],
      secondDropdown: null,
      dropdownOptions: [
        { key: 'facebook', value: 'Facebook' },
        { key: 'google', value: 'Google' }
      ],
      tabs: [
        { label: 'Home', url: 'application' },
        { label: 'About us', url: 'application' },
        { label: 'Help', url: 'application' },
        { label: 'Careers', url: 'application' },
        { label: 'Terms', url: 'application' }
      ],
      standardUnitary: {
        available_from: '2016-10-20',
        blocked_periods: [
          { from: '2016-10-21', to: '2016-10-22' },
          { from: '2016-11-21', to: '2016-11-23' }
        ]
      },
      standard: {
        years: [
          {
            year: 2017,
            monthly_availability: ['none', 'medium', 'low', 'none', 'medium', 'low', 'none', 'medium', 'low', 'none', 'medium', 'low']
          },
          {
            year: 2018,
            monthly_availability: ['none', 'medium', 'low', 'none', 'medium', 'low', 'none', 'medium', 'low', 'none', 'medium', 'low']
          }
        ]
      },
      fixedOptions: [
        {
          key: 'None',
          value: 'none'
        },
        {
          key: 'medium',
          value: 'medium'
        }
      ],
      fixed: {
        options: [
          {
            id: 'uuid',
            from: '2017-01-22',
            to: '2017-09-12',
            status: 'none'
          },
          {
            id: 'uuid',
            from: '2018-01-22',
            to: '2018-10-22',
            status: 'medium'
          }
        ]
      },
      mainPhotoUrl: 'https://d16teuje7e44sv.cloudfront.net/spa/cities/portugal/lisbon-small.jpg',
      photos: [
        {
          url: 'https://d16teuje7e44sv.cloudfront.net/spa/cities/portugal/lisbon-small.jpg',
          id: '1234567890'
        },
        {
          url: 'https://d16teuje7e44sv.cloudfront.net/spa/cities/portugal/porto-small.jpg',
          id: '0987654321'
        }
      ],
      uniHorizontalTabsBtnLabel: 'This is a button',
      email: 'username@uniplaces',
      number: 10,
      gteTen: gte('number', 10),
      componentSections: [
        'headers',
        'tabs',
        'alerts',
        'headings',
        'anchor',
        'buttons',
        'checkbox',
        'datepickers',
        'dropdown',
        'radio-button',
        'multi-selector',
        'input',
        'special-inputs',
        'select',
        'textarea',
        'tooltip',
        'photos',
        'rating',
        'information-box',
        'footer',
        'handlebars-helpers'
      ],
      countryCode: 'PT',
      autocompleteOptions: [
        { key: 'USD', value: 'Dollar estudinense' },
        { key: 'AUD', value: 'Dollar australiano' },
        { key: 'CAD', value: 'Dollar canadense' },
        { key: 'KYD', value: 'Dollar caimanês' },
        { key: 'JMD', value: 'Dollar jamaicano' },
        { key: 'EUR', value: 'Euro' },
        { key: 'BRL', value: 'Real brasileiro' }
      ],
      datepickerRange: {
        center: moment(),
        selected: {
          start: moment(),
          end: moment().add(29, 'day')
        }
      },
      moneyExample: {
        amount: 100000,
        currency_code: 'EUR'
      },
      moneyTransformedExample: {
        amount: 2500,
        currency_code: 'EUR'
      },
      moneyWithCentsExample: {
        amount: 19999,
        currency_code: 'EUR'
      }
    };
  },

  actions: {
    isSignup() {
      this.set('currentModel.isSignup', true);
      this.set('currentModel.isLogin', false);

      this.set('currentModel.isOpen', true);
    },

    isLogin() {
      this.set('currentModel.isSignup', false);
      this.set('currentModel.isLogin', true);

      this.set('currentModel.isOpen', true);
    },

    setAsMainPhoto(photo) {
      this.set('currentModel.mainPhotoUrl', photo.url);
    }
  }
});
