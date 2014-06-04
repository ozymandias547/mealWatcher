/*
 * Created by jkarova on 5/27/2014.
 */

var mealWatcher = angular.module('MealWatcher', [
	'ngResource',
	'ngRoute',
	'ui.bootstrap'
	// 'mWatcherServices'
]);

mealWatcher.config(function($routeProvider) {

	$routeProvider
		.when('/main', {
			templateUrl: 'views/main.html',
			controller: 'MainCtrl'
		});

})

mealWatcher.controller('MainCtrl', function($scope, $http, Tasks) {
	console.log("hi")
	// $scope.userName = 'Jeff';

	// $scope.tasks = [];

	// var foo = Tasks.query({}, function() {
	// 	$scope.tasks = foo[0].tasks;
	// });

	// $scope.remaining = function() {
	// 	return $scope.tasks.reduce(function(count, task) {
	// 		return task.done ? count : count + 1;
	// 	}, 0);
	// };

	// $scope.add = function(newTask) {
	// 	$scope.tasks.push({
	// 		text: newTask.text,
	// 		done: false
	// 	});
	// 	newTask.text = "";
	// };

	// $scope.archive = function() {
	// 	$scope.tasks = $scope.tasks.filter(function(task) {
	// 		return !task.done;
	// 	});
	// };
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