import React from 'react'
import Cartcom from '../components/Cart/Cartcom'
import "../components/Cart/Cartcom.css"

export default function Cart({data,setdata,handlechange,show,size,setsizes}) {
  return (
    <div className='cartbody'>
      {size == 0 ?<h1>No ITEM ADDED</h1> :<Cartcom data={data} setdata={setdata} handlechange={handlechange} show={show} /> }
      
    </div>
  )
}
