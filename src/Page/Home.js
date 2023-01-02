import React from 'react'
import List from '../components/List/List'
import "../components/List/List.css"

export default function Home({setdata,handleclick}) {
  return (
    <div className='home'>
        <List setdata={setdata} handleclick={handleclick}      />
    </div>
  )
}
