import Ember from 'ember';
import layout from '../templates/components/uni-points-of-interest';
import GoogleMapsActionsMixin from '../mixins/google-maps-actions';

const { Component, computed, inject } = Ember;
// const ICON_BASE_PATH = '/assets/images/';
const POI_ENDPOINT = 'https://dec9a163.ngrok.io/points-of-interest';
const MAP_ZOOM = 16;
const MARKERS_FIT_MODE = 'live';
const DEFAULT_LOCATION = {
  lat: 38.713889,
  long: -9.140652
};

const ICON_BASE_URL = 'https://raw.githubusercontent.com/google/material-design-icons/master/maps/1x_web/';
const ICON_COLOR = '_black';
const ICON_SIZE = '_24dp.png';
const MAP_STYLES = [{
  'featureType': 'administrative',
  'elementType': 'labels.text.fill',
  'stylers': [{ 'color': '#444444' }]
}, {
  'featureType': 'landscape',
  'elementType': 'all',
  'stylers': [{ 'color': '#f2f2f2' }]
}, {
  'featureType': 'poi',
  'elementType': 'labels',
  'stylers': [{ 'visibility': 'off' }]
}, {
  'featureType': 'poi.attraction',
  'elementType': 'labels',
  'stylers': [{ 'visibility': 'on' }]
}, {
  'featureType': 'poi.attraction',
  'elementType': 'icon',
  'stylers': [{ 'saturation': -80 }, { 'lightness': 45 }]
}, {
  'featureType': 'poi.school',
  'elementType': 'all',
  'stylers': [{ 'visibility': 'off' }]
}, {
  'featureType': 'poi.business',
  'elementType': 'all',
  'stylers': [{ 'visibility': 'off' }]
}, {
  'featureType': 'road',
  'elementType': 'all',
  'stylers': [{ 'saturation': -100 }, { 'lightness': 45 }]
}, {
  'featureType': 'road.highway',
  'elementType': 'all',
  'stylers': [{ 'visibility': 'simplified' }]
}, {
  'featureType': 'road.arterial',
  'elementType': 'labels.icon',
  'stylers': [{ 'visibility': 'off' }]
}, {
  'featureType': 'transit',
  'elementType': 'all',
  'stylers': [{ 'visibility': 'off' }]
}, {
  'featureType': 'water',
  'elementType': 'all',
  'stylers': [{ 'color': '#46bcec' }, { 'visibility': 'on' }]
}];

const DEFAULT_CATEGORY = 'uniplaces';

const DEFAULT_CATEGORIES = [
  'restaurant',
  'bar',
  'uniplaces',
  'movies',
  'cafe',
  'school',
  'health',
  'store',
  'establishment',
  'subway'
];

const CATEGORY_SVG_ENUM = {
  restaurant: 'ic_restaurant',
  bar: 'ic_local_bar',
  uniplaces: 'ic_local_hotel',
  movies: 'ic_local_movies',
  cafe: 'ic_local_cafe',
  school: 'ic_local_library',
  health: 'ic_local_hospital',
  store: 'ic_store_mall',
  establishment: 'ic_store_mall_directory',
  subway: 'ic_subway'
};

export default Component.extend(GoogleMapsActionsMixin, {
  gMap: inject.service(),
  ajax: inject.service(),
  tagName: 'article',
  classNames: ['uni-points-of-interest'],
  layout,

  markersFitMode: MARKERS_FIT_MODE,
  zoom: MAP_ZOOM,
  center: DEFAULT_LOCATION,

  latitude: computed.alias('center.lat'),
  longitude: computed.alias('center.long'),
  mapOptions: {
    disableDefaultUI: true,
    styles: MAP_STYLES
  },

  markers: [],

  init() {
    this._super(...arguments);

    this._populateMap();
  },

  actions: {
    createMarker({ icon }, iconSize = [40, 40]) {
      return L.icon({ iconUrl: icon, iconSize });
    }
  },

  // find what categories are common - between the categories of a marker and the pre-existing categories
  _intersectArrays(a, b) {
    let t;

    if (b.length > a.length) {
      t = b, b = a, a = t; // indexOf to loop over shorter
    }

    return a.filter((e) => {
      return b.indexOf(e) > -1;
    });
  },

  // find a category that matches one of our pre-existing categories (to find the correct icon)
  _findMatchingCategory(categories) {
    for (let i = 0; i < categories.length; i++) {
      let index = DEFAULT_CATEGORIES.indexOf(categories[i]);

      if (index > -1) {
        return DEFAULT_CATEGORIES[index];
      }
    }

    return DEFAULT_CATEGORY;
  },

  // generate icon url based on the category
  _populateIcon(category) {
    let img = CATEGORY_SVG_ENUM[category];

    return ICON_BASE_URL + img + ICON_COLOR + ICON_SIZE;
  },

  // as the name says it populates the map
  _populateMap() {
    this.get('ajax').request(POI_ENDPOINT, {
      method: 'GET',
      data: {
        lat: DEFAULT_LOCATION.lat,
        long: DEFAULT_LOCATION.long
      }
    }).then(({ markers, categories }) => {
      this.set('catgs', Object.keys(categories));

      this.set('markers', markers.map(({ lat, long, name, categories, image }) => {
        let marker = { lat, long, name, categories, image };

        marker.category = this._findMatchingCategory(categories);
        marker.icon = this._populateIcon(marker.category);

        if (this._intersectArrays(marker.categories, categories)) {
          return marker;
        }
      }));

      window.console.debug(this.get('markers'));

    }).catch((err) => {
      window.console.log('ERROR', err);
    });
  }
});
