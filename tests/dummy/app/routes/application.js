import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  model() {
    return {
      isOpen: true,
      isSignup: true,
      isLogin: false,
      withEmail: true,
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
      yearsAvailability: [
        {
          year: 2017,
          monthly_availability: ['none', 'medium', 'low', 'none', 'medium', 'low', 'none', 'medium', 'low', 'none', 'medium', 'low']
        },
        {
          year: 2018,
          monthly_availability: ['none', 'medium', 'low', 'none', 'medium', 'low', 'none', 'medium', 'low', 'none', 'medium', 'low']
        }
      ],
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
    }
  }
});
