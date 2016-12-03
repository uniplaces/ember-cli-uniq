import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-header-dropdown-item-simple', 'Integration | Component | uni header dropdown item simple', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.set('option', { key: 'pt', value: 'Portugal' });
  this.set('onClick', (key) => {
    return key;
  });

  this.render(hbs`{{uni-header-dropdown-item-simple option=option onClick=onClick}}`);

  assert.notEqual(this.$().text().trim(), '');
});
