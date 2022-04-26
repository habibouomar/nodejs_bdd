const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/heroe');

const morgan = require('morgan')
const cors = require('cors')
const port = 8000;

app.use(morgan("tiny"))
app.use(cors())
app.use(express.json())

app.listen(port, () => {
    console.log('Server started on port: ' + port);
});

app.get('/', (req, res) => {
    res.send('Heroes');
});

const heroeSchema = new mongoose.Schema({

    slug: String,
    name: String,
    power: [String],
    color: String,
    isAlive: Boolean,
    age: Number,
    image: String

})

const HeroeModel = mongoose.model('Heroe', heroeSchema);

app.get('/heroes', function (req, res, next) {
    HeroeModel.find().exec().then(resultat => { res.json(resultat) })
})

app.get('/heroes/:slug', function (req, res, next) {
    const slug = req.params.slug
    HeroeModel.find({ slug }).exec().then(resultat => { res.json(resultat) })
})

app.get('/heroes/:slug/powers', function (req, res, next) {
    const slug = req.params.slug
    HeroeModel.find({ slug }).exec().then(resultat => { res.json(resultat[0].power) })
})

app.post('/heroes', function (req, res, next) {
    const body = req.body;

    HeroeModel.find({ slug: body.slug }).exec().then(function (hero) {
        console.log('hero', hero);
        if (hero) {
            res.status(404).send('the hero already exist')
        } else {
            next();
        }
    })
}, (req, res, next) => {
    const body = req.body
    console.log(body);

    const newHeroe = new HeroeModel(body)

    newHeroe.save().then(resultat => {
        res.json(resultat)
    });
});

app.put('/heroes/:slug/powers', (req, res, next) => {
    const body = req.body
    console.log(body);

    HeroeModel.updateOne({ slug: req.params.slug }, { $push: { power: body.power } }, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.json(result);
        }
    });
});

app.delete('/heroes/:slug', function (req, res, next) {
    const slug = req.params.slug
    console.log(slug);

    HeroeModel.find({ slug }).exec().then(function (heros) {
        console.log('heros', heros);
        if (heros.length === 0) {
            res.status(404).send('the hero do not exist')
        } else {
            next();
        }
    })

}, (req, res, next) => {
    const slug = req.params.slug
    console.log(slug);

    HeroeModel.deleteOne({ slug: slug }).then(resultat => {
        res.json({
         slug: slug,
         statut: "effacé correctement"
        })
    });
});

// HeroeModel.insertMany([
//     {
//         slug: "iron-man",
//         name: "Iron Man",
//         power: ["money"],
//         color: "red",
//         isAlive: true,
//         age: 46,
//         image: "https://blog.fr.playstation.com/tachyon/sites/10/2019/07/unnamed-file-18.jpg?resize=1088,500&crop_strategy=smart"
//     },
//     {
//         slug: "thor",
//         name: "Thor",
//         power: ["electricty", "worthy"],
//         color: "blue",
//         isAlive: true,
//         age: 300,
//         image: "https://www.bdfugue.com/media/catalog/product/cache/1/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9782809465761_1_75.jpg"
//     },
//     {
//         slug: "dardevil",
//         name: "Daredevil",
//         power: ["blind"],
//         color: "red",
//         isAlive: false,
//         age: 30,
//         image: "https://aws.vdkimg.com/film/2/5/1/1/251170_backdrop_scale_1280xauto.jpg"
//     }
// ]).then(res =>{console.log(res);})