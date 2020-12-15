 const Menu = ({menu})=>{
     console.log(menu);
return (
    <div className="menus-content">
    {menu.map(item=>{
        const {id,category,desc,img,price,title}=item
        return (
<article key={id} >
<img className='image' src={img} alt={title}/>
<div className="first-div">
<header className="header">
<h4>{category}</h4>
<h4></h4>
</header>
</div>
</article>

        )
    })}
    </div>
)
 }


 export default Menu