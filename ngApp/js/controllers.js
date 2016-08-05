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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0FZWjtBQVpELFdBQVUsR0FBRztJQUFDLElBQUEsV0FBVyxDQVl4QjtJQVphLFdBQUEsV0FBVyxFQUFDLENBQUM7UUFDekI7WUFJRSx3QkFBb0IsTUFBMEIsRUFBVSxVQUFrQztnQkFBdEUsV0FBTSxHQUFOLE1BQU0sQ0FBb0I7Z0JBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBd0I7Z0JBQ3hGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQzNDLENBQUM7WUFDSCxxQkFBQztRQUFELENBQUMsQUFSRCxJQVFDO1FBUlksMEJBQWMsaUJBUTFCLENBQUE7UUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUNyRSxDQUFDLEVBWmEsV0FBVyxHQUFYLGVBQVcsS0FBWCxlQUFXLFFBWXhCO0FBQUQsQ0FBQyxFQVpTLEdBQUcsS0FBSCxHQUFHLFFBWVoifQ==