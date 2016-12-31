/**
 * Created by apium on 12/31/2016.
 */
app.controller('TamSoatUngThuDotQuyController', ['$scope', '$uibModal', TamSoatUngThuDotQuy]);

function TamSoatUngThuDotQuy($scope, $uibModal, $uibModalInstance) {
    $scope.data = {};
    $scope.event = {};

    $scope.data.email = '';

    $scope.event.onOpenForm = function() {
        $uibModal.open({
            templateUrl: 'register-form.html',
            controller: TamSoatUngThuDotQuy,
            backdrop: 'static',
            windowClass: 'register-form'
        });
    };

    $scope.event.dismiss = function() {
        $uibModalInstance.dismiss();
    };
}