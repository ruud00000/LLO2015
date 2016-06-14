/**
 * Created by ruudn_000 on 10-6-2016.
 */

'use strict';

angular
    .module('leerling')
    .service('leerlingService', ['FIREBASE_URI', '$firebaseArray', '$sce',
        function (FIREBASE_URI, $firebaseArray, $sce) {

            var leerlingenUri = FIREBASE_URI + 'leerling';
            var leerlingenRef = new Firebase(leerlingenUri);
            var leerlingen = $firebaseArray(leerlingenRef);

            var currentLeerling = null;
            
            var getOpmerkingenClass = function(aantalopm) {
                var aantal = aantalopm;
                var opmerkingenClass = "";
                if (aantal==undefined || aantal==0) {
                    opmerkingenClass = "geenOpmerkingen";
                }
                else {
                    opmerkingenClass = "welOpmerkingen";
                }
                return opmerkingenClass;
            };

            var findAll = function () {
                return leerlingen;
            };

            var replace = function(aantopm, item) {
                var aantal = aantopm;
                if (aantal==undefined || aantal==0) { aantal = 0; }
                var aantal = '  '+aantal;
                aantal = aantal.substr(aantal.length-2,2)+' ';
                aantal = aantal.replace(/ /g, '&nbsp;');
                aantal = $sce.trustAsHtml(aantal+item.replace(/ /g, '&nbsp;'))
                return aantal;
            }
            
 
            return {
                findAll: findAll,
                replace: replace,
                getOpmerkingenClass: getOpmerkingenClass
            }


        }]);