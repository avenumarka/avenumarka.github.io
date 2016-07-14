var app = angular.module('app', ['wu.masonry']);

app.controller('HomeCtrl',['$scope', function($scope) {
    $scope.title = " MARKA | Home";

    $scope.projects = [
            {
                'name' : "First project",
                'url' : "http://lorempixel.com/g/280/132/?1580",
                'slug' : "first"
            },
            {
                'name' : "",
                'url' : "http://lorempixel.com/g/280/132/?2523",
                'slug' : ""
            },
            {
                'name' : "",
                'url' : "http://lorempixel.com/g/280/267/?3889",
                'slug' : ""
            },
            {
                'name' : "",
                'url' : "http://lorempixel.com/g/280/233/?3131",
                'slug' : ""
            },
            {
                'name' : "",
                'url' : "http://lorempixel.com/g/280/238/?5650",
                'slug' : ""
            },
            {
                'name' : "",
                'url' : "http://lorempixel.com/g/280/318/?1442",
                'slug' : ""
            },
            {
                'name' : "",
                'url' : "http://lorempixel.com/400/200/sports/",
                'slug' : ""
            },
            {
                'name' : "",
                'url' : "http://lorempixel.com/g/280/577/?1180",
                'slug' : ""
            },
            {
                'name' : "",
                'url' : "http://lorempixel.com/image_output/city-h-c-267-290-1.jpg",
                'slug' : ""
            },
            {
                'name' : "",
                'url' : "http://lorempixel.com/g/280/186/?786",
                'slug' : ""
            }
    ]
}]);
