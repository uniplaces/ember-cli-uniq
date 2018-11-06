import EmberObject from '@ember/object';

export default EmberObject.extend({
  toKeyValueJson() {
    return Object.keys(this).reduce((json, key) => {
      if (typeof this[key] === 'function') {
        return json;
      }

      json.pushObject({ key, value: this[key] });

      return json;
    }, []);
  },

  values() {
    return Object.keys(this).reduce((values, key) => {
      if (typeof this[key] === 'function') {
        return values;
      }

      return values.concat(this[key]);
    }, []);
  }
});
