const router = require("express").Router();
const VocabList = require('../models/VocabList.model')


//to create a vocabulary list

router.post('/addVocabList', (req, res, next) => {
  //get all the vocabList detail
  const {
    name,
    nativeLang,
    targetLang,
    words,
    createdBy
  } = req.body
  VocabList.create({
    name: name,
    nativeLang: nativeLang,
    targetLang: targetLang,
    words: words,
    createdBy: createdBy
  })
    .then(response => {
      res.status(200).json({
        successMessage: 'New list created.'
      })
    })
    .catch(err => {
      res.json(err)
    })
})

//to delete a vocabulary list

router.delete('/deleteVocabList/:id', (req, res, next) => {
  VocabList.findByIdAndDelete(req.params.id)
    .then(deletedVocabList => {
      res.status(200).json({
        message: 'List deleted'
      })
    })
    .catch(err => {
      res.json(err)
    })
})

//to update a vocabulary list

router.put('/updateVocabList/:id', (req, res, next) => {
  const { name, nativeLang, targetLang, words } = req.body;
  VocabList.findByIdAndUpdate(req.params.id, { name, nativeLang, targetLang, words }, { new: true })
    .then(vocabListToUpdate => {
      res.status(200).json(vocabListToUpdate)
    })
})

router.put('/addWord/:listId', (req, res, next) => {
  console.log(req.body);

  VocabList.findByIdAndUpdate(req.params.listId, { $push: { words: req.body.word } }, { new: true })
    .then(listWithNewWord => {
      res.status(200).json({ successMessage: 'Word successfully added.', newList: listWithNewWord })
    })
})

//to get a vocabulary list

router.get('/findVocabList/:id', (req, res, next) => {
  VocabList.findById(req.params.id)
    .then(vocabListId => {
      if (vocabListId == null) {
        return res.status(400).json({
          message: 'This vocabulary list does not exist'
        })
      } else {
        res.status(200).json(vocabListId)
        // is the textId the value returned from the database ?
      }
    })
    .catch(err => {
      next(err)
    })
})


// to get all vocab lists from a specific user

router.get('/myVocabLists/:userId', (req, res, next) => {
  console.log(req.params.userId);

  VocabList.find({
    createdBy: req.params.userId
  })
    .then(vocabLists => {
      if (vocabLists == null) {
        return res.status(400).json({
          message: "You haven't made any vocab lists yet"
        })
      } else {
        res.status(200).json(vocabLists)
      }
    })
    .catch(err => res.json(err))
})

//to get all the vocabulary list

router.get('/allVocabList', (req, res, next) => {
  VocabList.find()
    .populate('createdBy')
    .then(vocabList => {
      res.json(vocabList);
    })
    .catch(err => {
      next(err)
    })
})


module.exports = router;
