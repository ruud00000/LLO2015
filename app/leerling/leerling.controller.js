/**
 * Created by ruudn_000 on 10-6-2016.
 */

'use strict';

angular
    .module('leerling')
    .controller('LeerlingController', ['leerlingService',
        function (leerlingService) {

            var vm = this;
            vm.leerlingObject = new Leerling();

            vm.leerlingen = leerlingService.findAll();

            vm.replace = function(aantopm, klaskort, naam) {
                
                return leerlingService.replace(aantopm, klaskort, naam);
            }
            
            vm.getOpmerkingenClass = function (aantopm) {
                return leerlingService.getOpmerkingenClass(aantopm);
            }
        }]);