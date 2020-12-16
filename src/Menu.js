 const Menu = ({menu})=>{
     console.log(menu);
return (
    <div className="menus-content">
    {menu.map(item=>{
        const {id,category,desc,img,price,title}=item
        return (
<article className='article' key={id} >
<img className='image' src={img} alt={title}/>

<div className="first-div">
<header className="header">
<h4 className='header-title' >{title}</h4>
<h4 className='price' >${price}</h4>
</header>
<em></em>
<p>{desc}</p>
</div>
</article>

        )
    })}
    </div>
)
 }


 export default Menu