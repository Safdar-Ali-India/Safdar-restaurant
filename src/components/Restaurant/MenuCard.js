import React from 'react'

const MenuCard = ({menuData}) => {
    // console.log(menuData);
  return (
   <>
<section className="main-card--cointainer">
       {menuData.map((curElem)=>{
const {id, name, category, image, description} = curElem;

    return(
    <>  
 

    <div className="card-container" key={id} style={{display:"flex", flexDirection:"row-reverse",textAlign:"center", justifyContent: "center"}}>
    <div className="card">
    
      <div className="card-body">
    <span className="card-body card-number card-circle subtle">{id}</span>
    <span className="card-author subtle">{category}</span>
    <h2 className="card-title">{name}</h2>
    <span className="card-description subtle">{description}</span>
      </div>
      <img src={image} style={{width:'400px',height:'400px',}} alt="breakfast toast" className="card-media" />
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