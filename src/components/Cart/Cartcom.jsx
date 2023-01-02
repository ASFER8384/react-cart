import React, { useEffect, useState } from 'react'
import "./Cartcom.css"
import CloseIcon from '@mui/icons-material/Close';

export default function Cartcom({data,setdata,handlechange,show,setsizes}) {
  
  const [price,setprice]=useState(0)

  const handleremove=(id)=>{
    const arr=  data.filter((item)=>item.id!=id)
      setdata(arr)
    }
const handleprice=()=>{
  let ans = 0
  data.forEach((item)=>(
     ans += item.amount * item.price
    
  ))
  setprice(ans)
}
useEffect(()=>handleprice())

  return (
    <div className='cartcom'>
      <table>
         {show ? <Head/> : ""} 
      {data.map((data)=>(
          <tbody key={data.id}>
            <tr>
              <td>
                <img className='cartimg' src={data.img} alt={data.tittle} />
              </td>
              <td>
                <h5>{data.title}</h5>
              </td>
              <td>
                <h5>{data.price}</h5>
              </td>
              <td className=''>
                <button onClick={()=>handlechange(data, +1)} className='add'>+</button>
                <button className='add'>{data.amount}</button>
                <button  onClick={()=>handlechange(data, -1)} className='add'>-</button>
              </td>
              <td>{data.amount * data.price}</td>
              <td>
                <CloseIcon onClick={()=>handleremove(data.id)} className='remove' sx={{color:"#fff"}}/>
                </td>
            </tr>
          </tbody>
      ))}
       </table>
       {show ?<Final price={price}/> : "" }
       
    </div>
  )
}



function Head(){
  return(
    <thead >
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
  )
}

function Final({price}){
  return(
    <div className='final'>
        <div><h2>Card Total</h2>
        <h5 className='white'>Discount: $0.00</h5>
        <h5  className='white'>Total: ${price}</h5>
        </div>
        <button className='check'>CHECK OUT NOW!</button>
       </div>
  )
}