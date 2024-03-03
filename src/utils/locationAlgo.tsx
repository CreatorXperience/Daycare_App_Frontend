
export type TDistanceProps = {
    lat1: number,
    lat2: number,
    lon1: number,
    lon2: number
}
const calculateDistance  = (distancePayload?:  TDistanceProps)=> {
    if(distancePayload){
        let  {lat1, lat2, lon1, lon2} = distancePayload
        
const R = 6371e3; // metres
const φ1 = lat1 * Math.PI/180; // φ, λ in radians
const φ2 = lat2 * Math.PI/180;
const Δφ = (lat2-lat1) * Math.PI/180;
const Δλ = (lon2-lon1) * Math.PI/180;

const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ/2) * Math.sin(Δλ/2);
const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

const d = R * c;  // meters

return  Math.round(d/1000)
}
}


export default  calculateDistance