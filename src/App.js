 import {useEefect, useState} from 'react';
 import Menu from './Menu';
 import Button from './Button'; 
 import data from './data'
 
 const allButtons = ['all',...new Set(data.map((item)=>{
   return item.category
 }))]
 
function App() {
const [menu, setMenu] = useState(data)
const [button, setButton] = useState(allButtons) 

  return (
    <section className="main-section">
    <div className="title">
    <h1>our menu</h1>
    <div className="underline"></div>
    </div>
    
<div className="menu-content">

<Button button = {button} />
<Menu menu = {menu} />
</div>


    </section>
    
    
  );
}

export default App;
