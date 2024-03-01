import styled from "styled-components";
import { colors } from "../../constants/colors";

const ModalWrapper = styled.div<{ismodalopen: string}>`
width: 100%;
height: 100vh;


    .modal-container {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;


        .loader-container{
          width: 100%;
          height: 100%;
          background-color: ${colors.primary.black};
          opacity: 0.2;
          display: flex;
        justify-content: center;
        align-items: center;

             .loader {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        position: relative;
        animation: rotate 1s linear infinite
      }

       .loader::before , .loader::after {
        content: "";
        box-sizing: border-box;
        position: absolute;
        inset: 0px;
        border-radius: 50%;
        border: 5px solid #FFF;
        animation: prixClipFix 2s linear infinite ;
      }
      .loader::after{
        border-color: #FF3D00;
        animation: prixClipFix 2s linear infinite , rotate 0.5s linear infinite reverse;
        inset: 6px;
      }

       @keyframes rotate {
        0%   {transform: rotate(0deg)}
        100%   {transform: rotate(360deg)}
      }

      @keyframes prixClipFix {
          0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
          25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
          50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
          75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
          100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
      }

        }
       

          .filter-container{
            width: 100%;
          height: 100%;
          display: flex;
          position: relative;
          top: 0;

          .overlay{
            width: 100%;
            height: 100%;
            background-color: ${colors.primary.black};
            opacity: 0.2;
            position: absolute;
            z-index: 1;
            top: 0;
          }

            .main-container{
              width: 100%;
              height: 90%;
              position: absolute;
              background-color: ${colors.primary.white};
              z-index: 9;
              bottom: 0;
              border-radius: 30px;
              animation: slideup ease-in-out .3s 1;
              transform: translateY(0%);


                .form-container{
                  width: 100%;
                  height: auto;
                  margin-top: 40px;
                  
                  .continue {
                    width: 95%;
                    padding: 16px;
                    background: linear-gradient(180deg, #72B5F1 0%, rgba(23, 118, 202, 0.83) 131.58%);
                    border-radius: 12px;
                    margin-top: 50px;
                    border: none;
                    font-size: 20px;
                    font-weight: bolder;
                    color: ${colors.primary.white};
                    text-align: center;
                  }

                  label {
                    font-size: 16px;
                    font-weight: bolder;
                    margin-top: 20px;
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
                  
                  .box {
                    width: 100%;
                    height: 60px;
                    border: 1px solid red;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 8px;
                    border: 2px solid ${colors.primary.lightGray};
                    border-radius: 12px;
                    padding: 12px;
                    margin-bottom: 30px;

                    select {
                    width: 95%;
                    height: 40px;
                    background-color: ${colors.primary.white};
                    border: none;
                    padding: 8px;
                    outline: none;
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

                   .filter, .normal , .relevant{
            padding: 8px;
            width: 120px;
            border-radius: 10px;
            border: none;
            font-size: 16px;
            font-weight: 800;
            flex-shrink: 0;
        }

        .relevant {
          background: linear-gradient(180deg, #72B5F1 0%, rgba(23, 118, 202, 0.83) 131.58%);
            color: ${colors.primary.white}
        }


        button {
            margin: 3px;
        }

        .normal {
            color: ${colors.primary.cyan};
            background-color: ${colors.primary.grayishWhite};
        }

          .normal_sec {
            color: ${colors.primary.cyan};
            background-color: ${colors.primary.grayishWhite};
        }
                }

                .close {
                  width: 80px;
                  height: 6px;
                  border-radius: 10px;
                  background-color: ${colors.primary.lightGray};
                  margin: 0 auto;
                  margin-top: 10px;
                }

                .title{
                  font-size: 22px;
                  font-weight: bolder;
                  padding: 12px
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
            }

     
     

     

    }
`

export default ModalWrapper