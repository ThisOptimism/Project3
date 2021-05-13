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
    enum: ['EN', 'GER', 'FR', 'ES'],
    default: 'EN'
  },
  targetLang: {
    type: String,
    enum: ['EN', 'GER', 'FR', 'ES'],
    default: 'EN'
  }
});

const User = model("User", userSchema);

module.exports = User;