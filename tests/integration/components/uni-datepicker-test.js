import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import MessageType from 'ember-cli-uniq/enums/uni-datepicker-message-type';

moduleForComponent('uni-datepicker', 'Integration | Component | uni datepicker', {
  integration: true
});

test('it renders the first warning message', function(assert) {
  this.set('messages', [
    { type: MessageType.INFORMATION, label: 'This is a information label' },
    { type: MessageType.WARNING, label: 'This is a warning label 1' },
    { type: MessageType.WARNING, label: 'This is a warning label 2' }
  ]);

  this.render(hbs`{{uni-datepicker messages=messages}}`);

  assert.dom('p').hasText('This is a warning label 1');
});

test('it renders the first information label when there is no warning message present', function(assert) {
  this.set('messages', [
    { type: MessageType.INFORMATION, label: 'This is a information label' },
    { type: MessageType.INFORMATION, label: 'This is a information label 2' },
    { type: MessageType.INFORMATION, label: 'This is a information label 3' }
  ]);

  this.render(hbs`{{uni-datepicker messages=messages}}`);

  assert.dom('p').hasText('This is a information label');
});

test('it renders the first warning message', function(assert) {
  this.set('messages', [
    { type: MessageType.WARNING, label: 'This is a warning label' },
    { type: MessageType.WARNING, label: 'This is a warning label 2' },
    { type: MessageType.WARNING, label: 'This is a warning label 3' }
  ]);

  this.render(hbs`{{uni-datepicker messages=messages}}`);

  assert.dom('p').hasText('This is a warning label');
});

test('when there is no messages the message container does not render', function(assert) {
  this.set('messages', []);

  this.render(hbs`{{uni-datepicker messages=messages}}`);

  assert.dom('.message').doesNotExist();
});

test('test to see if the modal went fullscreen', function(assert) {

  this.render(hbs`{{uni-datepicker isFullScreen=true}}`);

  assert.dom('.fullscreen').exists();
});
