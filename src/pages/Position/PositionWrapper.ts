import styled from "styled-components";
import { colors } from "../../constants/colors";

const PositionWrapper = styled.div`
width: 100%;
height: 100%;

.icons-2 {
        width: 100%;
        height: 90%;
        display: flex;
        justify-content: center;
        margin-top: 20px;
        flex-direction: column;
        align-items: center;

        .Brand {
            font-size: 20px;
            color: ${colors.primary.cyan};
            font-weight: bolder;
            margin-top: 10px;

        }
    }

    .text {
        text-align:center;
        font-size: 25px;
        font-weight: bolder;
        width: 250px;
        margin: 20px auto;

         .k {
            color: ${colors.primary.cyan}
         }
    }

    .desc {
        text-align: center;
        width: 250px;
        height: 2%;
        font-weight: 200;
        margin: 10px auto;
    }

    .action {
        width: 100%;
        height: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;

        .login,.signup {
            margin: 10px;
            padding: 12px;
            width: 120px;
            border-radius: 8px;
            border: none;
            color: ${colors.primary.white};
            font-size: 18px;
            font-weight: 600;
            outline: none;
        }

        .login {
            background: linear-gradient(180deg, #72B5F1 0%, rgba(23, 118, 202, 0.83) 131.58%);
        }

        .signup {
            background: linear-gradient(180deg, #B5FFBC 0%, rgba(9, 211, 28, 0.74) 100%);
        }
    }

`
export default PositionWrapper