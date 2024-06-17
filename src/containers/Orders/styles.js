import styled from "styled-components";
import Background from "../../Assets/background.png"

export const Container = styled.div`
background: url("${Background}");
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
width:100%;
height: 100%;
min-height:100vh;
`
export const Image = styled.img`
margin-top: 30px;

`


export const Button = styled.button`
width: 342px;
height: 68px;
margin-top: 70px;
gap: 14px;
border: none;

font-size: 17px;
font-weight: 900;
line-height: 60px;
letter-spacing: 0px;
text-align: center;
color: #ffffff;
background-color: rgba(255, 255, 255, 0.25);
cursor: pointer;

&:hover {
  opacity: 0.8;
}

&:active {
  opacity: 0.5;
}


`
export const Order = styled.li`
display: flex;
justify-content: space-around;
align-items:center;
box-shadow: 0px 4px 4px 0px #00000040;
background: rgba(255, 255, 255, 0.25);
border: none;
outline: none;
border-radius: 14px;
width: 342px;
height: 101px;
margin-top:20px;

p{
  color: #FFF;
font-size: 20px;
font-style: normal;
font-weight: normal;
line-height: 28px;
}

button{
  background:none;
  border:none;
  cursor: pointer;
}
`