import React,{useState} from 'react';
import "./style.css";
import Menu from './restoApi';
import MenuCard from './MenuCard';
const Restaurant = () => {
const [menuData, setMenuData] = useState(Menu);
const filterData = (category) =>{
const updatedList = Menu.filter((curElem)=>{
  return curElem.category === category;
})
setMenuData(updatedList);
};

  return (
   <>
<nav className="navbar">
<div className="btn-group">
  <button className="btn-group__item" onClick={()=>{
    filterData("breakfast")
  }}>Breakfast</button>
  <button className="btn-group__item" onClick={()=>{
    filterData("lunch")}}>Lunch</button>
  <button className="btn-group__item" onClick={()=>{
    filterData("evening")
  }}>Evening</button>
  <button className="btn-group__item" onClick={()=>{
    filterData("dinner")
  }}>Dinner</button>
  <button className="btn-group__item" onClick={()=>{
 setMenuData(Menu)
  }}>All</button>
</div>


</nav>

   <MenuCard menuData={menuData} />
   
   </>
  )
}

export default Restaurant