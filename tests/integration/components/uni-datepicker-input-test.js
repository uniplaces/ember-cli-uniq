import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { click } from 'ember-native-dom-helpers';

moduleForComponent('uni-datepicker-input', 'Integration | Component | uni datepicker input', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{uni-datepicker-input}}`);

  assert.dom('.uni-datepicker-input').exists();
});

test('it toggles date picker component existence when clicking input', async function(assert) {
  assert.expect(2);

  this.render(hbs`{{uni-datepicker-input}}`);

  await click('.uni-input');

  assert.dom('.uni-datepicker').exists();

  await click('.uni-input');

  assert.dom('.uni-datepicker').doesNotExist();
});
