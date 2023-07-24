const router = require('express').Router();
let Movie = require('../models/movie');


//create
//http://localhost:8000/movies/add

router.route('/add').post((req,res) => {
    const title = req.body.title;
    const year = Number(req.body.year);
    const rated = req.body.rated;
    const runtime = req.body.runtime;
    const genre = req.body.genre;
    const director = req.body.director;
    const production_company = req.body.production_company;
    const cast = req.body.cast;
    const plot = req.body.plot;
    const posterlink = req.body.posterlink;
    const newMovie = new Movie({
        title,
        year,
        rated,
        runtime,
        genre,
        director,
        production_company,
        cast,
        plot,
        posterlink
    })
    newMovie.save().then(()=>{
        res.json("Movie Added")
     }).catch((err)=>{
          console.log(err);
     })
    })

//http://localhost:8000/movies

router.route('/').get((req,res) => {
    Movie.find().then(movies =>
        { res.json(movies)})
    .catch(err => res.status(400).json('Error: ' + err));
})

//update
// http://localhost:8000/movies/update/8dfghdfgh89dfghdfgh

router.route("/update/:id").put(async(req, res) => {
    let movieId = req.params.id;
    const { title, year, rated, runtime, genre, director,production_company, cast, plot, posterlink} = req.body;
    const updateMovie = {
        title, 
        year,
        rated,
        runtime,
        genre,
        director,
        production_company,
        cast,
        plot,
        posterlink
}

const update = await Movie.findByIdAndUpdate(movieId, updateMovie)
.then(() => {
res.status(200).send({status: "Movie updated" });
}).catch ((err) => {
console.log(err);
res.status(500).send({status: "Error with updating data", error: err.message});
})
 
})

//delete 
// http://localhost:8000/movies/delete/8dfghdfgh89dfghdfghdfgh89dfghdfgh

router.route("/delete/:id").delete(async(req, res) => {
    let movieId = req.params.id;
    await Movie.findByIdAndDelete(movieId)
    .then(() => {
        res.status(200).send({status: "Movie deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete movie", error: err.message});
    })

}) 

//fetch
// http://localhost:8000/movies/get/8dfghdfgh89dfghdfghdfgh89dfghdfgh 

router.route("/get/:id").get(async(req, res) => {
    let movieId = req.params.id;
    const movie = await Movie.findById(movieId).then((movie) => {
        res.status(200).send({status: "Movie fetched"});
    }).catch((err) => { 
        console.log(err.message);
        res.status(500).send({status: "Error with get movie", error: err.message});
    }) 
})
  

module.exports = router; 