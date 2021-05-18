import React from 'react';
import { Link } from 'react-router-dom';


export default function VocabListDiv(props) {
  return (
    <Link to={`/vocablist/${props.vocablist._id}`}>
      <div className="w-90 mb-10 bg-gray-100 rounded-lg p-5">
        <h3 className="text-lg font-bold">{ props.vocablist.name }</h3>
        <span>{ props.vocablist.nativeLang }</span><span>{ props.vocablist.targetLang }</span>
        {props.user.username && <h6><strong>created by: </strong>{ props.user.username }</h6>}
      </div>
    </Link>
  )
}
