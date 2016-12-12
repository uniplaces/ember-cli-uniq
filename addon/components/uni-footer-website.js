import Ember from 'ember';
import layout from '../templates/components/uni-footer-website';

const { Component } = Ember;

export default Component.extend({
    classNames: ['uni-footer-website'],
    layout,

    rowComponent: 'uni-footer-website-row',
});
