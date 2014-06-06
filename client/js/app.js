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
			.when('/recipe_view/:recipe', {
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

mealWatcher.controller('RecipeListCtrl', ['$scope', '$location', 'Recipe',
	function($scope, $location, Recipe) {
		$scope.pageName = "Recipe List";
		$scope.recipes = Recipe.query();

		$scope.showRecipe = function(id) {
			$location.path('recipe_view/' + $scope.recipes[id]._id);
		}

	}
]);

mealWatcher.controller('RecipeViewCtrl', ['$scope', '$routeParams', 'Recipe', function($scope, $routeParams, Recipe) {
	$scope.pageName = "Recipe View";
	
	var recipe = Recipe.get({ id : $routeParams.recipe }, function() {
		console.log(recipe)
		$scope.recipe = recipe;
	})

}]);

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