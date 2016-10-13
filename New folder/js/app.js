var app = angular.module('app', ['wu.masonry','ui.router']);

app.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/"); 
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "./views/home.html",
      controller: "HomeCtrl"
    })
});

app.controller('HomeCtrl',['$scope', function($scope) {

    $scope.title = " MARKA | Home";
    console.log('inside controller');

    $scope.projects = [{"name":"Third project","url":"https://placeimg.com/230/170/any","slug":"third"},{"name":"First project","url":"https://placeimg.com/460/340/nature","slug":"first"},{"name":"Second project","url":"https://placeimg.com/230/340/arch","slug":"second"},{"name":"Second project","url":"https://placeimg.com/230/340/arch","slug":"second"},{"name":"First project","url":"https://placeimg.com/460/340/people","slug":"first"},{"name":"Second project","url":"https://placeimg.com/230/340/arch","slug":"second"},{"name":"First project","url":"https://placeimg.com/460/340/nature","slug":"first"},{"name":"Second project","url":"https://placeimg.com/230/340/nature","slug":"second"},{"name":"Second project","url":"https://placeimg.com/230/340/nature","slug":"second"},{"name":"First project","url":"https://placeimg.com/460/340/people","slug":"first"},{"name":"Third project","url":"https://placeimg.com/230/170/arch","slug":"third"},{"name":"Third project","url":"https://placeimg.com/230/170/any","slug":"third"},{"name":"First project","url":"https://placeimg.com/460/340/nature","slug":"first"},{"name":"Third project","url":"https://placeimg.com/230/170/arch","slug":"third"},{"name":"Third project","url":"https://placeimg.com/230/170/arch","slug":"third"},{"name":"Third project","url":"https://placeimg.com/230/170/any","slug":"third"},{"name":"Third project","url":"https://placeimg.com/230/170/arch","slug":"third"},{"name":"Second project","url":"https://placeimg.com/230/340/nature","slug":"second"},{"name":"First project","url":"https://placeimg.com/460/340/nature","slug":"first"},{"name":"First project","url":"https://placeimg.com/460/340/people","slug":"first"},{"name":"First project","url":"https://placeimg.com/460/340/nature","slug":"first"},{"name":"Third project","url":"https://placeimg.com/230/170/arch","slug":"third"},{"name":"Second project","url":"https://placeimg.com/230/340/nature","slug":"second"},{"name":"Second project","url":"https://placeimg.com/230/340/arch","slug":"second"},{"name":"Third project","url":"https://placeimg.com/230/170/any","slug":"third"},{"name":"First project","url":"https://placeimg.com/460/340/people","slug":"first"},{"name":"First project","url":"https://placeimg.com/460/340/people","slug":"first"},{"name":"Third project","url":"https://placeimg.com/230/170/arch","slug":"third"},{"name":"First project","url":"https://placeimg.com/460/340/nature","slug":"first"},{"name":"Third project","url":"https://placeimg.com/230/170/arch","slug":"third"}];

    var colors = ['red', 'green', 'blue', 'gold', 'yellow', 'brown', 'pink', 'white'];
    $scope.changeColor = function() {
        var randomNumber = Math.floor(Math.random()*7);
        $scope.color=colors[randomNumber];
    }
}]);