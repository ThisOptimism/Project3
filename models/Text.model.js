const {
  Schema,
  model
} = require("mongoose");



const TextSchema = new Schema({
  title: String,
  type: {
    type: String,
    enum: ['book', 'poem', 'article']
  },
  sourceLang: {
    type: String,
    enum: ['EN', 'GER', 'FR', 'ES']
  },
  body: String,
  author: String,
  relaseDate: Date,
  rating: Number,
  difficulty: Number,
  readingTime: Number
})




const Text = model("Text", TextSchema);

module.exports = Text;