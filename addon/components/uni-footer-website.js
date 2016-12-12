import Ember from 'ember';
import layout from '../templates/components/uni-footer-website';

import row from './uni-footer-website-row';

const { Component } = Ember;

export default Component.extend({
    classNames: ['uni-footer-website'],
    layout,
    row,
});
