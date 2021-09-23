/* eslint-disable jsx-a11y/alt-text */
import '../App.css'
import React from "react";
import logo from '../assest/logo.png'
// import { Carousel } from '@trendyol-js/react-carousel'



const Producto = ({producto, car, setCar, productos }) => {
    const {id, title, net_content, category, image,price_real } = producto;

    const addProduct=(id)=>{
        const producto=productos.filter((producto)=> producto.id===id)
   setCar([...car, ...producto])
    }

    const deleteProduct=(id)=>{
        const productos=car.filter(producto=> producto.id !==id)
        setCar(productos)

    }

    return (
        <>        
        <ul className='contenProduct'>
            <li className='product'>
            <h2 className='title'>{title} </h2>
            <img src={image} className='imgProduct'  height='180em' width='auto'></img>
            <div className='descripcion'>                                        
        <img src={logo} alt="logo" className='logoProducts' width="80"></img>
          <h3>{category}</h3>
          <h3 className='items'>Contenido Neto: </h3>  <h3>{net_content}</h3>
            <h3 className='items'>Precio: </h3><h3>$ {price_real}</h3> 
            <div className='desple'>
                {productos ?(
                      (<button type ="submit" className ="btnCarrito" onClick={()=>addProduct(id)}>Añadir a carrito</button>
                      )):(
                          <div>
                                <button type ="button" className ="btnCarrito" onClick={()=>deleteProduct(id)}>Eliminar </button>
                        </div>
                      )
                }
            </div>
            </div>
            </li>
            </ul>  
        </>
                 )
}
export default Producto