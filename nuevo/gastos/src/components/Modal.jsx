import Mensaje from './Mensaje';
import { useState } from 'react';
import CerrarVtn from '../img/cerrar.svg';

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto }) => {

    const [mensaje, setMensaje] = useState('');
    // state del modal
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [categoria, setCategoria] = useState('');
    const cerrarVentana = () => {
        setModal(false)
        setAnimarModal(false)

    }

    const handleSubmit = e => {

        e.preventDefault();
        // verifica por todos los elementos
        if([nombre, cantidad, categoria].includes('')) {
            setMensaje('Todos los campos son obligatorios');

            setTimeout(() => {
                setMensaje('');
            },2000 );
            return;
        }

        guardarGasto({nombre, cantidad, categoria})
    } 

    return (
        <div className="modal">
            <p>Modal</p>
            <div className="cerrar-modal">
                <img src={CerrarVtn} onClick={cerrarVentana} alt="" />
            </div>

            <form onSubmit={handleSubmit} className={`formulario ${animarModal ? "animar" : ''}`}>
                <legend>Nuevo Gasto</legend>
                {mensaje && <Mensaje tipo='error' >{mensaje}</Mensaje> }
                <div className='campo'>
                    <label htmlFor="nombre">Nombre de gasto</label>
                    <input
                        id='nombre'
                        type="text"
                        placeholder='añadir gasto'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="cantidad">Cantidad</label>
                    <input
                        id='cantidad'
                        type="number"
                        placeholder='añadir cantidad'
                        value={cantidad}
                        onChange={e => setCantidad(Number(e.target.value))} />
                </div>
                <div className='campo'>
                    <label htmlFor="categoria">Categoría</label>
                    <select id="categoria" value={categoria}
                        onChange={e => setCategoria(e.target.value)}>
                        <option value="">--Seleccione--</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="subscripciones">Subscripciones</option>
                    </select>
                </div>
                <input type="submit" value="Añadir Gasto" />
            </form>
        </div>
    )
}

export default Modal