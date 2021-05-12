const { Schema, model } = require("mongoose");

const VocabListSchema = new Schema({
  name: String,
  nativeLang: {
    type: String,
    enum: ['EN', 'GER', 'FR', 'ES']
  },
  targetLang: {
    type: String,
    enum: ['EN', 'GER', 'FR', 'ES']
  },
  words: [
    [String]
  ],
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
})


const VocabList = model("VocabList", VocabListSchema);

module.exports = VocabList;