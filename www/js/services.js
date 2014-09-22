angular.module('movilidadStaMta.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Vehiculos', function() {

  // Algunos datos falsos de prueba
  var vehiculos = [
    { id: 0, nombre: 'Mazda T9' },
    { id: 1, nombre: 'Renault 6' },
    { id: 2, nombre: 'Lambourginni Diablo' },
    { id: 3, nombre: 'Toyota prado' }
  ];

  return {
    all: function() {
      return vehiculos;
    },
    get: function(vehiculoId) {
      return vehiculos[vehiculoId];
    }
  }
});
