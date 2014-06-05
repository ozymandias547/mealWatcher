/*
 * Created by jkarova on 5/27/2014.
 */

var mealWatcher = angular.module('MealWatcher', [
	'ngResource',
	'ngRoute',
	'ui.bootstrap'
	// 'mWatcherServices'
]);

mealWatcher.config(['$routeProvider', 
	function($routeProvider) {
		console.log("router");
		$routeProvider
			.when('/main', {
				templateUrl: '../views/main.html',
				controller: 'MainCtrl'
			})
			.when('/recipe_list', {
				templateUrl: '../views/recipe_list.html',
				controller: 'RecipeListCtrl'
			})
			.when('/recipe_view', {
				templateUrl: '../views/recipe_view.html',
				controller: 'RecipeViewCtrl'
			})
			.when('/shopping_list', {
				templateUrl: '../views/shopping_list.html',
				controller: 'ShoppingListCtrl'
			})
			.otherwise({redirectTo:'/main'});

}]);

mealWatcher.controller('MainCtrl', function($scope) {
	$scope.appName = "Skillet";
});

mealWatcher.controller('RecipeListCtrl', function($scope) {
	$scope.pageName = "Recipe List";
});

mealWatcher.controller('RecipeViewCtrl', function($scope) {
	$scope.pageName = "Recipe View";
});

mealWatcher.controller('ShoppingListCtrl', function($scope) {
	$scope.pageName = "Shopping List";
});

// var mWatcherServices = angular.module('mWatcherServices', ['ngResource']);

// mWatcherServices.factory('Tasks', ['$resource',
// 	function($resource) {
// 		return $resource('https://api.mongolab.com/api/1/databases/sandbox/collections/tasks', {}, {
// 			query: {
// 				method: 'GET',
// 				params: {
// 					'apiKey': '25AYYZ_IQLIzVvorODhAr7VhWraMoLC5'
// 				},
// 				isArray: true
// 			}
// 		})
// 	}
// ]);