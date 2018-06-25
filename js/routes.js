angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('collabX', {
    url: '/splash',
    templateUrl: 'templates/collabX.html',
    controller: 'collabXCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('yourProjects', {
    url: '/workspaces',
    templateUrl: 'templates/yourProjects.html',
    controller: 'yourProjectsCtrl'
  })

  .state('project1', {
    url: '/teamList',
    templateUrl: 'templates/project1.html',
    controller: 'project1Ctrl'
  })

  .state('project12', {
    url: '/my-tasks',
    templateUrl: 'templates/project12.html',
    controller: 'project12Ctrl'
  })

  .state('project13', {
    url: '/chat',
    templateUrl: 'templates/project13.html',
    controller: 'project13Ctrl'
  })

  .state('project14', {
    url: '/file-cabinet',
    templateUrl: 'templates/project14.html',
    controller: 'project14Ctrl'
  })

$urlRouterProvider.otherwise('/splash')


});