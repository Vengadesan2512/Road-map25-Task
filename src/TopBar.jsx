import { useState } from "react"



function TopBar(){
    //for add new todoname and tudo description
  
const[Name,setName]=useState("")
const[description,setDescription]=useState("")
//for enter details into the input bx and it will be add new todo data
const addnewtoDoDetails=()=>{
    const newtoDoDetails={
        Name:Name,
        Description: description
    };

}



return(
<div>
       <h1 className='Title'>My To Do</h1>
   <br></br><br></br>

   <div className="input"> 
<input type="text" placeholder="TODO NAME" className="input input-bordered w-full max-w-xs" value={Name} onChange={(e)=>setName(e.target.value)} />
<input type="text" placeholder="TUDO DESCRIPTION" className="input input-bordered w-full max-w-xs" value={description} onChange={(e)=>setDescription(e.target.value)} />
<button className="btn btn-primary" onClick={addnewtoDoDetails}>ADD TODO</button>
   </div>

   <br></br><br></br>
</div>


    )
}

export default TopBar


