import styled from "styled-components";
import { colors } from "../../constants/colors";

const HeaderWrapper = styled.div`
    width: 100%;
    height: 50px;
    padding: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    
    .header-container {
        width: 92%;
        height: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        position: relative;

        .open { 
            display: block;
        }

        .close {
              display: none;
        }
        
        .nav{
        position: fixed;
        z-index: 10;
        width: 50%;
        height: auto;
        top: 0;
        right: 0;
        background-color: ${colors.primary.white};
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.10);
        border-radius: 12px;
      
       li{
                font-size: 16px;
                font-weight: bold;
                padding: 12px;
                list-style-type: none;
                color: ${colors.primary.black}
            }

        a{
            text-decoration: none;
            display: flex;

            li{
                font-size: 16px;
                font-weight: bold;
                padding: 12px;
                list-style-type: none;
                color: ${colors.primary.black}
            }
        }
        }

        .icon-left, .icon-right {
            width: 40px;
            height: 40px;
            background-color: ${colors.primary.grayishWhite};
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10%;
        }

    .page-title {
        font-size: 20px;
        font-weight: 600;
    }
    }
`

export default HeaderWrapper