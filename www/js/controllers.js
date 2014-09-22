angular.module('movilidadStaMta.controllers', [])



.controller('PicoPlacaCtrl', function($scope, Vehiculos) {
  $scope.vehiculos = Vehiculos.all();
})

.controller('PicoPlacaDetalleCtrl', function($scope, $stateParams, Vehiculos) {
  $scope.vehiculo = Vehiculos.get($stateParams.vehiculoId);
})

.controller('ParkingCtrl', function($scope) {
})

.controller('FotoMultaCtrl', function($scope) {
})

.controller('NoticiasCtrl', function($scope) {
});
