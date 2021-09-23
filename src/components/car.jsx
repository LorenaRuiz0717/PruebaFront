import React from "react"
import Producto from "./Producto"

const Car=({car,setCar})=>{
    return(
        <div className='car'>
            <p >{car.length}</p>
            <h3>Carrito</h3>

            {car.length===0? (<p></p>):(car.length===0? (<p>0</p>):(car.map((producto=> <Producto className='shop' key={producto.id} producto={producto} car={car} setCar={setCar}></Producto>))))}
        </div>
    )
}

export default Car
