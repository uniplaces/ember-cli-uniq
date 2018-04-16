import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { click, find } from 'ember-native-dom-helpers';
import { setBreakpointForIntegrationTest } from '../../helpers/responsive';

moduleForComponent('uni-tooltip', 'Integration | Component | uni tooltip', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(3);

  setBreakpointForIntegrationTest(this, 'mobile');
  this.render(hbs`{{uni-tooltip media=media}}`);

  assert.equal(this.$().text().trim(), '');
  assert.notOk(find('.uni-tooltip__text'));

  click('.uni-tooltip__icon');

  assert.ok(find('.uni-tooltip__text'));
});
