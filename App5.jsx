import React, {useState} from 'react'

const App5=()=>{
  let [username,setUsername]=useState("sam");
  let [count,setcount]=useState(0)
  let handleChange =()=>{
   setUsername("priya")
  }
  let handlecountchange=()=>{
  setcount(1)
  }
  return(
    <>
    <h1>{username}</h1>
    <h2>{count}</h2>
    <button onClick={handleChange}>change the name</button>
    <button onClick={handlecountchange}>change number</button>
    </>
  )

}

export default App5;
