"use strict";
var express = require('express');
var router = express.Router();
var makes = [
    { id: 1, name: 'BMW' },
    { id: 2, name: 'Tesla' },
    { id: 3, name: 'Mini Cooper' }
];
var cars = [
    {
        id: 1,
        ShortDescription: "Green MINI Cooper S",
        FullDescription: "This MINI Cooper S is great for the city.",
        CarMakeId: 3,
        Price: 30000,
        ImageUrl: "https://netlogx.com/wp-content/uploads/2012/09/british-racing-green-mini-cooper-s-small1.jpg"
    },
    {
        id: 2,
        ShortDescription: "Orange MINI Cooper S",
        FullDescription: "Orange is an odd color for a car.",
        CarMakeId: 3,
        Price: 25000,
        ImageUrl: "https://s-media-cache-ak0.pinimg.com/736x/7d/d3/fc/7dd3fcdea71950a3d1c9c50b3522d488.jpg"
    },
    {
        id: 3,
        ShortDescription: "Black MINI Cooper Countryman",
        FullDescription: "Holds more people than a normal MINI cooper and it is invisible at night.",
        CarMakeId: 3,
        Price: 45000,
        ImageUrl: "http://www.moibbk.com/images/mini-cooper-countryman-black-2.jpg"
    },
    {
        id: 4,
        ShortDescription: "Tesla Model S",
        FullDescription: "This red Tesla Model S has a 120 mile range.",
        CarMakeId: 2,
        Price: 130000,
        ImageUrl: "http://media.caranddriver.com/images/14q4/638369/2015-tesla-model-s-p85d-first-drive-review-car-and-driver-photo-648964-s-original.jpg"
    },
    {
        id: 5,
        ShortDescription: "Tesla Model X",
        FullDescription: "A Tesla Mini Van with Falcon Doors.",
        CarMakeId: 2,
        Price: 150000,
        ImageUrl: "http://cdn.vrworld.com/wp-content/uploads/2015/09/tesla-model-x-concept-doors-open-rear-three-quarter.jpg"
    }
];
router.get('/cars', function (req, res, next) {
    res.json(cars);
});
router.get('/cars/:id', function (req, res, next) {
    var id = parseInt(req.params['id']);
    var car = findCar(id);
    if (car) {
        res.json(car);
    }
    else {
        res.sendStatus(404);
    }
});
function findCar(id) {
    var matches = cars.filter(function (car) {
        return car.id == id;
    });
    return matches.length ? matches[0] : null;
}
module.exports = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQU8sT0FBTyxXQUFXLFNBQVMsQ0FBQyxDQUFDO0FBQ3BDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU5QixJQUFJLEtBQUssR0FBRztJQUNWLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxJQUFJLEVBQUMsS0FBSyxFQUFDO0lBQ2xCLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxJQUFJLEVBQUMsT0FBTyxFQUFDO0lBQ3BCLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxJQUFJLEVBQUMsYUFBYSxFQUFDO0NBQzNCLENBQUM7QUFFRixJQUFJLElBQUksR0FBRztJQUNIO1FBQ0ksRUFBRSxFQUFFLENBQUM7UUFDTCxnQkFBZ0IsRUFBRSxxQkFBcUI7UUFDdkMsZUFBZSxFQUFHLDJDQUEyQztRQUM3RCxTQUFTLEVBQUcsQ0FBQztRQUNiLEtBQUssRUFBRyxLQUFLO1FBQ2IsUUFBUSxFQUFHLDhGQUE4RjtLQUM1RztJQUNEO1FBQ0ksRUFBRSxFQUFFLENBQUM7UUFDTCxnQkFBZ0IsRUFBRyxzQkFBc0I7UUFDekMsZUFBZSxFQUFHLG1DQUFtQztRQUNyRCxTQUFTLEVBQUcsQ0FBQztRQUNiLEtBQUssRUFBRyxLQUFLO1FBQ2IsUUFBUSxFQUFHLHlGQUF5RjtLQUN2RztJQUNEO1FBQ0ksRUFBRSxFQUFFLENBQUM7UUFDTCxnQkFBZ0IsRUFBRyw4QkFBOEI7UUFDakQsZUFBZSxFQUFHLDJFQUEyRTtRQUM3RixTQUFTLEVBQUcsQ0FBQztRQUNiLEtBQUssRUFBRyxLQUFLO1FBQ2IsUUFBUSxFQUFHLGlFQUFpRTtLQUMvRTtJQUNEO1FBQ0ksRUFBRSxFQUFFLENBQUM7UUFDTCxnQkFBZ0IsRUFBRyxlQUFlO1FBQ2xDLGVBQWUsRUFBRyw4Q0FBOEM7UUFDaEUsU0FBUyxFQUFHLENBQUM7UUFDYixLQUFLLEVBQUcsTUFBTTtRQUNkLFFBQVEsRUFBRyx3SUFBd0k7S0FDdEo7SUFDRDtRQUNJLEVBQUUsRUFBRSxDQUFDO1FBQ0wsZ0JBQWdCLEVBQUcsZUFBZTtRQUNsQyxlQUFlLEVBQUcscUNBQXFDO1FBQ3ZELFNBQVMsRUFBRyxDQUFDO1FBQ2IsS0FBSyxFQUFHLE1BQU07UUFDZCxRQUFRLEVBQUcsMkdBQTJHO0tBQ3pIO0NBQ1IsQ0FBQztBQUVGLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFVBQVUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO0lBQ3hDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbkIsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxVQUFVLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSTtJQUM1QyxJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN0QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDSixHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVILGlCQUFpQixFQUFTO0lBQ3hCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQyxHQUFHO1FBQzVCLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDLENBQUMsQ0FBQztJQUNILE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDNUMsQ0FBQztBQUVELGlCQUFTLE1BQU0sQ0FBQyJ9