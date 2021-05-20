import React from 'react';
import VocabList from './VocabList'

export default function Dashboard(props) {
  return (
    <>
      <VocabList user={ props.user } />
    </>
  )
}
