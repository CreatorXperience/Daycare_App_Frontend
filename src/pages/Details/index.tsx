import { useParams } from "react-router-dom"

const Details = ()=>{
    const {id} =  useParams()
    console.log(id)
    return (
        <div>
            Details Page
        </div>
    )
}

export default Details