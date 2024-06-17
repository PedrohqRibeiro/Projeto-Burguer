import React, { useState, useRef,  } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Image,InputLabel, Input } from "./styles"
import Burguer from "../../Assets/burger .png";
import  H1  from "../../components/Title";
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/Button";

function App() {

    // const orders = []

    const [orders, setOrders] = useState([])
    const navigate = useNavigate()
    const inputOrder = useRef();
    const inputName = useRef()



    async function addNewOrder() {
        const {data: newOrders} = await axios.post("https://project-node-2-0.vercel.app/orders", 
        {order:inputOrder.current.value,name:inputName.current.value})
    

        setOrders([...orders, newOrders])

        navigate("/pedidos")

    }
    
    
    



    return (

        <Container>
            <Image alt="logo-img" src={Burguer}></Image>
            <ContainerItens>
                <H1>Faça seu pedido!</H1>

                <InputLabel>Pedido</InputLabel>
                <Input ref={inputOrder} placeholder="1 Coca-Cola, 1-X Salada"></Input>

                <InputLabel>Nome do Cliente</InputLabel>
                <Input ref={inputName} placeholder="Steve Jobs"></Input>


                <Button onClick={addNewOrder}>Novo Pedido</Button>

              

            </ContainerItens>
        </Container>

    )
}

export default App