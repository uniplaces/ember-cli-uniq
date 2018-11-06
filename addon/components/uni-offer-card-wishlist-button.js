import Component from '@ember/component';
import layout from '../templates/components/uni-offer-card-wishlist-button';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  wishlist: service(),

  classNames: ['photo__favorite'],
  citySlug: null,
  offerId: null,
  layout,

  isOnWishList: computed('wishlist.cities', function() {
    return this.get('wishlist').isOfferOnWishList(this.get('citySlug'), this.get('offerId'));
  }),

  onChange() {},

  click(ev) {
    ev.stopPropagation();
    let { citySlug, offerId, isExclusive } = this.getProperties('citySlug', 'offerId', 'isExclusive');

    if (this.get('isOnWishList')) {
      this.get('wishlist').removeFromWishList(citySlug, offerId);
      this.get('onChange')({ isFavorite: false });
      return;
    }

    this.get('wishlist').addToWishList(citySlug, offerId, isExclusive);
    this.get('onChange')({ isFavorite: true });
  }
});
