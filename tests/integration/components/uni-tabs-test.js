import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const DEFAULT_LABEL = 'uni tab label';

moduleForComponent('uni-tabs', 'Integration | Component | uni tabs', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{uni-tabs}}`);

  assert.equal(this.$().text().trim(), '');
});

test('it renders and renders items', function(assert) {
  assert.expect(2);

  this.set('tabs', [{
    label: DEFAULT_LABEL,
    url: ''
  }]);

  this.render(hbs`{{uni-tabs tabs=tabs}}`);

  assert.notEqual(this.$().text().trim(), '');
  assert.equal(this.$('.uni-tabs__wrapper__item a').text().trim(), DEFAULT_LABEL);
});

test('it renders yielded content', function(assert) {
  assert.expect(2);

  this.set('tabs', [{
    label: '',
    url: '',
    text: DEFAULT_LABEL
  }]);

  this.render(hbs`
    {{#uni-tabs tabs=tabs as |tab|}}
      {{tab.text}}
    {{/uni-tabs}}`);

  assert.notEqual(this.$().text().trim(), '');
  assert.equal(this.$('.uni-tabs__wrapper__item a').text().trim(), DEFAULT_LABEL);
});
