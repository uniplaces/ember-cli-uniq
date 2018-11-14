import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | uni header', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);

    await render(hbs`{{uni-header}}`);

    assert.dom('.uni-header').exists();
  });

  test('it renders with a custom logo', async function(assert) {
    assert.expect(1);

    this.setProperties({
      logoSrc:
        'https://www.ulisboa.pt/sites/ulisboa.pt/files/styles/logos_80px_vert/public/uo/logos/logo_ist.jpg',
      logoHeight: 60,
      logoWidth: 'auto'
    });

    await render(
      hbs`{{uni-header logoSrc=logoSrc logoHeight=logoHeight logoWidth=logoWidth}}`
    );

    let img = `img[src="${this.get('logoSrc')}"]`;

    assert.dom(img).exists();
  });
});
