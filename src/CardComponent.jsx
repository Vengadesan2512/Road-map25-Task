
import { useState } from "react"



// This is for create tudo details and rendering method
export default function CardComponent(){
    const tudodata=[
{
"Name":"office task",
"Description" : "This  task ia about javascript ",
"Status" : "status",
},
 {
"Name":"office task",
"Description" : "This  task ia about Mongodb",
"Status" : "status",
},
 {
"Name":"office task",
"Description" : "This  task ia about BootStrap",
"Status" : "status",
},

]
// eslint-disable-next-line no-unused-vars
const [tudoData,setTudoData]=useState(tudodata);
//Delete doctor details functionality
const deletetudoDetails =(id)=>{
 const newtudoData =  tudoData.filter((tudoData,idx)=>idx !== id)
 setTudoData(newtudoData);
};

return(<div className="card-componentsmain">


{tudoData &&(
   <>
   {tudoData?.map((tudoData,idx)=>(
    <div key={idx} className=" m-b card w-96 bg-green-500 text-primary-content">
  <div className="card-body">
    <p className="p">Name : {tudoData.Name}</p>
    <p className="p">Description : {tudoData.Description}</p>
    <div className="Status-input">
        <p className="p">{tudoData.Status} :</p>
        <select className="select select-bordered select-xs ">
  <option disabled selected>Show</option>
  <option>Completed</option>
  <option>Not Completed</option>
  
</select>
    </div>
    <br/>
    <br/>
  <div className="btn-lb">
    <div><button className="btn btn-outline btn-error">Edit</button></div>
    {/* //delete steps */}
    <div><button className="btn btn-outline btn-warning" onClick={()=>deletetudoDetails(idx)}>Delete</button></div>
  </div>
 
  </div>
</div>
   ))}
   </> 
)}




</div>)


}