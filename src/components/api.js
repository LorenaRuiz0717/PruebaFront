/* eslint-disable jsx-a11y/alt-text */
import { Fragment } from "react"

const { useEffect, useState } = require("react")

// import React {useState} from "react"


function API() {
    // const [characters,setCharacters]=useState([]);
    const url = ' https://superfuds-assets.s3-sa-east-1.amazonaws.com/utils/product.json'
    const [todos, setTodos] = useState()
    const fetchApi = async () => {
        const response = await fetch(url)
        console.log(response.status)
        const responseJSON = await response.json()
        setTodos(responseJSON)
        console.log(responseJSON)
    }
    useEffect((url) => {
        fetchApi(url)
    }, [])
    return (
        <Fragment>
        <div>
            {!todos ? 'Cargando...' :
                 todos.map((todo, index) => {
               return   <div key={index}>
                        <div>{todo.category}</div>
                        <div>{todo.title} </div>
                        <div> {todo.subcategory}</div>
                        <img src={todo.image}></img>
                   </div>
        })}
        </div>
        </Fragment>
            )
}
export default API
