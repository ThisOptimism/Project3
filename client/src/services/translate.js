import axios from 'axios';
import translate from 'deepl';

const translateWords = async (word, targetLang) => {
  return translate({
      free_api: true,
      text: word,
      target_lang: targetLang,
      auth_key: 'c4d15740-4878-d0bf-6dd6-67e60ffe8c8c:fx'
    })
    .then(res => res.data.translations[0].text)
    .catch(err => console.log(err)
    )
}

export default translateWords;