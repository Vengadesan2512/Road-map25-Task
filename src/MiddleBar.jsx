

function MiddleBar(){
    return(
<div >
{/* ////// */}

<div className="navbar bg-base-100">
  {/* // */}
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">My Todo</a>
  </div>
  {/* // */}
  {/* // */}
  <div className="flex-none gap-2">
      <div className="flex-1">
    <a className="btn btn-ghost text-xl">My Filter :</a>
  </div>
    <div className="form-control">
     <select className="select select-info w-30  bg-secondary">
  <option disabled selected>All</option>
  <option>Completed</option>
  <option>Not Completed</option>
</select>
    </div>
    
  </div>
</div>



  











{/* /// */}
</div>









    )
}

export default MiddleBar