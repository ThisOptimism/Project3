const {
  Schema,
  model
} = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  password: String,
  email: {
    type: String,
    unique: true
  },
  profilePicture: String,
  vocabLists: [{
    type: Schema.Types.ObjectId,
    ref: 'VocabList'
  }],
  favoriteText: [{
    type: Schema.Types.ObjectId,
    ref: 'Text'
  }],
  alreadyRead: [{
    type: Schema.Types.ObjectId,
    ref: 'Text'
  }],
  nativeLang: {
    type: String,
    enum: ['EN', 'GER', 'FR', 'ES']
  },
  targetLang: {
    type: String,
    enum: ['EN', 'GER', 'FR', 'ES']
  }
});

const User = model("User", userSchema);

module.exports = User;