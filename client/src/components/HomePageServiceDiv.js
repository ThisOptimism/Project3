import React from 'react'

export default function HomePageServiceDiv(props) {
  return (
    <div className="bg-white m-4 p-6 w-96 text-center flex flex-col justify-around items-center h-96 rounded-lg shadow-2xl">
      <img src={props.img} className="w-1/2"/>
      <h3 className="text-2xl	" >{props.heading}</h3>
      <p className="text-lg">{props.text}</p>
    </div>
  )
}
