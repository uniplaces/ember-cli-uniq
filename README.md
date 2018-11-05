# ember-cli-uniq

[![npm version](https://badge.fury.io/js/ember-cli-uniq.svg)](https://badge.fury.io/js/ember-cli-uniq)
[![Build Status](https://travis-ci.org/uniplaces/ember-cli-uniq.svg?branch=master)](https://travis-ci.org/uniplaces/ember-cli-uniq)
[![dependencies](https://david-dm.org/uniplaces/ember-cli-uniq.svg)](https://david-dm.org/uniplaces/ember-cli-uniq)
[![devDependencies](https://david-dm.org/uniplaces/ember-cli-uniq/dev-status.svg)](https://david-dm.org/uniplaces/ember-cli-uniq?type=dev)

This is an addon that contains the most used front-end components in the several Uniplaces' products.

A demo of the components can be found on [uniplaces.github.io/ember-cli-uniq](https://uniplaces.github.io/ember-cli-uniq/).

Installation
------------------------------------------------------------------------------

Install the ember-cli addon in your ember-cli project:

```bash
$ ember install ember-cli-uniq
```

## Upgrading

From `ember-cli-uniq@0.2.x` to `ember-cli-uniq@0.3.x`:

* In `ember-cli-build.js` add this if you need access to the flags:
```javascript
// ember-cli-build.js

let app = new EmberApp(defaults, {
    // [...]
    svg: {
      // [...]
      paths: [
        // [...]
        'node_modules/ember-cli-uniq/public/assets/flags/'
      ]
    }
```

From `ember-cli-uniq@0.3.x` to `ember-cli-uniq@0.4.x`:

* Replace bower import of `uniq` with npm import of `uniplaces-uniq`
* Replace `inline-svg` with `svg-jar` and:
```javascript
// ember-cli-build.js

let app = new EmberApp(defaults, {
    // [...]
    svg: {
      paths: [
        // [...]
      ]
    }
```
with
```javascript
// ember-cli-build.js

let app = new EmberApp(defaults, {
    // [...]
    svgJar: {
      sourceDirs: [
        // [...]
      ]
    }
```
and replace every invocation of the `{{inline-svg}}` helper with `{{svg-jar}}`.

## Contributing

Any contribution is welcome. Please read our [guidelines](CONTRIBUTING.md).
However, if your contribution involves adding a new feature, please open an issue before to
share your plan and agree the details of the feature before starting implementing it.
