import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-multi-selector', 'Integration | Component | uni multi selector', {
  integration: true
});

test('it renders 2 options and selects given one', function(assert) {
  assert.expect(3);

  let options = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' }
  ];
  let groupValue = 'female';

  this.set('options', options);
  this.set('name', 'gender');
  this.set('groupValue', groupValue);

  this.render(hbs`{{uni-multi-selector name=name groupValue=groupValue options=options}}`);

  assert.notEqual(this.$().text().trim(), '');
  assert.equal(this.$('.uni-multi-selector__button').length, 2);
  assert.equal(this.$('input:checked').val(), groupValue);
});

test('it renders 3 options and selects default one', function(assert) {
  assert.expect(3);

  let options = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'unknown', label: 'unknown' }
  ];

  this.set('options', options);
  this.set('name', 'gender');

  this.render(hbs`{{uni-multi-selector name=name options=options}}`);

  assert.notEqual(this.$().text().trim(), '');
  assert.equal(this.$('.uni-multi-selector__button').length, 3);
  assert.equal(this.$('input:checked').val(), options[0].value);
});

test('it renders options without setting default state', function(assert) {
  assert.expect(3);

  let options = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'unknown', label: 'unknown' }
  ];

  this.set('options', options);
  this.set('name', 'gender');

  this.render(hbs`{{uni-multi-selector name=name hasDefaultState=false options=options}}`);

  assert.notEqual(this.$().text().trim(), '');
  assert.equal(this.$('.uni-multi-selector__button').length, 3);
  assert.equal(this.$('input:checked').length, 0);
});
