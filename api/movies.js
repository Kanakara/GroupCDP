"use strict";
var express = require('express');
var router = express.Router();
var movies = [
    { id: 1, title: "Star Wars", director: "Lucas" },
    { id: 2, title: "The Martian", director: "Scott" },
    { id: 3, title: "Ex Machina", director: "Garland" },
    { id: 4, title: "Superman", director: "Donner" },
    { id: 5, title: "Shrek", director: "Adamson" }
];
var movieId = movies.length;
router.get('/movies', function (req, res, next) {
    res.json(movies);
});
router.get('/movies/:id', function (req, res, next) {
    var id = parseInt(req.params['id']);
    var movie = findMovie(id);
    if (movie) {
        res.json(movie);
    }
    else {
        res.sendStatus(404);
    }
});
router.post('/movies', function (req, res, next) {
    var movie = req.body;
    if (movie.id) {
        var original = findMovie(movie.id);
        original.title = movie.title;
        original.director = movie.director;
    }
    else {
        movie.id = ++movieId;
        movies.push(movie);
    }
    res.sendStatus(200);
});
router.delete('/movies/:id', function (req, res, next) {
    var id = parseInt(req.params['id']);
    if (!findMovie(id)) {
        res.sendStatus(404);
    }
    else {
        movies = movies.filter(function (movie) {
            return movie.id != id;
        });
        res.sendStatus(200);
    }
});
router.get('/movies/search/:search', function (req, res, next) {
    var search = req.params['search'];
    var matches = movies.filter(function (movie) {
        return movie.title.indexOf(search) == 0;
    });
    res.json(matches);
});
function findMovie(id) {
    var matches = movies.filter(function (movie) {
        return movie.id == id;
    });
    return matches.length ? matches[0] : null;
}
module.exports = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92aWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW92aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFPLE9BQU8sV0FBVyxTQUFTLENBQUMsQ0FBQztBQUNwQyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFHOUIsSUFBSSxNQUFNLEdBQUc7SUFDVixFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUMsT0FBTyxFQUFFO0lBQzVDLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxPQUFPLEVBQUU7SUFDOUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFFLEtBQUssRUFBQyxZQUFZLEVBQUUsUUFBUSxFQUFDLFNBQVMsRUFBRTtJQUMvQyxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUMsUUFBUSxFQUFFO0lBQzVDLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUMsT0FBTyxFQUFFLFFBQVEsRUFBQyxTQUFTLEVBQUU7Q0FFNUMsQ0FBQztBQUVGLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFHNUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsVUFBUyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7SUFDM0MsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNuQixDQUFDLENBQUMsQ0FBQztBQUdILE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFVBQVMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO0lBQy9DLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDcEMsSUFBSSxLQUFLLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDVixHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNOLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztBQUNILENBQUMsQ0FBQyxDQUFDO0FBR0gsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsVUFBUyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7SUFDNUMsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztJQUVyQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNiLElBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkMsUUFBUSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzdCLFFBQVEsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztJQUVyQyxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDTixLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUNELEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdEIsQ0FBQyxDQUFDLENBQUM7QUFHSCxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxVQUFTLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSTtJQUNsRCxJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQixHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNOLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUMsS0FBSztZQUMzQixNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7QUFDSCxDQUFDLENBQUMsQ0FBQztBQUdILE1BQU0sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsVUFBUyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7SUFDeEQsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQyxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUMsS0FBSztRQUNoQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUMsQ0FBQyxDQUFDO0lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN0QixDQUFDLENBQUMsQ0FBQztBQUVILG1CQUFtQixFQUFTO0lBQzFCLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQyxLQUFLO1FBQ2hDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDLENBQUMsQ0FBQztJQUNILE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDNUMsQ0FBQztBQUVELGlCQUFTLE1BQU0sQ0FBQyJ9