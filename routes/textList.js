const router = require("express").Router();
const Text = require('../models/Text.model')

//to create a text

router.post('/addText', (req,res,next) => {
    //get all the text's details
    const {
    title,
    type,
    sourceLang,
    body,
    author,
    relaseDate,
    rating,
    difficulty,
    readingTime
} = req.body
//if statement to check the user input (if a field is empty ?) ?
    Text.create({
        title : title,
        type : type,
        sourceLang : sourceLang,
        body : body,
        author : author,
        relaseDate : relaseDate,
        rating : rating,
        difficulty : difficulty,
        readingTime : readingTime
    })
.catch(err => {
    next(err)
})
})

//to delete a text

router.delete('/deleteText/:id', (req,res,next) => {
    Text.findByIdAndDelete(req.params.id)
    .then(deletedText => {
        res.status(200).json({
            message : 'Text deleted'
        })
        .catch(err => {
            next(err)
        })
    })
})

//to update the text

router.put('/updateText/:id', (req,res, next) => {
    const { title } = req.body;
Text.findByIdAndUpdate(req.params.id, { title }, { new : true})
.then(textToUpdate => {
    res.status(200).json(textToUpdate)
})
})

//to get a text

router.get('/findText/:id', (req,res,next) => {
    Text.findById(req.params.id)
    .then(textId => {
        if(textId == null){
            return res.status(400).json({
                message : 'This text has not been published yet'
            })
        } else {
            res.status(200).json(textId)
            // is the textId the value returned from the database ?
        }
    })
    .catch(err => {
        next(err)
    })
})

//to get all the text

router.get('/allText', (req,res,next) => {
    Text.find()
    .then(textList => {
        res.json(textList);
    })
    .catch(err => {
        next(err)
    })
})


module.exports = router;