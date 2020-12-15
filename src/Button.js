 const Button = ({button})=>{
 
return (
    <div className="btn-cotnainer">
    {button.map((btn,index)=>{
        return (
        <button className='btn' key={index} >{btn}</button>
        )
    })}
    
    </div>
)
 }


 export default Button