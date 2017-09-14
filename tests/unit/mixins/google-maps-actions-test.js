import Ember from 'ember';
import GoogleMapsActionsMixin from 'ember-cli-uniq/mixins/google-maps-actions';
import { module, test } from 'qunit';

module('Unit | Mixin | google maps actions');

// Replace this with your real tests.
test('it works', function(assert) {
  let GoogleMapsActionsObject = Ember.Object.extend(GoogleMapsActionsMixin);
  let subject = GoogleMapsActionsObject.create();
  assert.ok(subject);
});
