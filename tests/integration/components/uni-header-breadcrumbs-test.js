import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-header-breadcrumbs', 'Integration | Component | uni header breadcrumbs', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(3);

  this.set('step', 'First');
  this.set('description', 'This is a description');

  this.render(hbs`{{uni-header-breadcrumbs step=step description=description}}`);

  assert.notEqual(this.$().text().trim(), '');
  assert.equal(this.$('.uni-header__breadcrumb__step').text().trim(), 'First');
  assert.equal(this.$('.uni-header__breadcrumb__description').text().trim(), 'This is a description');
});
