import { FaDollarSign } from "react-icons/fa"
import styled from "styled-components"
import { colors } from "../../constants/colors"

const ResultCard = ()=>{
    return (
        <ResultCardWrapper>
            <div className="result-card-cont">
                <div className="result-image">

                </div>
                <div className="result-details">
                    <div className="details">
                        <p className="title">Kudo Childcare</p>
                        <p>location</p>
                    </div>

                    <div className="amount"><FaDollarSign  color={colors.primary.yellow}/><span className="digit">5</span> <span className="duration">/1hr</span></div>
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