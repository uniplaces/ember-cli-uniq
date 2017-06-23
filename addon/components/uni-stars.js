import Ember from 'ember';
import layout from '../templates/components/uni-stars';

const { Component, computed } = Ember;

export default Component.extend({
  layout,
  classNames: ['uni-stars'],

  maxStars: 5,
  grade: null,

  fullStarsCount: computed('grade', function() {
    return Math.floor(this.get('grade'));
  }),
  hasHalfStar: computed('grade', function() {
    let decimalGrade = this.get('grade') - Math.floor(this.get('grade'));

    return decimalGrade >= 0.5;
  }),
  emptyStarsCount: computed('grade', 'hasHalfStar', function() {
    let emptyStars = this.get('maxStars') - Math.floor(this.get('grade'));

    return this.get('hasHalfStar') ? emptyStars - 1 : emptyStars;
  })
});
