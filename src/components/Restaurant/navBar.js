import React from 'react'

const NavBar = ({filterData, menuList}) => {
  return (
    <>
    <nav className="navbar">
<div className="btn-group">

    {
        menuList.map((curElem)=>{
         return(  <button className="btn-group__item" onClick={()=>{
                filterData(curElem)
              }}>{curElem}</button>) 
        })
    }
    {/* <button className="btn-group__item" onClick={()=>{
                filterData("breakfast")
              }}>Breakfast</button> */}

</div>


</nav>
    </>
  )
}

export default NavBar