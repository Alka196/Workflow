import React from "react";
import './Header.css'

const Header=()=>{

    return(
        <nav >
        {/* //  className="navbar navbar-expand-lg bg-body-tertiary"> */}
<div className="container-fluid">
  <div><a className="navbar-brand" >Procurement Workflow<p><span><small>Step2: Workflow Creation</small></span></p></a>
  </div>
  
      
       
    <div id="btns" className="d-flex">
    <button  type="submit">Cancel</button>&nbsp;&nbsp;
    <button type="submit">Save Draft</button>&nbsp;&nbsp;
      <button  type="submit">Finish</button>&nbsp;&nbsp;
    </div>
  </div>

</nav>
    )
}
export default Header;


