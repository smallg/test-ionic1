angular.module('starter.controllers', [])

    .controller('DashCtrl', function ($scope, $state) {
        $scope.goTest = function () {
            $state.go('test')
        }
    })

    .controller('ChatsCtrl', function ($scope, $state, Chats) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        $scope.chats = Chats.all();
        $scope.remove = function (chat) {
            Chats.remove(chat);
        };
        $scope.goTest = function () {
            $state.go('test')
        }
    })

    .controller('TestCtrl', function ($scope, $window, Chats) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});
        // $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        //     viewData.enableBack = true;
        // });
        $scope.goBack = function () {
            $window.history.go(-1);
        }
        $scope.chats = Chats.all();
        $scope.remove = function (chat) {
            Chats.remove(chat);
        };
    })

    .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    })

    .controller('AccountCtrl', function ($scope) {
        $scope.settings = {
            enableFriends: true
        };
    });
