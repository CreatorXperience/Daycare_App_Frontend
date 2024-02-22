import ICONS from "../../../constants/icons"
import { TChildCare, TCoordinates } from "../../../pages/Home/type"

const useHandleData  =(coordinates: TCoordinates | undefined, data:TChildCare)=>{
    let coordinatesPayload ={
        lat1: coordinates?.lat as number,
        lat2: +data.location.coordinates[1] as number,
        lon1: coordinates?.long as number,
        lon2: +data.location.coordinates[0] as number
    }

    let  getStars = (rating: number)=>{
        let stars:JSX.Element[] = []
        if(rating > 5 ){
            for(let i =0; i < 5; i++){
                stars = [...stars,ICONS.starIcon(i)]
            }

            return  stars
        }
        for(let i =0; i < 5; i++){
            stars = [...stars,ICONS.starIcon(i)]
        }

        return  stars
    }

    

    return  {getStars,coordinatesPayload}
}

export default useHandleData