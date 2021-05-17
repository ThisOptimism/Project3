import React from 'react';
import VocabList from './VocabList'

export default function Dashboard(props) {
  console.log(props.user);
  return (
    <main>
      <VocabList user={ props.user } />
    </main>
  )
}
