import { useEffect, useState } from "react"
import supabase from "../config/supabaseClient"

const Home =()=>{
    const [fetchError, setFetchError]=useState(null)
    const [smoothies, setSmoothies]=useState(null)

    useEffect(() =>{
        const fetchSmoothies = async ()=>{
            const {data, error} = await supabase
            .from('productList')
            .select()
            if (error){
                setFetchError('Could not fetch the smoothies')
                setSmoothies(null)
                console.log(error)
            }
            if(data){
                setSmoothies(data)
                console.log(error)
                }
        }
        fetchSmoothies()

    }, [])
   // console.log(supabase)
    return(
        <div className="page home">
        {fetchError && (<p>{fetchError}</p>)}
        {smoothies && ( <div className="smoothies">
            <p>{smoothies.map(smoothie=>(<p key='{smoothie.SKU}'>{smoothie.sku}<br/><span>{smoothie.Product_URL}</span></p>))}
            </p>        </div>)}
        </div>
    )
}

export default Home