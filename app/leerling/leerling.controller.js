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

            vm.replace = function(aantopm, item) {
                
                return leerlingService.replace(aantopm, item);
            }
            
            vm.getOpmerkingenClass = function (aantopm) {
                return leerlingService.getOpmerkingenClass(aantopm);
            }
        }]);