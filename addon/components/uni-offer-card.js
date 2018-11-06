import Component from '@ember/component';
import layout from '../templates/components/uni-offer-card';
import moment from 'moment';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import RentByType from 'ember-cli-uniq/enums/rent-by-type';
import calculateOldRent from 'ember-cli-uniq/utils/calculate-old-rent';
import { isEmpty } from '@ember/utils';

export default Component.extend({
  currentUser: service(),
  media: service(),

  classNames: ['search-offer'],
  classNameBindings: ['isLoading:search-offer--loading'],
  attributeBindings: ['itemprop', 'itemscope', 'itemtype'],

  itempro: 'offers',
  itemscope: '',
  itemtype: 'http://schema.org/Offer',
  dateFormat: 'D MMM',
  offerId: null,
  rentBy: RentByType.BEDROOM,
  reviewsGrade: 0,
  availableFrom: moment(),
  photos: [],
  price: '',
  hasVofferIdeo: false,
  allBillsIncluded: false,
  isExclusive: false,
  isFavorite: false,
  title: '',
  badge: null,
  isLoading: false,
  preloadNextPhoto: true,
  discount: 0,
  isPropertyVerified: false,
  hasVariablePricing: false,
  photoPath: null,
  layout,

  hasPhotos: computed.notEmpty('photosWithoutPlaceholders'),

  formattedAvailableFrom: computed('availableFrom', function() {
    let availableFrom = moment(this.get('availableFrom'));

    if (availableFrom.isBefore(moment())) {
      return moment();
    }

    return availableFrom;
  }),

  oldPrice: computed('discount', 'price', function() {
    let oldAmount = calculateOldRent(this.get('discount'), this.get('price.amount'));

    return { amount: oldAmount, currency_code: this.get('price.currency_code') };
  }),

  photosWithoutPlaceholders: computed('photos', function() {
    return isEmpty(this.get('photos')) ? [] : this.get('photos').filter(({ placeholder }) => !placeholder);
  }),

  onClick() {},
  onMouseEnter() {},
  onMouseLeave() {},
  onFavoriteStateChanged() {},

  mouseEnter() {
    this.get('onMouseEnter')(this.get('offerId'), ...arguments);
  },

  mouseLeave() {
    this.get('onMouseLeave')(this.get('offerId'), ...arguments);
  },

  click() {
    this.get('onClick')(this.get('offerId'), this.get('isExclusive'), this.get('cardType'));
  }
});
