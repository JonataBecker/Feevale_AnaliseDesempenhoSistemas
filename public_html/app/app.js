angular.module('app', ['ui.router', 'ngResource'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/app/dados');
            $stateProvider
                    .state('app', {
                        url: '/app',
                        abstract: true,
                        templateUrl: 'app/template/app.html',
                        controller: 'AppController'
                    })
                    .state('app.dados', {
                        url: "/dados",
                        views: {
                            'container': {
                                templateUrl: "app/template/dados.html",
                                controller: 'DadosController'
                            }
                        }
                    });

        });
