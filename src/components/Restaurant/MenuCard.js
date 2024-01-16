import React from 'react'

const MenuCard = ({menuData}) => {
    // console.log(menuData);
  return (
   <>
<section className="main-card--cointainer">
       {menuData.map((curElem)=>{
    return(
    <>  
 

    <div className="card-container" key={curElem.id} style={{display:"flex", flexDirection:"row-reverse",textAlign:"center", justifyContent: "center"}}>
    <div className="card">
    
      <div className="card-body">
    <span className="card-body card-number card-circle subtle">{curElem.id}</span>
    <span className="card-author subtle">{curElem.category}</span>
    <h2 className="card-title">{curElem.name}</h2>
    <span className="card-description subtle">{curElem.description}</span>
      </div>
      <img src={curElem.image} style={{width:'400px',height:'400px',}} alt="breakfast toast" className="card-media" />
    <span className="card-tag subtle">Just Order</span>
    </div>
    
    
    
       </div>

   
    
    </>)
 
   })}
    </section>

   </>
  )
}

export default MenuCard