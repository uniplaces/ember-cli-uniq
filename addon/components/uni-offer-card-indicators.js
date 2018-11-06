import Component from '@ember/component';
import layout from '../templates/components/uni-offer-card-indicators';
import { computed } from '@ember/object';
import createArrayOfIntegers from 'ember-cli-uniq/utils/array-methods';

export default Component.extend({
  classNames: ['indicators'],
  classNameBindings: ['shouldTransitionRight:indicators--transitioning-right', 'shouldTransitionLeft:indicators--transitioning-left'],

  tagName: 'ul',
  fold: '...',
  page: 1,
  total: 1,
  totalIndicators: 5, // must be odd
  isTransitioningLeft: false,
  isTransitioningRight: false,
  layout,

  hasMore: computed.or('hasPrevious', 'hasNext'),
  shouldTransitionRight: computed.and('canTransitionRight', 'isTransitioningRight'),
  shouldTransitionLeft: computed.and('canTransitionLeft', 'isTransitioningLeft'),

  hasPrevious: computed('page', 'total', 'totalIndicators', function() {
    let minPageBeforeShowPrevious = Math.ceil(this.get('totalIndicators') / 2);
    return this.get('total') > this.get('totalIndicators') && this.get('page') > minPageBeforeShowPrevious;
  }),

  hasNext: computed('page', 'total', 'totalIndicators', function() {
    let maxPageBeforeHideNext = this.get('total') - Math.floor(this.get('totalIndicators') / 2);
    return this.get('total') > this.get('totalIndicators') && this.get('page') < maxPageBeforeHideNext;
  }),

  canTransitionRight: computed('page', 'hasPrevious',  function() {
    let maxPageBeforeStopTransition = this.get('total') - Math.floor(this.get('totalIndicators') / 2) + 1;
    return this.get('hasPrevious') && this.get('page') < maxPageBeforeStopTransition;
  }),

  canTransitionLeft: computed('page', 'hasNext',  function() {
    let minPageBeforeCanTransition = Math.floor(this.get('totalIndicators') / 2);
    return this.get('hasNext') && this.get('page') > minPageBeforeCanTransition;
  }),

  paginationArray: computed('page', 'total', 'fold', function() {
    let total = this.get('total');
    let page = this.get('page');
    let totalIndicators = this.get('totalIndicators');
    let minPageBeforeCenter = Math.floor(totalIndicators / 2);
    let middleItem = Math.ceil(totalIndicators / 2);

    if (total <= totalIndicators) {
      return createArrayOfIntegers(1, total);
    }

    if (page <= minPageBeforeCenter) {
      return Array(...new Array(totalIndicators)).map((currElement, index) => {
        return index < minPageBeforeCenter ? index + 1 : this.get('fold');
      });
    }

    let maxPageBeforeCenter = total - minPageBeforeCenter;
    if (page > maxPageBeforeCenter) {
      return Array(...new Array(totalIndicators)).map((currElement, index) => {
        let indexToLast = (totalIndicators - index - 1);
        return index >= middleItem ? total - indexToLast : this.get('fold');
      });
    }

    return Array(...new Array(totalIndicators)).map((currElement, index) => {
      return index + 1 == middleItem ? page : this.get('fold');
    });
  })
});
