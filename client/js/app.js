/*
 * Created by jkarova on 5/27/2014.
 */

var mealWatcher = angular.module('MealWatcher', [
	'ngResource',
	'ngRoute',
	'ui.bootstrap'
]);

mealWatcher.config(['$routeProvider',
	function($routeProvider) {
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
			.otherwise({
				redirectTo: '/main'
			});

	}
]);

mealWatcher.controller('MainCtrl', function($scope) {
	$scope.appName = "Skillet";
});

mealWatcher.controller('RecipeListCtrl', ['$scope', 'Recipe',
	function($scope, Recipe) {
		$scope.pageName = "Recipe List";
		$scope.recipes = Recipe.query();
	}
]);

mealWatcher.controller('RecipeViewCtrl', function($scope) {
	$scope.pageName = "Recipe View";
});

mealWatcher.controller('ShoppingListCtrl', function($scope) {
	$scope.pageName = "Shopping List";
});

angular.module('MealWatcher')
	.factory('Recipe', ['$resource', function($resource) {
		return $resource('/recipe/:id/', {}, {
			'update': {
				method: 'PUT'
			}
		});
	}]);