"use strict";
var express = require('express');
var router = express.Router();
router.get('/deepThought/getAnswer', function (req, res, next) {
    var possibilities = [
        "42", "popcorn", "vacations", "money", "friends", "movies"
    ];
    setTimeout(function () {
        var index = Math.floor(Math.random() * possibilities.length);
        var answer = { text: 'The answer is ' + possibilities[index] };
        res.json(answer);
    }, 3000);
});
router.get('/deepThought/fortune', function (req, res, next) {
    var possibilities = [
        "You are destined to be eaten by a bear.",
        "You will be rich and powerful beyond your dreams.",
        "You will win a talent show and start a succesful rock band."
    ];
    setTimeout(function () {
        var index = Math.floor(Math.random() * possibilities.length);
        var answer = { text: possibilities[index] };
        res.json(answer);
    }, 3000);
});
module.exports = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVlcFRob3VnaHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZWVwVGhvdWdodC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTyxPQUFPLFdBQVcsU0FBUyxDQUFDLENBQUM7QUFDcEMsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRzlCLE1BQU0sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsVUFBUyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7SUFDMUQsSUFBSSxhQUFhLEdBQUc7UUFDbEIsSUFBSSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRO0tBQzNELENBQUM7SUFFRixVQUFVLENBQUM7UUFDVCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0QsSUFBSSxNQUFNLEdBQUcsRUFBQyxJQUFJLEVBQUMsZ0JBQWdCLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUM7UUFDNUQsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNsQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDWCxDQUFDLENBQUMsQ0FBQztBQUdILE1BQU0sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsVUFBUyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7SUFDeEQsSUFBSSxhQUFhLEdBQUc7UUFDbEIseUNBQXlDO1FBQ3pDLG1EQUFtRDtRQUNuRCw2REFBNkQ7S0FDOUQsQ0FBQztJQUVGLFVBQVUsQ0FBQztRQUNULElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3RCxJQUFJLE1BQU0sR0FBRyxFQUFDLElBQUksRUFBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQztRQUN6QyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ2xCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNYLENBQUMsQ0FBQyxDQUFDO0FBRUgsaUJBQVMsTUFBTSxDQUFDIn0=