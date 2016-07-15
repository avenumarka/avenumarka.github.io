var app = angular.module('app', ['wu.masonry']);

app.controller('HomeCtrl',['$scope', function($scope) {


    /*
    var links= [{
                'name' : "First project",
                'url' : "https://placeimg.com/460/340/nature",
                'slug' : "first"
            },{
                'name' : "First project",
                'url' : "https://placeimg.com/460/340/people",
                'slug' : "first"
            }, {
                'name' : "Second project",
                'url' : "https://placeimg.com/230/340/arch",
                'slug' : "second"
            },{
                'name' : "Second project",
                'url' : "https://placeimg.com/230/340/nature",
                'slug' : "second"
            },{
                'name' : "Third project",
                'url' : "https://placeimg.com/230/170/any",
                'slug' : "third"
            },{
                'name' : "Third project",
                'url' : "https://placeimg.com/230/170/arch",
                'slug' : "third"
            }];

            var changelink = function() {
                var randomNumber = Math.floor(Math.random()*6);
                var color = links[randomNumber];
                return color;
            }
            var add = function() {
                var data=[];
                for (var i=0; i<30; i++) {
                    var d = changelink();
                    data.push(d);
                    console.log(JSON.stringify(data))
                    $scope.projects = dats;
                }
            }
    */

    $scope.title = " MARKA | Home";

    $scope.projects = [{"name":"Third project","url":"https://placeimg.com/230/170/any","slug":"third"},{"name":"First project","url":"https://placeimg.com/460/340/nature","slug":"first"},{"name":"Second project","url":"https://placeimg.com/230/340/arch","slug":"second"},{"name":"Second project","url":"https://placeimg.com/230/340/arch","slug":"second"},{"name":"First project","url":"https://placeimg.com/460/340/people","slug":"first"},{"name":"Second project","url":"https://placeimg.com/230/340/arch","slug":"second"},{"name":"First project","url":"https://placeimg.com/460/340/nature","slug":"first"},{"name":"Second project","url":"https://placeimg.com/230/340/nature","slug":"second"},{"name":"Second project","url":"https://placeimg.com/230/340/nature","slug":"second"},{"name":"First project","url":"https://placeimg.com/460/340/people","slug":"first"},{"name":"Third project","url":"https://placeimg.com/230/170/arch","slug":"third"},{"name":"Third project","url":"https://placeimg.com/230/170/any","slug":"third"},{"name":"First project","url":"https://placeimg.com/460/340/nature","slug":"first"},{"name":"Third project","url":"https://placeimg.com/230/170/arch","slug":"third"},{"name":"Third project","url":"https://placeimg.com/230/170/arch","slug":"third"},{"name":"Third project","url":"https://placeimg.com/230/170/any","slug":"third"},{"name":"Third project","url":"https://placeimg.com/230/170/arch","slug":"third"},{"name":"Second project","url":"https://placeimg.com/230/340/nature","slug":"second"},{"name":"First project","url":"https://placeimg.com/460/340/nature","slug":"first"},{"name":"First project","url":"https://placeimg.com/460/340/people","slug":"first"},{"name":"First project","url":"https://placeimg.com/460/340/nature","slug":"first"},{"name":"Third project","url":"https://placeimg.com/230/170/arch","slug":"third"},{"name":"Second project","url":"https://placeimg.com/230/340/nature","slug":"second"},{"name":"Second project","url":"https://placeimg.com/230/340/arch","slug":"second"},{"name":"Third project","url":"https://placeimg.com/230/170/any","slug":"third"},{"name":"First project","url":"https://placeimg.com/460/340/people","slug":"first"},{"name":"First project","url":"https://placeimg.com/460/340/people","slug":"first"},{"name":"Third project","url":"https://placeimg.com/230/170/arch","slug":"third"},{"name":"First project","url":"https://placeimg.com/460/340/nature","slug":"first"},{"name":"Third project","url":"https://placeimg.com/230/170/arch","slug":"third"}];

    var colors = ['red', 'green', 'blue', 'gold', 'yellow', 'brown', 'pink', 'white'];
    $scope.changeColor = function() {
        var randomNumber = Math.floor(Math.random()*7);
        $scope.color=colors[randomNumber];
    }
}]);