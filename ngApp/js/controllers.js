var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($state, carService) {
                this.$state = $state;
                this.carService = carService;
                this.cars = this.carService.list();
                this.makes = this.carService.makesList();
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        angular.module('app').controller('HomeController', HomeController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0FhWjtBQWJELFdBQVUsR0FBRztJQUFDLElBQUEsV0FBVyxDQWF4QjtJQWJhLFdBQUEsV0FBVyxFQUFDLENBQUM7UUFDekI7WUFLRSx3QkFBb0IsTUFBMEIsRUFBVSxVQUFrQztnQkFBdEUsV0FBTSxHQUFOLE1BQU0sQ0FBb0I7Z0JBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBd0I7Z0JBQ3hGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQzNDLENBQUM7WUFDSCxxQkFBQztRQUFELENBQUMsQUFURCxJQVNDO1FBVFksMEJBQWMsaUJBUzFCLENBQUE7UUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUNyRSxDQUFDLEVBYmEsV0FBVyxHQUFYLGVBQVcsS0FBWCxlQUFXLFFBYXhCO0FBQUQsQ0FBQyxFQWJTLEdBQUcsS0FBSCxHQUFHLFFBYVoifQ==