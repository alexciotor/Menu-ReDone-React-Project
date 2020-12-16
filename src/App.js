 import {useEefect, useState} from 'react';
 import Menu from './Menu';
 import Button from './Button'; 
 import data from './data'
 
 const allButtons = ['all' , ...new Set(data.map((item)=>{
   return item.category
 }))]

function App() {

const [menu, setMenu] = useState(data)
const [button, setButton] = useState(allButtons) 
const buttonUsage = (category)=>{
  if(category ==='all'){
  setMenu(data)
  return
  }
const otherButtons =data.filter(item=>{
  if(category===item.category){
    return item.category
  }
})
setMenu(otherButtons)

}
  return (
    <section className="main-section">
    <div className="title">
    <h1>our menu</h1>
    <div className="underline"></div>
    </div>
    
<div className="menu-content">

<Button button = {button} buttonUsage={buttonUsage} />
<Menu menu = {menu} />
</div>


    </section>
    
    
  );
}

export default App;
