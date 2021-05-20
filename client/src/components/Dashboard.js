import React from 'react';
import VocabList from './VocabList'

export default function Dashboard(props) {
  return (
    <div className="grid grid-cols-2">
      <VocabList user={ props.user } />
    </div>
  )
}
