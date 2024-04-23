import styled from "styled-components";
import { colors } from "../../constants/colors";

const FilterWrapper = styled.div`
width: 100%;
height: 100vh;
overflow-y: auto;



     .filter-container{
          width: 100%;
          height: 110%;
          display: flex;
          position: relative;
          top: 0;
          transform: translateY(-1.8%);
          

          

          .overlay{
            width: 100%;
            height: 100%;
            background-color: ${colors.primary.black};
            opacity: 0.2;
            position: absolute;
            z-index: 1;
          
          }

            .slide-down {
                animation: slidedown ease-in-out .3s 1;
                transform: translateY(0%);
            }



            .main-container{
              width: 100%;
              height:  90%;
              position: absolute;
              background-color: ${colors.primary.white};
              z-index: 9;
              border-top-left-radius: 30px;
              border-top-right-radius: 30px;
              animation: slideup ease-in-out .3s 1;
              transform: translateY(0%);
              overflow-y: auto;
              bottom: 0;


                .form-container{
                  width: 100%;
                  height: auto;
                  margin-top: 25px;
                  position: relative;
                  display: flex;
                  flex-flow: column;
                  justify-content: center;
                  align-items: center;

                  .label-cont{
                    width: 100%;
                    
                    label {
                    font-size: 16px;
                    font-weight: bolder;
                    margin-top: 20px;
                  }
                  }
                  
                  .continue {
                    bottom: 0;
                    width: 90%;
                    padding: 14px;
                    background: linear-gradient(180deg, #72B5F1 0%, rgba(23, 118, 202, 0.83) 131.58%);
                    border-radius: 12px;
                    margin-top: 50px;
                    border: none;
                    font-size: 20px;
                    font-weight: bolder;
                    color: ${colors.primary.white};
                    text-align: center;
                  }

                  


                  .input-container{
                    width: 90%;
                    display: flex;
                    justify-content: space-between;


                    #price{
                      width: 45%;
                      padding: 12px;
                      border-radius: 12px;
                      border: 2px solid ${colors.primary.lightGray};
                      margin-top: 12px;
                      outline-color: ${colors.primary.cyan};
                    }
                  }
                  
                }

                .sort-title {
          font-size: 16px;
          font-weight: bolder;
          padding: 12px;
        }

            .button-container{
              padding: 12px;

           .filter, .normal , .relevant, .color{
            padding: 8px;
            width: 120px;
            border-radius: 10px;
            border: none;
            font-size: 16px;
            font-weight: 800;
            flex-shrink: 0;
        }

        /* .relevant {
          background: linear-gradient(180deg, #72B5F1 0%, rgba(23, 118, 202, 0.83) 131.58%);
            color: ${colors.primary.white}
        } */


        button {
            margin: 3px;
        }

        .normal {
            color: ${colors.primary.cyan};
            background-color: ${colors.primary.grayishWhite};
        }

        .color {
          background: linear-gradient(180deg, #72B5F1 0%, rgba(23, 118, 202, 0.83) 131.58%);
        }

          .normal_sec {
            color: ${colors.primary.cyan};
            background-color: ${colors.primary.grayishWhite};
        }
                }

                .close {
                  margin-top: 10px;
                  position: fixed;
                  right: 0;
                  padding: 12px;
                }

                

                .title{
                  font-size: 22px;
                  font-weight: bolder;
                  padding: 12px;
                  margin-top: 15px;
                }
            }

            @keyframes slideup {
              from {
                transform: translateY(110%);
              }
              to{
                transform: translateY(0%);
              }
            }

            @keyframes slidedown {
              from {
                transform: translateY(0%);
              }
              to{
                transform: translateY(110%);
              }
            }
            }
`

export default FilterWrapper