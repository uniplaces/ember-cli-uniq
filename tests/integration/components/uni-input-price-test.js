import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-input-price', 'Integration | Component | uni input price', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{uni-input-price}}`);

  assert.notEqual(this.$().text().trim(), '');
});

test('it renders right side currency', function(assert) {
  assert.expect(2);

  this.set('isRightSideCurrency', true);
  this.set('per', 'day');
  this.set('currency', '€');

  this.render(hbs`{{uni-input-price currency=currency isRightSideCurrency=isRightSideCurrency per=per}}`);

  assert.notEqual(this.$().text().trim(), '');
  assert.equal(this.$().text().trim(), '€ / day');
});

test('it execute onInvalidInput on not valid input', function(assert) {
  assert.expect(3);

  this.set('isRightSideCurrency', true);
  this.set('per', 'day');
  this.set('currency', '€');
  this.set('value', 0);
  this.set('minValue', 100);
  this.set('onInvalidInput', () => {
    assert.equal(true, true);
  });

  this.render(hbs`
    {{uni-input-price
      currency=currency
      minValue=minValue
      isRightSideCurrency=isRightSideCurrency
      per=per
      value=value
      onInvalidInput=onInvalidInput}}
  `);
  this.$('input').keyup();

  assert.notEqual(this.$().text().trim(), '');
  assert.equal(this.$().text().trim(), '€ / day');
});
