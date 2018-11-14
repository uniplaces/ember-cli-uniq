import { computed } from '@ember/object';
import Component from '@ember/component';
import { htmlSafe } from '@ember/string';
import layout from '../templates/components/uni-progress-bar';
import createArrayOfIntegers from 'ember-cli-uniq/utils/array-methods';

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
    return htmlSafe(`width: ${parseFloat(this.percentage)}%`);
  }),
  inlineStepStyles: computed('eachStepPercentage', function() {
    let stepStyles = [];

    this.get('totalStepsCountAsArray').forEach(step => {
      stepStyles.push(
        htmlSafe(`left: calc(${parseFloat(this.eachStepPercentage)}% * ${parseInt(step)});`)
      );
    });

    return stepStyles;
  })
});
