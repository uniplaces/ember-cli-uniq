import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-datepicker', 'Integration | Component | uni datepicker', {
  integration: true
});

test('it renders', function(assert) {
  this.set('messages', [
    { type: 'information', label: 'This is a information label' },
    { type: 'warning', label: 'This is a warning label 1' },
    { type: 'warning', label: 'This is a warning label 2' }
  ]);

  this.render(hbs`{{uni-datepicker messages=messages}}`);

  assert.dom('p').hasText('This is a warning label 1');
});

test('it renders', function(assert) {
  this.set('messages', [
    { type: 'information', label: 'This is a information label' },
    { type: 'information', label: 'This is a information label 2' },
    { type: 'information', label: 'This is a information label 3' }
  ]);

  this.render(hbs`{{uni-datepicker messages=messages}}`);

  assert.dom('p').hasText('This is a information label');
});

test('it renders', function(assert) {
  this.set('messages', [
    { type: 'warning', label: 'This is a warning label' },
    { type: 'warning', label: 'This is a warning label 2' },
    { type: 'warning', label: 'This is a warning label 3' }
  ]);

  this.render(hbs`{{uni-datepicker messages=messages}}`);

  assert.dom('p').hasText('This is a warning label');
});

test('it renders', function(assert) {
  this.set('messages', []);

  this.render(hbs`{{uni-datepicker messages=messages}}`);

  assert.dom('.message').doesNotExist();
});
