import { FaDollarSign } from "react-icons/fa"
import styled from "styled-components"
import { colors } from "../../constants/colors"
import { TChildCare } from "../../pages/Home/type"
import { useNavigate } from "react-router-dom"
import calculateDistance, { TDistanceProps } from "../../utils/locationAlgo"
import useGetCurrentPosition from "../../App/hooks/useGetPosition"
import { useEffect, useState } from "react"
import { GoLocation } from "react-icons/go"




const ResultCard = ({amount,perDuration,title, _id, location}:Partial<TChildCare>)=>{
    const navigate = useNavigate()
    const {PositionMemo,getPositionCallback} = useGetCurrentPosition()
    let [position, setPosition] = useState<TDistanceProps>()

    useEffect(()=>{
        getPositionCallback()
    },[getPositionCallback])

    useEffect(()=>{
        if(PositionMemo && location){
            setPosition({
                lat1: PositionMemo.position?.coords.latitude as number,
                lat2: +location?.coordinates[1]  as number,
                lon1: PositionMemo.position?.coords.longitude as number,
                lon2: +location?.coordinates[0] as number
            })
        }
    },[PositionMemo])

    return (
        <ResultCardWrapper onClick={()=> navigate(`/details/${_id}`)}>
            <div className="result-card-cont">
                <div className="result-image">

                </div>
                <div className="result-details">
                    <div className="details">
                        <p className="title">{title}</p>
                        <p><GoLocation color={colors.primary.cyan} />{calculateDistance(position)}km</p>
                    </div>

                    <div className="amount"><FaDollarSign  color={colors.primary.yellow}/><span className="digit">{amount}</span> <span className="duration">/{perDuration}hr</span></div>
                </div>
            </div>
        </ResultCardWrapper>
    )
}


export default ResultCard

const ResultCardWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    margin-top: 60px;


    .result-card-cont {
        width: 90%;
        height: 150px;
    }

    .result-image {
        background-image: url("https://i.pinimg.com/736x/37/38/1c/37381c0e7e5831bfb27159a5f42f310a.jpg");
        background-size: cover;
        width: 100%;
        height: 90%;
        border-radius: 12px;
    }

    .result-details {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 5px;

        .details {
            .title {
                font-size: 20px;
                font-weight: bolder;
            }
        }

        .amount {
            display: flex;
            justify-content: center;
            align-items: center;

            .digit {
                font-size: 25px;
                font-weight: bolder;
            }
        }
    }

`