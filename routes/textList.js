const router = require("express").Router();
const Text = require('../models/Text.model');
const User = require("../models/User.model");

//to create a text

router.post('/addText', (req, res, next) => {
    //get all the text's details
    const {
        title,
        genre,
        type,
        sourceLang,
        body,
        author,
        relaseDate,
        rating,
        imgUrl
    } = req.body
    //if statement to check the user input (if a field is empty ?) ?
    //work out reading difficulty:

    const difficulty = calcReadability(body);
    const readingTime = calcReadingTime(body);


    Text.create({
            title: title,
            genre: genre,
            type: type,
            sourceLang: sourceLang,
            body: body,
            author: author,
            relaseDate: relaseDate,
            rating: rating,
            difficulty: difficulty,
            readingTime: readingTime,
            imgUrl: imgUrl,
        })
        .then(response => {
            console.log(response)
            res.status(202).json(response)
        })
        .catch(err => {
            console.log(err);
            
            res.json(err)
        })
})

//to delete a text

router.delete('/deleteText/:id', (req, res, next) => {
    Text.findByIdAndDelete(req.params.id)
        .then(deletedText => {
            res.status(200).json({
                    message: 'Text deleted'
                })
                .catch(err => {
                    next(err)
                })
        })
})

//to update the text

router.put('/updateText/:id', (req, res, next) => {
    const {
        title,
        genre,
        type,
        sourceLang,
        body,
        author,
        releaseDate,
        rating,
        difficulty,
        readingTime
    } = req.body;
    Text.findByIdAndUpdate(req.params.id, {
            title,
            genre,
            type,
            sourceLang,
            body,
            author,
            releaseDate,
            rating,
            difficulty,
            readingTime
        }, {
            new: true
        })
        .then(textToUpdate => {
            res.status(200).json(textToUpdate)
        })
})

//to get a text

router.get('/findText/:id', (req, res, next) => {
    Text.findById(req.params.id)
        .then(text => {
            if (text == null) {
                return res.status(400).json({
                    message: 'This text has not been published yet'
                })
            } else {
                console.log(text);
                res.status(200).json(text)
            }
        })
        .catch(err => {
            next(err)
        })
})

//to get all the text

router.get('/allText', (req, res, next) => {
    Text.find()
        .then(textList => {
            res.json(textList);
        })
        .catch(err => {
            res.status(500).json(err)
        })
})
router.get('/randomtext', (req, res, next) => {
    Text.find()
        .then(textList => {
            const randomNumber = Math.floor(Math.random() * textList.length)
            res.json(textList[randomNumber]);
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.post('/toggleFavorite/:textId', (req, res, next) => {
    console.log(req.body);
    
    if(req.body.addOrRemove === 'add') {
        User.findByIdAndUpdate(req.user._id, {$push: {
            favoriteText: req.params.textId
        }}, {new : true})        
      .then(response => {
        return res.status(200).json({
          successMessage: 'Text added to favourites',
        })
        })
    } else {
        User.findByIdAndUpdate(req.user._id, {$pull: {
            favoriteText: req.params.textId
        }}, {new : true})
        .then(response => {
            console.log(req.user);
            console.log({response});
            
        return res.status(200).json({
            successMessage: 'Text removed from favourites',
            })
        })        
    }
})

function calcReadability(text) {
  const words = text.split(' ').length;
  const letters = text.replace(/[^a-zA-Z]/g,'').length
  const sentences = text.split(/[.!?]/).length -1
  
  const result = Math.round(0.0588 * ((letters/words)*100) - 0.296 * ((sentences / words) * 100) - 15.8);
  switch(true) {
         case (result < 5):
           return 'Beginner';
          break;
         case (result < 7):
           return 'Intermediate';
                break;
         case (result < 9):
           return 'Upper Intermediate';
                break;
         default:
           return 'Advanced';
         
         }
} // algorithm is taken from the Coleman-Liau index, then generalised to give beginner - advanced levels

function calcReadingTime(text) {
    const wordCount = text.split(' ').length
    const result = Math.round(wordCount/140)
    return result < 1 ? 1 : result //not super scientific, but gives an idea of a reading time for a slow reader (language learner)
}

module.exports = router;