import React from 'react'
import "./List.css"
import Data from '../../Data'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
export default function List({setdata,handleclick}) {

  return (
    <div className='list'>
      {Data.map((data) => (
        <div className="list-body" key={data.id}>
          <div className="imagebody">
            <img className='image' src={data.img} alt={data.name} />
          </div>
          <div className="header">
            <h3>{data.title}</h3>
          </div>
          <div>
          <div className="summary">
            <p>{data.summary}</p>
          </div>
          <div className="footer">
            <h2>Price:${data.price}</h2>
          </div>
          </div>
          <div className='icon'>
            <IconButton aria-label="cart">
              <AddIcon sx={{color:"#fff"}}/>
            </IconButton>
            </div>
            <div className='cartbutton'>
              <button onClick={()=>handleclick(data)} className='btn'>ADD TO CART</button>
            </div>
        </div>
            ))}
    </div>
  )
}
