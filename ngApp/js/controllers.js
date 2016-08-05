var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($state, carService, $uibModal) {
                this.$state = $state;
                this.carService = carService;
                this.$uibModal = $uibModal;
                this.cars = this.carService.list();
                this.makes = this.carService.makesList();
            }
            HomeController.prototype.showModal = function (car) {
                this.$uibModal.open({
                    templateUrl: "/templates/detailsModal.html",
                    controller: DialogController,
                    controllerAs: "vm",
                    resolve: { car: function () { return car; } },
                });
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var DialogController = (function () {
            function DialogController(car, $uibModalInstance) {
                this.car = car;
                this.$uibModalInstance = $uibModalInstance;
            }
            DialogController.prototype.exit = function () {
                this.$uibModalInstance.close();
            };
            return DialogController;
        }());
        Controllers.DialogController = DialogController;
        angular.module('app').controller('HomeController', HomeController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0FrQ1o7QUFsQ0QsV0FBVSxHQUFHO0lBQUMsSUFBQSxXQUFXLENBa0N4QjtJQWxDYSxXQUFBLFdBQVcsRUFBQyxDQUFDO1FBQ3pCO1lBZUUsd0JBQW9CLE1BQTBCLEVBQVUsVUFBa0MsRUFBVSxTQUE2QztnQkFBN0gsV0FBTSxHQUFOLE1BQU0sQ0FBb0I7Z0JBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBd0I7Z0JBQVUsY0FBUyxHQUFULFNBQVMsQ0FBb0M7Z0JBQy9JLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQzNDLENBQUM7WUFkTSxrQ0FBUyxHQUFoQixVQUFpQixHQUFXO2dCQUUxQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztvQkFDbEIsV0FBVyxFQUFFLDhCQUE4QjtvQkFDM0MsVUFBVSxFQUFFLGdCQUFnQjtvQkFDNUIsWUFBWSxFQUFFLElBQUk7b0JBQ2xCLE9BQU8sRUFBRSxFQUFDLEdBQUcsRUFBRSxjQUFNLE9BQUEsR0FBRyxFQUFILENBQUcsRUFBQztpQkFDMUIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQU9ILHFCQUFDO1FBQUQsQ0FBQyxBQW5CRCxJQW1CQztRQW5CWSwwQkFBYyxpQkFtQjFCLENBQUE7UUFDRDtZQU9FLDBCQUFtQixHQUFHLEVBQVUsaUJBQTZEO2dCQUExRSxRQUFHLEdBQUgsR0FBRyxDQUFBO2dCQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBNEM7WUFHN0YsQ0FBQztZQVJNLCtCQUFJLEdBQVg7Z0JBRUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2pDLENBQUM7WUFNSCx1QkFBQztRQUFELENBQUMsQUFYRCxJQVdDO1FBWFksNEJBQWdCLG1CQVc1QixDQUFBO1FBQ0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDckUsQ0FBQyxFQWxDYSxXQUFXLEdBQVgsZUFBVyxLQUFYLGVBQVcsUUFrQ3hCO0FBQUQsQ0FBQyxFQWxDUyxHQUFHLEtBQUgsR0FBRyxRQWtDWiJ9