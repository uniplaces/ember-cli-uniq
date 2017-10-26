import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { find } from 'ember-native-dom-helpers';

const DEFAULT_LABEL = 'This is a label';

moduleForComponent('uni-anchor', 'Integration | Component | uni anchor', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.set('label', DEFAULT_LABEL);

  this.render(hbs`{{uni-anchor label=label}}`);

  assert.equal(find('.uni-anchor').textContent.trim(), DEFAULT_LABEL);
});
