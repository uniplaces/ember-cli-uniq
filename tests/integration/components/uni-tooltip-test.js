import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { click, find } from 'ember-native-dom-helpers';
import getOwner from 'ember-owner/get';

moduleForComponent('uni-tooltip', 'Integration | Component | uni tooltip', {
  integration: true,
  beforeEach() {
    let mediaService = getOwner(this).lookup('service:media');
    mediaService.set('isMobile', true);
  }
});

test('it renders', function(assert) {
  assert.expect(3);

  this.render(hbs`{{uni-tooltip}}`);

  assert.equal(this.$().text().trim(), '');
  assert.notOk(find('.uni-tooltip__text'));

  click('.uni-tooltip__icon');

  assert.ok(find('.uni-tooltip__text'));
});
