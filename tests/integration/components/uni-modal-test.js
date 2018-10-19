import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const DEFAULT_TITLE = 'Uni modal title';

module('Integration | Component | uni modal', function(hooks) {
  setupRenderingTest(hooks);

  test('it does not render', async function(assert) {
    assert.expect(1);

    this.set('isOpen', false);

    await render(hbs`{{uni-modal isOpen=isOpen}}`);

    assert.dom('.uni-modal').doesNotExist();
  });

  test('it renders and renders title', async function(assert) {
    assert.expect(1);

    this.set('isOpen', true);
    this.set('title', DEFAULT_TITLE);

    await render(hbs`{{uni-modal isOpen=isOpen title=title}}`);

    assert.dom('.uni-modal .uni-title').hasText(DEFAULT_TITLE);
  });

  test('it renders content', async function(assert) {
    assert.expect(1);

    this.set('isOpen', true);

    await render(hbs`
      {{#uni-modal isOpen=isOpen}}
        This is content
      {{/uni-modal}}
    `);

    assert.dom('.uni-modal').hasText('This is content');
  });

  test('it calls the onclose callback', async function(assert) {
    assert.expect(1);

    this.setProperties({
      isOpen: true,
      onCloseModal: () => assert.ok(true)
    });

    await render(hbs`
      {{uni-modal baseCssClass="test" isOpen=isOpen onCloseModal=onCloseModal}}
    `);

    await click('.test__close-button');
  });
});

test('it calls the setBodyOverflowClass with true on open true', async function(assert) {
  assert.expect(2);

  // Open, Destroy Component
  let expectedStates = [true, false];
  let currentState = 0;

  this.setProperties({
    isOpen: true,
    setBodyOverflowClass: (state) => {
      assert.equal(expectedStates[currentState], state);
      currentState++;
    }
  });

  this.render(hbs`
    {{uni-modal
      baseCssClass="test"
      bodyOverflowClass=bodyOverflowClass
      isOpen=isOpen
      setBodyOverflowClass=setBodyOverflowClass
      onCloseModal=onCloseModal}}
  `);
});

test('it calls the setBodyOverflowClass with false on open false except on first load and component destroy', async function(assert) {
  assert.expect(2);

  // None, Open, Close, None
  let expectedStates = [true, false];
  let currentState = 0;

  this.setProperties({
    isOpen: false,
    setBodyOverflowClass: (state) => {
      assert.equal(expectedStates[currentState], state);
      currentState++;
    }
  });

  this.render(hbs`
    {{uni-modal
      baseCssClass="test"
      bodyOverflowClass=bodyOverflowClass
      isOpen=isOpen
      setBodyOverflowClass=setBodyOverflowClass
      onCloseModal=onCloseModal}}
  `);

  this.set('isOpen', true);

  this.set('isOpen', false);
});
