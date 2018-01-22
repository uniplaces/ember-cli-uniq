import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-checkbox', 'Integration | Component | uni checkbox', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{uni-checkbox}}`);

  assert.equal(this.$().text().trim(), '');
});

test('it and puts small class', function(assert) {
  assert.expect(1);

  this.render(hbs`{{uni-checkbox isSmall=true}}`);

  assert.ok(this.$('.uni-checkbox').attr('class').includes('--small'));
});
