import Component from '@ember/component';
import layout from '../templates/components/uni-anchor';

export default Component.extend({
  classNames: ['uni-anchor'],
  layout,

  tagName: 'a',
  attributeBindings: ['href', 'target'],
  href: '#'
});
