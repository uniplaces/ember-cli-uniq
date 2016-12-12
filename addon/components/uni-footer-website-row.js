import Ember from 'ember';
import layout from '../templates/components/uni-footer-website-row';

const { Component } = Ember;

export default Component.extend({
    classNames: ['uni-footer-website__row'],
    layout,

    cellComponent: 'uni-footer-website-row-cell'
});
