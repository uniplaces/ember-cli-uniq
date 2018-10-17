import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-header', 'Integration | Component | uni header', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{uni-header}}`);

  assert.equal(this.$().text().trim(), '');
});

test('it renders with a custom logo', function(assert) {
  assert.expect(1);

  this.setProperties({
    logoSrc: 'https://www.ulisboa.pt/sites/ulisboa.pt/files/styles/logos_80px_vert/public/uo/logos/logo_ist.jpg',
    logoHeight: 60,
    logoWidth: 'auto'
  });

  this.render(hbs`{{uni-header logoSrc=logoSrc logoHeight=logoHeight logoWidth=logoWidth}}`);

  let img = `img[src="${this.get('logoSrc')}"]`;

  assert.dom(img).exists();
});
