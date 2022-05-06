const express = require("express");
const router = express.Router();
const UsersModel = require('../models/user.model');
const expressValidator = require("express-validator");
const passport = require('../config/passport');
const bcrypt = require("bcrypt");

const multer = require("multer");
const upload = multer({ dest:'public/uploads/' }); // cette ligne va créer le dossier /public/uploads s'il n'existe pas

router.get('/', function (req, res) {
    res.send("welcome");
});

router.post('/users',

    expressValidator.body("email").isEmail(),
    expressValidator.body("password").isLength({ min: 8 }),

    async (req, res, next) => {
        const errors = expressValidator.validationResult(req);
        console.log(req.body);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        else {

            const body = req.body
            console.log(body);

            const hash = await bcrypt.hash(body.password, 5);
            
            const newUser = new UsersModel({
                ...body,
                password: hash
            })

            newUser.save().then(user => {
                res.json(user)
            });
        }
    }
)

router.get('/admin', function (req, res, next) {
    UsersModel.find().exec().then(resultat => { res.json(resultat) })
})

router.post('/login', passport.authenticate('local'), function(req, res, next){

    if (!req.user) {
        res.status(401).send('The username or password is not correct')
    }
    res.send('bievenue ' + req.user.surname)
   
})

router.post('/upload', upload.single('file'), function(req, res, next){
    console.log(req.file);
    res.send("ok");
})

module.exports = router