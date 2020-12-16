 const Button = ({button,buttonUsage})=>{
 
return (
    <div className="btn-cotnainer">
    {button.map((btn,index)=>{
        return (
        <button className='btn' key={index} onClick={()=>{
buttonUsage(btn)
        }} >{btn}</button>
        )
    })}
    
    </div>
)
 }


 export default Button