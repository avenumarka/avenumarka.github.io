var app = angular.module('app', []);

app.controller('HomeCtrl',['$scope', function($scope) {
    $scope.title = " AVENU | Home";

    $scope.projects = [
        {
            'name': 'The first project',
            'image': 'https://static.wixstatic.com/media/6eaf67_91c96d3eb97b4d519b6ca6698ba599a2.jpg/v1/fill/w_237,h_237,al_c,q_80,usm_0.66_1.00_0.01/6eaf67_91c96d3eb97b4d519b6ca6698ba599a2.jpg',
            'url' : ''
        },
        {
            'name': 'The first project',
            'image': 'https://static.wixstatic.com/media/6eaf67_113e4fc6ac3949019376454d0dc1efb9.jpg/v1/fill/w_237,h_237,al_c,q_80,usm_0.66_1.00_0.01/6eaf67_113e4fc6ac3949019376454d0dc1efb9.jpg',
            'url' : ''
        },
        {
            'name': 'The first project',
            'image': 'https://static.wixstatic.com/media/6eaf67_6abc591830b24b98b7bc2d96696bf694.jpg/v1/fill/w_237,h_237,al_c,q_80,usm_0.66_1.00_0.01/6eaf67_6abc591830b24b98b7bc2d96696bf694.jpg',
            'url' : ''
        },
        {
            'name': 'The first project',
            'image': 'https://static.wixstatic.com/media/6eaf67_57b4212d2e4f499281d5b28a7f85449e.jpg/v1/fill/w_237,h_237,al_c,q_80,usm_0.66_1.00_0.01/6eaf67_57b4212d2e4f499281d5b28a7f85449e.jpg',
            'url' : ''
        },
        {
            'name': 'The first project',
            'image': 'https://static.wixstatic.com/media/6eaf67_53a84568b1b14b6594d614329f3a06db.jpg/v1/fill/w_237,h_237,al_c,q_80,usm_0.66_1.00_0.01/6eaf67_53a84568b1b14b6594d614329f3a06db.jpg',
            'url' : ''
        },
        {
            'name': 'The first project',
            'image': 'https://static.wixstatic.com/media/6eaf67_c697ab83878340ecad1d79d7b3de068a.jpg/v1/fill/w_237,h_237,al_c,q_80,usm_0.66_1.00_0.01/6eaf67_c697ab83878340ecad1d79d7b3de068a.jpg',
            'url' : ''
        },
            {
                'name': 'The first project',
                'image': 'https://static.wixstatic.com/media/6eaf67_91c96d3eb97b4d519b6ca6698ba599a2.jpg/v1/fill/w_237,h_237,al_c,q_80,usm_0.66_1.00_0.01/6eaf67_91c96d3eb97b4d519b6ca6698ba599a2.jpg',
                'url' : ''
            },
            {
                'name': 'The first project',
                'image': 'https://static.wixstatic.com/media/6eaf67_113e4fc6ac3949019376454d0dc1efb9.jpg/v1/fill/w_237,h_237,al_c,q_80,usm_0.66_1.00_0.01/6eaf67_113e4fc6ac3949019376454d0dc1efb9.jpg',
                'url' : ''
            },
            {
                'name': 'The first project',
                'image': 'https://static.wixstatic.com/media/6eaf67_6abc591830b24b98b7bc2d96696bf694.jpg/v1/fill/w_237,h_237,al_c,q_80,usm_0.66_1.00_0.01/6eaf67_6abc591830b24b98b7bc2d96696bf694.jpg',
                'url' : ''
            },
            {
                'name': 'The first project',
                'image': 'https://static.wixstatic.com/media/6eaf67_57b4212d2e4f499281d5b28a7f85449e.jpg/v1/fill/w_237,h_237,al_c,q_80,usm_0.66_1.00_0.01/6eaf67_57b4212d2e4f499281d5b28a7f85449e.jpg',
                'url' : ''
            },
            {
                'name': 'The first project',
                'image': 'https://static.wixstatic.com/media/6eaf67_53a84568b1b14b6594d614329f3a06db.jpg/v1/fill/w_237,h_237,al_c,q_80,usm_0.66_1.00_0.01/6eaf67_53a84568b1b14b6594d614329f3a06db.jpg',
                'url' : ''
            },
            {
                'name': 'The first project',
                'image': 'https://static.wixstatic.com/media/6eaf67_c697ab83878340ecad1d79d7b3de068a.jpg/v1/fill/w_237,h_237,al_c,q_80,usm_0.66_1.00_0.01/6eaf67_c697ab83878340ecad1d79d7b3de068a.jpg',
                'url' : ''
            },
                {
                    'name': 'The first project',
                    'image': 'https://static.wixstatic.com/media/6eaf67_91c96d3eb97b4d519b6ca6698ba599a2.jpg/v1/fill/w_237,h_237,al_c,q_80,usm_0.66_1.00_0.01/6eaf67_91c96d3eb97b4d519b6ca6698ba599a2.jpg',
                    'url' : ''
                },
                {
                    'name': 'The first project',
                    'image': 'https://static.wixstatic.com/media/6eaf67_113e4fc6ac3949019376454d0dc1efb9.jpg/v1/fill/w_237,h_237,al_c,q_80,usm_0.66_1.00_0.01/6eaf67_113e4fc6ac3949019376454d0dc1efb9.jpg',
                    'url' : ''
                },
                {
                    'name': 'The first project',
                    'image': 'https://static.wixstatic.com/media/6eaf67_6abc591830b24b98b7bc2d96696bf694.jpg/v1/fill/w_237,h_237,al_c,q_80,usm_0.66_1.00_0.01/6eaf67_6abc591830b24b98b7bc2d96696bf694.jpg',
                    'url' : ''
                },
                {
                    'name': 'The first project',
                    'image': 'https://static.wixstatic.com/media/6eaf67_57b4212d2e4f499281d5b28a7f85449e.jpg/v1/fill/w_237,h_237,al_c,q_80,usm_0.66_1.00_0.01/6eaf67_57b4212d2e4f499281d5b28a7f85449e.jpg',
                    'url' : ''
                },
                {
                    'name': 'The first project',
                    'image': 'https://static.wixstatic.com/media/6eaf67_53a84568b1b14b6594d614329f3a06db.jpg/v1/fill/w_237,h_237,al_c,q_80,usm_0.66_1.00_0.01/6eaf67_53a84568b1b14b6594d614329f3a06db.jpg',
                    'url' : ''
                },
                {
                    'name': 'The first project',
                    'image': 'https://static.wixstatic.com/media/6eaf67_c697ab83878340ecad1d79d7b3de068a.jpg/v1/fill/w_237,h_237,al_c,q_80,usm_0.66_1.00_0.01/6eaf67_c697ab83878340ecad1d79d7b3de068a.jpg',
                    'url' : ''
                }
    ]
}]);
