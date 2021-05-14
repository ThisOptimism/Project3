const {
  Schema,
  model
} = require("mongoose");



const TextSchema = new Schema({
  title: String,
  genre: {
    type: [String],
    enum: ['drama', 'fiction', 'mystery', 'horror', 'thriller', 'historical', 'romance', 'non-fiction', 'sci-fi', 'educational',
   'biographical', 'erotic', 'crime', 'action', 'childrens', 'comedy']
  },
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
  releaseDate: Date,
  rating: Number,
  difficulty: Number,
  readingTime: Number
})


const Text = model("Text", TextSchema);

module.exports = Text;