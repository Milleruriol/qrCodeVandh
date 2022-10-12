import {useState } from "react"
import supabase from "../config/supabaseClient"

const Create = () => {
  const [SKU,setSKU] =useState('')
  const [formError,setFormError] =useState(null)  

  const handleSubmit = async(e) =>{
    e.preventDefault()
    if(!SKU){
      setFormError('Please fill in all the fields correctly')
      return
    }
    const{data,error}=await supabase
    .from('skuToQR')
    .insert([{SKU}])

    if(error){
      console.log(error)
      setFormError('Please fill in all the fields correctly')
    }
    if(data){
      console.log(data)
      setFormError(null)
    }





    }

  return (
      <div className="page create">
          <form onSubmit={handleSubmit}>
          <label htmlFor="title"> SKU:</label>
          <input
            type="text"
            id='SKU'
            value={SKU}
            onChange={(e) =>setSKU(e.target.value)}
          />
<button>Add to the list</button>
{formError && <p className="error">{formError}</p>}
        </form>
      </div>
    )
  }
  
  export default Create