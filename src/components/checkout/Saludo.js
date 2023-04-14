import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/checkout.css"

const Saludo = () => {
  return (
    <div className='Saludo'>
      <h1>Muchas gracias por su compra!!</h1>
      <h4>En los proximos dias, su compra llegará a la direccion indicada</h4>
      <h2>Vuelva pronto!!</h2>
        <Link to={'/'}>
            <button className='botonSaludo' id='Detalles'>Regresar a inicio</button>
        </Link>
    </div>
  )
}

export default Saludo
