var mainApp = angular.module("mainApp", []);

mainApp.controller('UserController', function ($scope) {
    $scope.student = {
        firstName: "Mahesh",
        lastName: "Parashar",

        fullName: function () {
            var studentObject;
            studentObject = $scope.student;
            return studentObject.firstName + " " + studentObject.lastName;
        }
    };
});