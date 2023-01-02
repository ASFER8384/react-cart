import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Cart from "./Page/Cart";
import Home from "./Page/Home";






    function App() {
  const [data,setdata]=useState([])
  const [show,setshow]=useState()
  // const [sizes,setsizes]=useState(false)

  const handleclick=(product)=>{
    let ispresent=false

    data.forEach((item)=>{

      if(product.id ===item.id)
      ispresent = true
    }
    )
    if(ispresent)
    return;
    setdata([...data,product])
    setshow(true)
  }

const handlechange=(product,d)=>{
  let ind = -1

data.forEach((item,index)=>{
  if(item.id === product.id)
  ind = index
})
const tempArr = data;
tempArr[ind].amount +=d

if(tempArr[ind].amount == 0){
  tempArr[ind].amount = 1
}
setdata([...tempArr])
}


  return (
    <div className="App">
     <BrowserRouter>
     <Header size={data.length}/>
     <Routes>
      <Route path="/" element={<Home setdata={setdata} handleclick={handleclick}/> }/>
      <Route path="/cart" element={<Cart data={data} setdata={setdata} handlechange={handlechange} show={show} size={data.length} />} /> 
     </Routes>
     </BrowserRouter>
    </div>
  )
  }

export default App;
