import Car from './car'
const {useState } = require("react")


const Shop=()=>{


const [car, setCar] = useState([])

return(

<Car  
car={car}
setCar={setCar}/>
)
}

export default Shop;