import styled from "styled-components";

export const Button = styled.button`
width: 342px;
height: 68px;
margin-top:${props => props.isBack ? "70px" : " 132px"};
gap: 14px;
border: none;

font-size: 17px;
font-weight: 900;
line-height: 60px;
letter-spacing: 0px;
text-align: center;
color: #ffffff;
background-color:${props => props.isBack ? "rgba(255, 255, 255, 0.25)" : "#FF00FF" };
cursor: pointer;

&:hover {
  opacity: 0.8;
}

&:active {
  opacity: 0.5;
}


`
