namespace app.Controllers {
  export class HomeController {
    public cars;
    public makes;

    constructor(private $state:ng.ui.IStateService, private carService:app.Services.CarService) {
      this.cars = this.carService.list();
      this.makes = this.carService.makesList();
    }
  }

  angular.module('app').controller('HomeController', HomeController);
}
