import Ember from 'ember';
import layout from '../templates/components/uni-points-of-interest';

const { Component, computed, inject } = Ember;
// const ICON_BASE_PATH = '/assets/images/';
const POI_ENDPOINT = 'https://a695285e.ngrok.io/points-of-interest';
const MAP_ZOOM = 15;
const MARKERS_FIT_MODE = 'live';
const DEFAULT_LOCATION = {
  lat: 38.713889,
  long: -9.140652
};

export default Component.extend({
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
    disableDefaultUI: true
  },

  markers: [],

  init() {
    this._super(...arguments);

    this._populateMap();
  },

  _populateMap() {
    this.get('ajax').request(POI_ENDPOINT).then((res) => {
      this.set('markers', res.map(({lat, long, title, category}) => {
        let marker = { lat, long, title, category };

        marker.icon = {
            // url: '/assets/images/uniplaces_logo.svg',
            size: new google.maps.Size(30,30),
            scaledSize: new google.maps.Size(20,20),
            anchor: new google.maps.Point(15, 15),
            origin: new google.maps.Point(0, 0),
            labelOrigin: new google.maps.Point(30, 15),
        };

        return marker;
      }));
    }).catch(() => {
      window.console.debug('ERROR');
    });
  }
});
