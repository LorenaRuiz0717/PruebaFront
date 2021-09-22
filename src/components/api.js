import '../App.css'
import addShop from './addShop'
/* eslint-disable jsx-a11y/alt-text */
import { Fragment } from "react"
import logo from "../assest/logo.png";  
const { useEffect, useState } = require("react")




function API() {
    const url = ' https://superfuds-assets.s3-sa-east-1.amazonaws.com/utils/product.json'
    const [productos, setProductos] = useState()
    const fetchApi = async () => {
        const response = await fetch(url)
        // console.log(response.status)
        const responseJSON = await response.json()
        setProductos(responseJSON)
        console.log(responseJSON)

        // const data = () => productos.map((producto, index) => {
        //     console.log([producto.title, producto.category, producto.price_real])
        //     return [producto.title, producto.category]
        // })      
    }
    useEffect((url) => {
        fetchApi(url)
    }, [])

   return (

        <Fragment>

         <div className='ficha'> 
   {!productos?'Cargando...':
         productos.map((productos, index) => {
        return <div className='product' key={index}>
       <h2 className='title'>{productos.title} </h2>
        <img src={productos.image} height='200em' width='auto'></img>
        {/* <h5>{productos.id}</h5> */}
        <div className='descripcion'>
        {/* <img src={logo} alt="logo" width="90"></img> */}
        <h5>{productos.category}</h5><h7>{productos.net_content}</h7>
      <p> <h3 className='precio'>$</h3><h5> {productos.price_real}</h5> </p>
        {/* <button type="button" class="btn btn-success"  onClick={addShop}>Success</button> */}
        <button type="button" class="btnCarrito"  onClick={addShop}></button>
        </div>
        </div>

     })} 
</div>
        </Fragment>
    )
}
export default API
