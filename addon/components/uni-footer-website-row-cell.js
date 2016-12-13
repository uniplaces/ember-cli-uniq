import Ember from 'ember';
import layout from '../templates/components/uni-footer-website-row-cell';

const { Component, computed } = Ember;

const cellClass = 'uni-footer-website__row__cell';

export default Component.extend({
    classNames: [cellClass],
    layout,

    classNameBindings: [`halfLine:${cellClass}--half-line`],
    halfLine: false,
    cellClass
});
