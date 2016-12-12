import Ember from 'ember';
import layout from '../templates/components/uni-footer-website-row';

import cell from './uni-footer-website-row-cell';

const { Component } = Ember;

export default Component.extend({
    classNames: ['uni-footer-website__row'],
    layout,
    cell
});
