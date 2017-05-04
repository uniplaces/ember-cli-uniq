import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-file-upload', 'Integration | Component | uni file upload', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{uni-file-upload}}`);

  assert.equal(this.$().text().trim(), '');
});
