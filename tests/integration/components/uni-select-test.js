import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-select', 'Integration | Component | uni select', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  let options = [
    { key: 'pt', value: 'Portugal' },
    { key: 'it', value: 'Italy' },
    { key: 'nl', value: 'Nederlands' },
    { key: 'en', value: 'England' }
  ];
  this.set('options', options);

  this.render(hbs`{{uni-select options=options}}`);

  assert.notEqual(this.$().text().trim(), '');
});
