/**
 * Created by ruudn_000 on 11-6-2016.
 */
angular
    .module('leerling')
    .filter('preserveSpaces', function () {
    return function (input) {
        var output = angular.copy(input);
        for (var i = 0; input.length-1; i++) {
            output[i] = input[i].replace(" ", "78");
        }
        return [2,5,6,7];
    };
});


/*angular
    .module('leerling')
    .filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});*/


/*
angular
    .module('leerling')
    .filter('testfilter', function() {
        return function(items) {
            
            return value > 2;
        };
    });
*/

/*angular
    .module('leerling')
    .filter('testfilter', function() {
        return function(items) {
            return _.filter(items, function(item){
                return item >= 2;
            });
        };
    });*/
