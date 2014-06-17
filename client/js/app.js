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
			.when('/recipe_edit', {
				templateUrl: '../views/recipe_edit.html'
			})
			.when('/shopping_list', {
				templateUrl: '../views/shopping_list.html',
				controller: 'ShoppingListCtrl'
			})
			.otherwise({
				redirectTo: '/recipe_list'
			});

	}
]);

mealWatcher.controller('RecipeListCtrl', ['$scope', '$location', 'Recipe',
	function($scope, $location, Recipe) {
		$scope.pageName = "Recipe List";
		$scope.recipes = Recipe.query();

		$scope.showRecipe = function(e, id) {
			console.log(e);

			if (e.target.classList.contains('glyphicon')) {
				var elem = $('.glyphicon-bookmark', e.currentTarget);

				if (elem.css('top') == '0px')
					elem.css('top', '-25px');
				else
					elem.css('top', '0px');

			} else {
				$location.path('recipe_view/' + $scope.recipes[id]._id);
			}
		}

		$scope.toggleRecipeSelect = function() {
			$scope.recipeSelect = !$scope.recipeSelect;
		}

		$scope.toggleMarked = function(e) {
			console.log(e);
		}
	}
]);

mealWatcher.controller('RecipeViewCtrl', ['$scope', '$routeParams', 'Recipe', function($scope, $routeParams, Recipe) {
	
	$scope.pageName = "Recipe View";
	$scope.isViewingInstructions = false;

	var recipe = Recipe.get({ id : $routeParams.recipe }, function() {
		$scope.recipe = recipe;
	})

	$scope.toggleInstructions = function() {
		console.log("hi")
		$scope.isViewingInstructions = !$scope.isViewingInstructions;
	}

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