import { module, test } from 'ember-qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import MessageType from 'ember-cli-uniq/enums/uni-datepicker-message-type';

module('Integration | Component | uni datepicker', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the first warning message', async function(assert) {
    this.set('messages', [
      { type: MessageType.INFORMATION, label: 'This is a information label' },
      { type: MessageType.WARNING, label: 'This is a warning label 1' },
      { type: MessageType.WARNING, label: 'This is a warning label 2' }
    ]);

    await render(hbs`{{uni-datepicker messages=messages}}`);

    assert.dom('p').hasText('This is a warning label 1');
  });

  test('it renders the first information label when there is no warning message present', async function(assert) {
    this.set('messages', [
      { type: MessageType.INFORMATION, label: 'This is a information label' },
      { type: MessageType.INFORMATION, label: 'This is a information label 2' },
      { type: MessageType.INFORMATION, label: 'This is a information label 3' }
    ]);

    await render(hbs`{{uni-datepicker messages=messages}}`);

    assert.dom('p').hasText('This is a information label');
  });

  test('it renders the first warning message', async function(assert) {
    this.set('messages', [
      { type: MessageType.WARNING, label: 'This is a warning label' },
      { type: MessageType.WARNING, label: 'This is a warning label 2' },
      { type: MessageType.WARNING, label: 'This is a warning label 3' }
    ]);

    await render(hbs`{{uni-datepicker messages=messages}}`);

    assert.dom('p').hasText('This is a warning label');
  });

  test('when there is no messages the message container does not render', async function(assert) {
    this.set('messages', []);

    await render(hbs`{{uni-datepicker messages=messages}}`);

    assert.dom('.message').doesNotExist();
  });

  test('test to see if the modal went fullscreen', async function(assert) {

    await render(hbs`{{uni-datepicker isFullScreen=true}}`);

    assert.dom('.fullscreen').exists();
  });
});
