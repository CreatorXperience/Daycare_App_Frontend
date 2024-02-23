import { useState } from "react"
import styled from "styled-components"
import { colors } from "../../constants/colors"

const DetailsDescription = ()=>{
    const [isExpand, setIsExpand] =  useState<boolean>(false)
    
    const handleExpand = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>)=>{
        e.preventDefault()
        setIsExpand(!isExpand)
    }
    return (
        <DetailsDescriptionWrapper isExpand={isExpand}>
        <div className="details-container">
        <span>
        Hello How afahscnaascnlcnascacacasc
        aacasjcascnacacsdfghjskd,;m;msdv;sdvsdmvsdv;sdmvsdv svsvmsmvs;dvmsvmksdlvsd vslv;sdmvsd;vmsd;lvsd
        vsv sdmvsd;vmsd;vms;dv
        svsm;vsvsv;ca;'csv
        vs vlnsjlvns;vonw[snvsjvs
        kvnsovsd;v;sn[svs spv
        ldnfifjefjvona'
        acancacj
            </span> 
        <span className="expand" onClick={(e)=> handleExpand(e)}>{isExpand ? "Read less": "Read more"}</span>
        </div>
        </DetailsDescriptionWrapper>
    )
}

export default DetailsDescription

const DetailsDescriptionWrapper = styled.div<{isExpand: boolean}>`
width: 100%;
display: flex;
justify-content: center;
margin-top: 20px;

    .details-container {
        width: 90%;
        height: ${(props)=> props.isExpand ? "auto": "40px" };
        overflow-y: hidden ;
        position: relative;
        font-size: 14px;
        font-weight: 600;
        overflow-x: hidden;

        .expand {
            position: absolute;
            margin-left: 10px;
            bottom: 0;
            margin-top: 10px;
            color: ${colors.primary.cyan};
            font-weight: bolder;
            z-index: 20;
            background-color: ${colors.primary.white};
           font-weight: bolder;
            width: 200px;
        }

        span:first-child {
            z-index: 0;
        }

     
    }
`