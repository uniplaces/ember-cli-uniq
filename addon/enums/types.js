import Ember from 'ember';

const { Object: EmberObject } = Ember;

export default EmberObject.extend({
  toKeyValueJson() {
    return Object.keys(this).map((key) => {
      return { key, value: this[key] };
    });
  },

  values() {
    return Object.keys(this).map((key) => this[key]);
  }
});
