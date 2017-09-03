
var app = angular.module('ngApp',['ui.router','ngApp.services']);
app.config(config);

function config($stateProvider, $urlRouterProvider) {

  $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        //controllerAs: 'ctrl'
      })    
      .state('product-list', {
        url: '/product-list',
        templateUrl: 'views/product-list.html',
        controller: 'ProductCtrl',
        controllerAs: 'ctrl'
      })  
      .state('product-create', {
        url: '/product-create',
        templateUrl: 'views/product-create.html',
        controller: 'ProductCtrl',
        controllerAs: 'ctrl'
      })  

      .state('location-list', {
        url: '/location-list',
        templateUrl: 'views/location-list.html',
        controller: 'LocationCtrl',
        controllerAs: 'ctrl'
      })

      .state('location-create', {
        url: '/location-create',
        templateUrl: 'views/location-create.html',
        controller: 'LocationCtrl',
        controllerAs: 'ctrl'
      })
      $urlRouterProvider.otherwise('/');

    
}

app.run(run);
run.$inject = ['$rootScope','$location'];

function run($rootScope){
}

app.controller('HomeCtrl',function ($scope, $rootScope , DBService) {
	
	console.log('home controller loaded');
  $rootScope.db = {
    host     : 'localhost',
    user     : 'root',
    password : 'jb395566',
    database : 'demodb'
  };
  console.log("using database " + $rootScope.db.database);

  DBService.connect($rootScope.db);

});

app.controller('ProductCtrl',function ($scope, $rootScope , DBService) {
	
	console.log('product controller loaded');
  
});

app.controller('LocationCtrl',function ($scope) {
	
	console.log('location controller loaded');

});
