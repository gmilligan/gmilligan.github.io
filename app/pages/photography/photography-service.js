(function (window, angular, undefined) {  'use strict';

  angular
    .module('app')
    .factory('photoSvc', [function() {
      var model = {};
      model.images = [{
          title: 'Santa Cruz Lighthouse at Sunrise',
          file: 'Santa-Cruz-Lighthouse-at-Sunrise.jpg',
          note: '',
          show: true,
          sort: 10
        }, {
          title: 'Silhouette of Seacliff Pier',
          file: 'Silhouette-of-Seacliff-Pier.jpg',
          note: '',
          show: true,
          sort: 20
        }, {
          title: 'Capitola Wharf at Sunrise',
          file: 'Capitola-Wharf-at-Sunrise.jpg',
          note: '',
          show: true,
          sort: 25
        }, {
          title: 'Life Guard Towers in Winter',
          file: 'Life-Guard-Towers-in-Winter.jpg',
          note: '',
          show: true,
          sort: 28
        }, {
          title: 'Under the Pier',
          file: 'Under-the-Pier.jpg',
          note: '',
          show: true,
          sort: 29
         }, {
          title: 'Magical Morning in Capitola',
          file: 'Magical-Morning-in-Capitola.jpg',
          note: '',
          show: true,
          sort: 30
        }, {
          title: 'La Selva Train Trestle',
          file: 'La-Selva-Train-Trestle.jpg',
          note: '',
          show: true,
          sort: 35
        }, {
          title: 'Venetian Reflections',
          file: 'Venetian-Reflections.jpg',
          note: '',
          show: true,
          sort: 40
        }, {
          title: 'Depot Hill Sunset',
          file: 'Depot-Hill-Sunset.jpg',
          note: '',
          show: true,
          sort: 50
        }, {
          title: 'Stairway to the Sunset',
          file: 'Stairway-to-the-Sunset.jpg',
          note: '',
          show: true,
          sort: 60
        }, {
          title: 'Sunrise on the Boardwalk',
          file: 'Sunrise-on-the-Boardwalk.jpg',
          note: '',
          show: true,
          sort: 70
        }, {
          title: 'The Harbor Lighthouse',
          file: 'The-Harbor-Lighthouse.jpg',
          note: '',
          show: true,
          sort: 80
        }, {
          title: 'Moon Gazing Surf Statue',
          file: 'Moon-Gazing-Surf-Statue.jpg',
          note: '',
          show: false,
          sort: 100
        }, {
          title: 'Quasimodo Redwood',
          file: 'Quasimodo-Redwood.jpg',
          note: '',
          show: true,
          sort: 72
        }, {
          title: 'Secret-Path',
          file: 'Secret-Path.jpg',
          note: '',
          show: true,
          sort: 45
        }, {
          title: 'Capitola-Wharf-at-Sunset',
          file: 'Capitola-Wharf-at-Sunset.jpg',
          note: '',
          show: true,
          sort: 62
        }, {
          title: 'White Bird',
          file: 'White-Bird.jpg',
          note: '',
          show: true,
          sort: 65
        }, {
          title: 'Slough at Sunrise',
          file: 'Slough-at-Sunrise.jpg',
          note: '',
          show: true,
          sort: 66
        }, {
          title: 'Sunset on the Slough',
          file: 'Sunset-on-the-Slough.jpg',
          note: '',
          show: true,
          sort: 67

        }
      ];
      return model;
    }]);

})(window, window.angular);
