import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { Container, Image,Order } from "./styles"
import Sacola from "../../Assets/sacola.png"
import Trash from "../../Assets/trash.svg"
import  H1  from "../../components/Title";
import  ContainerItens  from "../../components/ContainerItens";
import Button from "../../components/Button";
function App() {

    // const orders = []

    const [orders, setOrders] = useState([])
  
    const navigate = useNavigate()
   

    useEffect(() => {
        async function fechtOrders() {
            const { data: myRequests } = await axios.get("https://project-node-2-0.vercel.app/orders")
            setOrders(myRequests)
        }

        fechtOrders()
    }, [])
    
   


   async function deleteUser(orderId) {
        await axios.delete(`https://project-node-2-0.vercel.app/orders/${orderId}`)
        
        const newOrder = orders.filter(order => order.id !== orderId)
        setOrders(newOrder)
    }

    function goBackPage(){
       navigate("/")
    }



    return (

        <Container>
            <Image alt="logo-img" src={Sacola}></Image>
            <ContainerItens>
                <H1>Pedidos</H1>

            

                

                <ul>
                    {orders.map(order => (
                        <Order key={order.id}>
                            <p> {order.order} </p> - <p>{order.name}</p>
                            <button onClick={() => deleteUser(order.id)}> <img alt="lata-de-lixo" src={Trash}></img> </button>
                        </Order>


                    ))}


                </ul>
               
               
                <Button isBack={true} onClick={goBackPage}>Voltar</Button>

            </ContainerItens>
        </Container>

    )
}

export default App