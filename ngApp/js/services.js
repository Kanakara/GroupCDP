var app;
(function (app) {
    var Services;
    (function (Services) {
        var CarService = (function () {
            function CarService($resource) {
                this.$resource = $resource;
                this.carResource = $resource("api/cars/:id");
                this.makeResource = $resource("api/makes");
            }
            CarService.prototype.list = function () {
                return this.carResource.query();
            };
            CarService.prototype.makesList = function () {
                return this.makeResource.query();
            };
            return CarService;
        }());
        Services.CarService = CarService;
        angular.module("app").service("carService", CarService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0FtQlo7QUFuQkQsV0FBVSxHQUFHO0lBQUMsSUFBQSxRQUFRLENBbUJyQjtJQW5CYSxXQUFBLFFBQVEsRUFBQyxDQUFDO1FBQ3RCO1lBV0ksb0JBQW9CLFNBQXNDO2dCQUF0QyxjQUFTLEdBQVQsU0FBUyxDQUE2QjtnQkFDdEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRWpELENBQUM7WUFaTSx5QkFBSSxHQUFYO2dCQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2xDLENBQUM7WUFDTSw4QkFBUyxHQUFoQjtnQkFFRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNuQyxDQUFDO1lBT0gsaUJBQUM7UUFBRCxDQUFDLEFBaEJELElBZ0JDO1FBaEJZLG1CQUFVLGFBZ0J0QixDQUFBO1FBQ0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzFELENBQUMsRUFuQmEsUUFBUSxHQUFSLFlBQVEsS0FBUixZQUFRLFFBbUJyQjtBQUFELENBQUMsRUFuQlMsR0FBRyxLQUFILEdBQUcsUUFtQloifQ==