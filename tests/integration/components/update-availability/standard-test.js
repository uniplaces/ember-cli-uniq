import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('update-availability/standard', 'Integration | Component | update availability/standard', {
  integration: true
});

test('it renders', function(assert) {
  let standard = {
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
  };

  this.set('standard', standard);
  this.set('availableLabel', 'Available');
  this.set('notAvailableLabel', 'Not available');
  this.set('limitedAvailabilityLabel', 'Limited');

  this.render(hbs`
    {{update-availability/standard
      availability=standard
      labelAvailable=availableLabel
      labelNotAvailable=notAvailableLabel
      labelLimitedAvailability=limitedAvailabilityLabel}}
  `);

  assert.notEqual(this.$().text().trim(), '');
});
