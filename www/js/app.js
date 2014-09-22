// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('movilidadStaMta', ['ionic', 'movilidadStaMta.controllers', 'movilidadStaMta.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.picoyplaca', {
      url: '/picoyplaca',
      views: {
        'tab-picoyplaca': {
          templateUrl: 'templates/tab-picoyplaca.html',
          controller: 'PicoPlacaCtrl'
        }
      }
    })
    .state('tab.picoyplaca-detalle', {
      url: '/picoyplaca/:vehiculoId',
      views: {
        'tab-picoyplaca': {
          templateUrl: 'templates/picoyplaca-detalle.html',
          controller: 'PicoPlacaDetalleCtrl'
        }
      }
    })
    .state('tab.parking', {
      url: '/parking',
      views: {
        'tab-parking': {
          templateUrl: 'templates/tab-parking.html',
          controller: 'ParkingCtrl'
        }
      }
    })
    .state('tab.fotomulta', {
      url: '/fotomulta',
      views: {
        'tab-fotomulta': {
          templateUrl: 'templates/tab-fotomulta.html',
          controller: 'FotoMultaCtrl'
        }
      }
    })
    .state('tab.noticias', {
      url: '/noticias',
      views: {
        'tab-noticias': {
          templateUrl: 'templates/tab-noticias.html',
          controller: 'NoticiasCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/picoyplaca');

});

