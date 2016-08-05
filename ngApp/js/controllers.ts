namespace app.Controllers {
  export class HomeController {
    public cars;
    public makes;

    public showModal(car: string)
    {
      this.$uibModal.open({
        templateUrl: "/templates/detailsModal.html",
        controller: DialogController,
        controllerAs: "vm",
        resolve: {car: () => car},
      });
    }


    constructor(private $state:ng.ui.IStateService, private carService:app.Services.CarService, private $uibModal: angular.ui.bootstrap.IModalService) {
      this.cars = this.carService.list();
      this.makes = this.carService.makesList();
    }
  }
  export class DialogController
  {
    public exit()
    {
      this.$uibModalInstance.close();
    }

    constructor(public car, private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance)
    {

    }
  }
  angular.module('app').controller('HomeController', HomeController);
}
