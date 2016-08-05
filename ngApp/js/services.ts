namespace app.Services {
  export class CarService {
    public carResource;
    public makeResource;
    public list(){
      return this.carResource.query();
    }
    public makesList()
    {
      return this.makeResource.query();
    }

      constructor(private $resource:ng.resource.IResourceService,) {
          this.carResource = $resource(`api/cars/:id`);
          this.makeResource = $resource(`api/makes`);

    }
  }
  angular.module(`app`).service(`carService`, CarService);
}
