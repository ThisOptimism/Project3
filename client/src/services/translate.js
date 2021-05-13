import axios from 'axios';
import translate from 'deepl';

const translator = (word, targetLang) => {
  translate({
      free_api: true,
      text: word,
      target_lang: targetLang,
      auth_key: 'c4d15740-4878-d0bf-6dd6-67e60ffe8c8c:fx',
    })
    .then(res => console.log(res.data.translations.text))
}

export default translator;