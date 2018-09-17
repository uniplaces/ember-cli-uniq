import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-button', 'Integration | Component | uni button', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.set('label', 'This is a label');

  this.render(hbs`{{uni-button label=label}}`);

  assert.dom('.uni-button').hasText('This is a label');
});

test('it renders yield content', function(assert) {
  assert.expect(4);

  this.set('label', 'This label should not show');

  this.render(hbs`
    {{#uni-button label=label}}
      <h1>Click on me!</h1>
    {{/uni-button}}
  `);

  assert.dom('.uni-button').exists();
  assert.dom('.uni-button').doesNotIncludeText('This label should not show');
  assert.dom('h1').exists();
  assert.dom('h1').hasText('Click on me!');
});
