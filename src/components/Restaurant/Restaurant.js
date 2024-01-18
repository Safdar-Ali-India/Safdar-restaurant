import React,{useState} from 'react';
import "./style.css";
import Menu from './restoApi';
import MenuCard from './MenuCard';
import NavBar from './navBar';
const uniqueList = [...new Set(Menu.map((curElem)=>{
return curElem.category;
})),"All",

];
// console.log(uniqueList);






const Restaurant = () => {
const [menuData, setMenuData] = useState(Menu);
const [menuList, setMenuList] = useState(uniqueList);
const filterData = (category) =>{
if (category === "All"){
  setMenuData(Menu);
  return
}

const updatedList = Menu.filter((curElem)=>{
  return curElem.category === category;
})
setMenuData(updatedList);
};

  return (
   <>
<NavBar filterData ={filterData} menuList={menuList}/>

   <MenuCard menuData={menuData} />
   
   </>
  )
}

export default Restaurant