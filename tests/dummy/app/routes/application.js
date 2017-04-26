import Ember from 'ember';
import moment from 'moment';

const { Route, computed } = Ember;

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
      date: null,
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
        { key: '1', value: 'One', disabled: false },
        { key: '2', value: 'Two' },  // options are disabled by default
        { key: '3', value: 'Three' }
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
      maxTen: computed.gte('number', 10)
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
