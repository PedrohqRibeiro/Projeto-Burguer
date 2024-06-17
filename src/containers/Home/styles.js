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



export const InputLabel = styled.p`
color: #eeeeee;

font-size: 18px;
font-weight: 700;
line-height: 22px;
letter-spacing: -0.40799999237060547px;
text-align: left;
padding-left: 22px;

`

export const Input = styled.input`
width: 342px;
  height: 58px;
  padding: 19px, 139px, 18px, 15px;
  margin-bottom: 30px;
  padding-left: 21px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  gap: 18px;
  box-shadow: 0px 4px 4px 0px #00000040;
  border: none;
  outline: none;

  font-size: 18px;
  font-weight: 300;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: left;
  color: #ffffff;

`

