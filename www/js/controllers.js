angular.module('movilidadStaMta.controllers', [])



.controller('PicoPlacaCtrl', function($scope, Vehiculos) {
  $scope.vehiculos = Vehiculos.all();
})

.controller('PicoPlacaDetalleCtrl', function($scope, $stateParams, Vehiculos) {
  $scope.vehiculo = Vehiculos.get($stateParams.vehiculoId);
})

.controller('PicoPlacaAgregarCtrl', function($scope) {
  $scope.modelo = 1;
  $scope.tipo = 'automovil';
  
  /* Estas funciones son para cambiar el atributo tipo de vehiculo y 
  asi mismo activar/desactivar el grupo de botones */
  $scope.setActive = function(type) {
      $scope.tipo = type;
  };
  $scope.isActive = function(type) {
      return type === $scope.tipo;
  };
})

.controller('ParkingCtrl', function($scope) {
})

.controller('FotoMultaCtrl', function($scope) {
})

.controller('NoticiasCtrl', function($scope) {
});
