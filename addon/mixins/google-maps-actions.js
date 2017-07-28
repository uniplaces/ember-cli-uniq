/* global google */

import Ember from 'ember';
import GoogleTransportationsType from 'ember-cli-uniq/enums/google-transportations-type';

const { Mixin, inject, RSVP } = Ember;
const transportationTypes = GoogleTransportationsType.values();
const directionsTransportsRendererOptions = {
  suppressMarkers: true,
  preserveViewport: false
};

export default Mixin.create({
  gMap: inject.service(),

  directionsService: null,
  directionsTransportDisplay: null,
  transitLayer: null,
  directionsTravelMode: google.maps.DirectionsTravelMode,

  init() {
    this._super(...arguments);

    this.set('directionsService', new google.maps.DirectionsService);
    this.set('directionsTransportDisplay', new google.maps.DirectionsRenderer(directionsTransportsRendererOptions));
    this.set('transitLayer', new google.maps.TransitLayer());
  },

  placeDetails(placeId, mapName) {
    let map = this.get('gMap').selectMap(mapName);
    if (!map) {
      return RSVP.reject();
    }

    let service = new google.maps.places.PlacesService(map);

    return new RSVP.Promise((resolve, reject) => {
      service.getDetails({ placeId }, this._handleGoogleResponse.bind(this, resolve, reject));
    });
  },

  /**
   * @public
   *
   * @description Displays the transit Layer
   *
   * @method displayTransitLayer
   *
   * @param {google.maps.map} map
   */
  displayTransitLayer(map) {
    this.get('transitLayer').setMap(map);
  },

  /**
   * @public
   *
   * @description Hides the transit Layer
   *
   * @method hideTransitLayer
   */
  hideTransitLayer() {
    this.get('transitLayer').setMap(null);
  },

  /**
   * @public
   *
   * @description Converts lat and lng to a google maps object
   *
   * @method createLatLng
   *
   * @param  {string} lat
   * @param  {string} lng
   *
   * @return {google.maps.LatLng}
   */
  createLatLng(lat, lng) {
    return new google.maps.LatLng(lat, lng);
  },

  /**
   * @public
   *
   * @description Converts google maps LatLng to a JSON
   *
   * @method fromLatLng
   *
   * @param  {google.maps.LatLng} latLng
   *
   * @return {Object}
   */
  fromLatLng({ lat, lng }) {
    return { lat: lat(), lng: lng() };
  },

  /**
   * @public
   *
   * @description Obtains a google map from its name
   *
   * @method mapFromName
   *
   * @param  {string} mapName
   */
  mapFromName(mapName) {
    return this.get('gMap').selectMap(mapName);
  },

  /**
   * @public
   *
   * @description Based on a types checks if it is a subway station
   *
   * @method isLocationSubway
   *
   * @param  {array} types
   */
  isLocationSubway(types) {
    return types.includes(GoogleTransportationsType.SUBWAY_STATION);
  },

  /**
   * @public
   *
   * @description Based on a types checks if it is a train station
   *
   * @method isLocationTrain
   *
   * @param  {array} types
   */
  isLocationTrain(types) {
    return types.includes(GoogleTransportationsType.TRAIN_STATION);
  },

  /**
   * @public
   *
   * @description Based on a types checks if it is a bus station
   *
   * @method isLocationBus
   *
   * @param  {array} types
   */
  isLocationBus(types) {
    return types.includes(GoogleTransportationsType.BUS_STATION);
  },

  /**
   * @public
   *
   * @method nearbyTransports
   *
   * @description Retrieves all public transports in a given radius
   *
   * @param  {Number} lat
   * @param  {Number} lng
   * @param  {Number} radius
   * @param  {google.maps.map} map
   *
   * @return {Object}
   */
  nearbyTransports(lat, lng, radius, map) {
    let service = new google.maps.places.PlacesService(map);
    let location = this.createLatLng(lat, lng);

    return new RSVP.Promise((resolve, reject) => {
      service.nearbySearch({ location, radius, types: transportationTypes }, this._handleGoogleResponse.bind(this, resolve, reject));
    });
  },

  /**
   * @public
   *
   * @method calculateDirections
   *
   * @description Calculates the directions between two points and based on a travel mode
   *
   * @param  {google.maps.LatLng} origin
   * @param  {google.maps.LatLng} destination
   * @param  {boolean} provideRouteAlternatives
   * @param  {string} travelMode
   *
   * @return {Object}
   */
  calculateDirections(origin, destination, provideRouteAlternatives = false, travelMode = google.maps.DirectionsTravelMode.TRANSIT) {
    return new RSVP.Promise((resolve, reject) => {
      this.get('directionsService').route(
        { origin, destination, travelMode, provideRouteAlternatives },
        this._handleGoogleResponse.bind(this, resolve, reject)
      );
    });
  },

  /**
   * @public
   *
   * @method displayDirection
   *
   * @description Displays the directions calculated from google maps
   *
   * @param {google.maps.map} map
   * @param {Object} direction
   *
   * @return {Object}
   */
  displayDirection(map, direction) {
    this.get('directionsTransportDisplay').setOptions({ preserveViewport: direction.preserveViewport === true });
    this.get('directionsTransportDisplay').setMap(map);
    this.get('directionsTransportDisplay').setDirections(direction);
  },

  /**
   * @public
   *
   * @method isStepTypeSubway
   *
   * @description Checks if step is Subway
   *
   * @param  {string} stepType
   *
   * @return {boolean}
   */
  isStepTypeSubway(stepType) {
    return stepType === google.maps.TransitMode.SUBWAY;
  },

  /**
   * @public
   *
   * @method isTravelModelWalking
   *
   * @description Checks if travel mode is of type Walking
   *
   * @param  {string} stepType
   *
   * @return {boolean}
   */
  isTravelModelWalking(travelMode) {
    return travelMode === google.maps.DirectionsTravelMode.WALKING;
  },

  /**
   * @public
   *
   * @method durationOfWalkingPathInSeconds
   *
   * @description Obtains the duration of a walking path
   *
   * @param  {google.maps.Directions} directions
   *
   * @return {number}
   */
  durationOfWalkingPathInSeconds(directions) {
    return directions.routes[0].legs[0].duration.value;
  },

  _handleGoogleResponse(resolve, reject, res, status) {
    status === google.maps.places.PlacesServiceStatus.OK ? resolve(res) : reject(status);
  }
});
