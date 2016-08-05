"use strict";
var express = require('express');
var router = express.Router();
var makes = [
    { id: 1, name: 'BMW' },
    { id: 2, name: 'Tesla' },
    { id: 3, name: 'Mini Cooper' }
];
router.get('/makes', function (req, res, next) {
    res.json(makes);
});
module.exports = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFrZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWtlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTyxPQUFPLFdBQVcsU0FBUyxDQUFDLENBQUM7QUFDcEMsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTlCLElBQUksS0FBSyxHQUFHO0lBQ1YsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFFLElBQUksRUFBQyxLQUFLLEVBQUM7SUFDbEIsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFFLElBQUksRUFBQyxPQUFPLEVBQUM7SUFDcEIsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFFLElBQUksRUFBQyxhQUFhLEVBQUM7Q0FDM0IsQ0FBQztBQUdGLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFVBQVMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO0lBQzFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbEIsQ0FBQyxDQUFDLENBQUM7QUFFSCxpQkFBUyxNQUFNLENBQUMifQ==