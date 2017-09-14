/* eslint-env node */
'use strict';

module.exports = function(/* environment, appConfig */) {
  return {
    moment: {
      includeLocales: true
    },
    mapbox: {
      accessToken: 'pk.eyJ1IjoibWJtZWxvIiwiYSI6ImNqNW56czRocDBnYWMycXBkcW5sdzh1azUifQ.h7aOkSuBm7Xv0XYuASfxPg'
    }
  };
};
