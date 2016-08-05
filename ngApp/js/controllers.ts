namespace app.Controllers {
  export class HomeController {
    public cars;


    constructor(private $state:ng.ui.IStateService, private carService:app.Services.CarService) {
      this.cars = this.carService.list();
      
    }
  }

  angular.module('app').controller('HomeController', HomeController);
}
