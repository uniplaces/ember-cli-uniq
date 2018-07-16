import Ember from 'ember';
import MediaService from 'ember-responsive/media';
import { getOwner } from '@ember/application';
import { computed } from '@ember/object';
import EmberArray from '@ember/array';
import { classify } from '@ember/string';

const { Test } = Ember;

MediaService.reopen({
  // Change this if you want a different default breakpoint in tests.
  _defaultBreakpoint: 'desktop',

  _breakpointArr: computed('breakpoints', function() {
    return Object.keys(this.get('breakpoints')) || new EmberArray([]);
  }),

  _forceSetBreakpoint(breakpoint) {
    let found = false;

    let props = {};
    this.get('_breakpointArr').forEach(function(bp) {
      let val = bp === breakpoint;
      if (val) {
        found = true;
      }

      props[`is${classify(bp)}`] = val;
    });

    if (found) {
      this.setProperties(props);
    } else {
      throw new Error(
        `You tried to set the breakpoint to ${breakpoint}, which is not in your app/breakpoint.js file.`
      );
    }
  },

  match() {}, // do not set up listeners in test

  init() {
    this._super(...arguments);

    this._forceSetBreakpoint(this.get('_defaultBreakpoint'));
  }
});

export default Test.registerAsyncHelper('setBreakpoint', function(app, breakpoint) {
  // this should use getOwner once that's supported
  let mediaService = app.__deprecatedInstance__.lookup('service:media');
  mediaService._forceSetBreakpoint(breakpoint);
});

export function setBreakpointForIntegrationTest(container, breakpoint) {
  let mediaService = getOwner(container).lookup('service:media');
  mediaService._forceSetBreakpoint(breakpoint);
  container.set('media', mediaService);

  return mediaService;
}
