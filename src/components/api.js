import '../App.css'
import Producto from './Producto'
import Car from './car'
import Header from './Header'
import { Carousel } from '@trendyol-js/react-carousel'

const { useEffect, useState } = require("react")

function API() {
    const url = ' https://superfuds-assets.s3-sa-east-1.amazonaws.com/utils/product.json'
    const [productos, setProductos] = useState([])
    const [car, setCar] = useState([])
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
        <>
            <Header />
            <div>
                <Car
                    car={car}
                    setCar={setCar} />
            </div>
            {/* <div className='contenCarousel'> */}
                {/* <Carousel> */}
                {/* // slide='6'> */}
                {productos.map((producto) =>
                    <Producto
                        key={producto.id}
                        producto={producto}
                        car={car}
                        setCar={setCar}
                        productos={productos}
                        >                            
                    </Producto>
                )}
                {/* </Carousel>  */}
            {/* </div> */}
       </>
    )
}
export default API

            // <>
            // {!productos ? 'Cargando...' :
            //     <div className='contenCarusel'>
            //         <Carousel>

            //             {productos.map((productos, index) => {

            //                 return (
            //                    <div className='contentProduct'>

            //                     <div className='product' key={index}>

            //                         <h2 className='title'>{productos.title} </h2>

            //                         <img src={productos.image} className='imgProduct' height='200em' width='auto'></img>

            //                         {/* <h5>{productos.id}</h5> */}
            //                         <div className='descripcion'>
            //                             {/* <img src={logo} alt="logo" width="90"></img> */}
            //                             <h5>{productos.category}</h5><h7>{productos.net_content}</h7>
            //                             <p> <h3 className='precio'>$</h3><h5> {productos.price_real}</h5> </p>
            //                             {/* <button type="button" class="btn btn-success"  onClick={addShop}>Success</button> */}


            //                             <div className='desple'>
            //                                 <button type="button" class="btnCarrito" onClick={addShop}>Añadir a carrito</button>
            //                             </div>


            //                         </div>
            //                     </div>
            //                 </div>

            //                 )

            //             })}

            //         </Carousel>
            //     </div>

            // }
            // </>