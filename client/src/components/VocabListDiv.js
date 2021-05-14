import React from 'react'

export default function VocabListDiv(props) {

  console.log(props.user);
  
  return (
    <div className="vocablist-card">
      <h3>{props.vocablist.name}</h3>
      <span>{props.vocablist.nativeLang}</span><span>{props.vocablist.targetLang}</span>
      <h6>{props.user.username}</h6>
    </div>
  )
}
