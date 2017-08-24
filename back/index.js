const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const Dealership = require('./models/dealerships');
// const Car = require('./models/cars');

const Artist = require('./models/artists');
const Album = require('./models/albums')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/data/db/');
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("Connected to db at /data/db/")
});

app.get('/', (req, res) => {
    console.log('request')
    Artist.find({})
        .populate('album_id')
        .then(artists => {
            console.log(artists)
            return res.send(artists);
        })     
        .catch(error => {
            return res.status(500).json(error);
        })
});


app.get('/:id', (req, res) => {
    Artist.findById(req.params.id)
        .populate('album_id')
        .then( artists => {
            return res.json({artists});
        })
        .catch( error => {
            return res.status(500).json({error});
        });
});


app.post('/music',(req,res) => {
	let object = req.body;
	let newObject = Artist(object);
	newObject.save()
		.then(savedObject => {
			res.json(savedObject);
		})
		.catch(err => {
			console.log(err);
			res.status(400).json({err})
		})
});


const seedArtists = require('./seeds/artist');
const seedAlbums = require('./seeds/album');
seedArtists();
seedAlbums();

app.listen(8080, () => {
    console.log('SERVER RUNNING ON 8080');
})
