import { computed } from '@ember/object';
import Component from '@ember/component';
import Ember from 'ember';
import layout from '../templates/components/uni-progress-bar';
import createArrayOfIntegers from 'ember-cli-uniq/utils/array-methods';

const {
  String
} = Ember;

export default Component.extend({
  classNames: ['uni-progress-bar'],
  tagName: 'section',
  layout,

  percentage: 0,

  totalStepsCountAsArray: computed('totalStepsCount', function() {
    return createArrayOfIntegers(0, this.get('totalStepsCount'));
  }),
  eachStepPercentage: computed('totalStepsCount', function() {
    return 100 / this.get('totalStepsCount');
  }),
  inlineStyle: computed('percentage', function() {
    return String.htmlSafe(`width: ${this.get('percentage')}%`);
  }),
  inlineStepStyles: computed('eachStepPercentage', function() {
    let stepStyles = [];

    this.get('totalStepsCountAsArray').forEach((step) => {
      stepStyles.push(String.htmlSafe(`left: calc(${this.get('eachStepPercentage')}% * ${step});`));
    });

    return stepStyles;
  })
});
