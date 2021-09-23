/* eslint-disable jsx-a11y/alt-text */
import '../App.css'
import React from "react";

// import addShop from './car'
// import { Carousel } from '@trendyol-js/react-carousel'



const Producto = ({producto, car, setCar, productos }) => {
    const {id, title, net_content, category, image,price_real } = producto;

    const addProduct=(id)=>{
        const producto=productos.filter((producto)=> producto.id===id)
   setCar([...car, ...producto])
    }

    return (
        <>        
        {/* <ul className='contenProduct'> */}
            <li className='product'>
            <h2 className='title'>{title} </h2>
            <img src={image} className='imgProduct' height='200em' width='auto'></img>
            <div className='descripcion'>
        {/* <img src={logo} alt="logo" width="90"></img> */}
            <h3>{category}</h3><h3>{net_content}</h3>
            <h3 className='precio'>$</h3><h5> {price_real}</h5> 
            <div className='desple'>
            <button type ="submit" className ="btnCarrito" onClick={()=>addProduct(id)}>Añadir a carrito</button>
            </div>
            </div>
            </li>
            {/* </ul>   */}
        </>
                 )
}
export default Producto