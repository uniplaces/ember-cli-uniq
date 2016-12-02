import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const DEFAULT_PLACEHOLDER = 'placeholder';
const DEFAULT_VALUE = 'default value';

moduleForComponent('uni-textarea', 'Integration | Component | uni textarea', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.set('placeholder', DEFAULT_PLACEHOLDER);
  this.set('value', DEFAULT_VALUE);

  this.render(hbs`
    {{#uni-textarea placeholder=placeholder value=value}}
      component
    {{/uni-textarea}}`
  );

  assert.notEqual(this.$().text().trim(), '');
});
