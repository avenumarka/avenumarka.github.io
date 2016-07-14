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
            },
            {
                'name' : "",
                'url' : "http://lorempixel.com/image_output/people-h-c-327-708-9.jpg",
                'slug' : ""
            },
            {
                'name' : "",
                'url' : "http://lorempixel.com/image_output/transport-h-c-327-565-2.jpg",
                'slug' : ""
            },
            {
                'name' : "",
                'url' : "http://lorempixel.com/image_output/nightlife-h-c-423-531-10.jpg",
                'slug' : ""
            },
            {
                'name' : "",
                'url' : "http://lorempixel.com/image_output/nightlife-h-c-517-649-4.jpg",
                'slug' : ""
            },
            {
                'name' : "",
                'url' : "http://lorempixel.com/image_output/nightlife-h-c-208-276-2.jpg",
                'slug' : ""
            },
            {
                'name' : "",
                'url' : "http://lorempixel.com/image_output/nightlife-h-c-271-295-1.jpg",
                'slug' : ""
            },
            {
                'name' : "",
                'url' : "http://lorempixel.com/image_output/food-h-c-513-528-9.jpg",
                'slug' : ""
            },
            {
                'name' : "",
                'url' : "http://lorempixel.com/image_output/food-q-c-657-397-5.jpg",
                'slug' : ""
            }
    ]

    var colors = ['red', 'green', 'blue', 'gold', 'yellow', 'brown', 'pink', 'white'];
    $scope.changeColor = function() {
        var randomNumber = Math.floor(Math.random()*7);
        $scope.color=colors[randomNumber];
    }
}]);
