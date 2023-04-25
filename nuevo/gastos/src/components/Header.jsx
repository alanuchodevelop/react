import React from "react";
import NuevoPresupuesto from './NuevoPresupuesto';
import ControlPrespuesto from './ControlPresupuesto';

const Header = ({ 
    gastos,
    presupuesto,
    setPresupuesto,
    isValidPresupuesto,
    setIsValidPresupuesto }) => {
    return (
        <header>
            <h1>
                Planificador de gastos
            </h1>
            {isValidPresupuesto ? (<ControlPrespuesto  gastos={gastos} presupuesto={presupuesto} />) : (
                <NuevoPresupuesto
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto}
                />
            )}

        </header>
    )
}

export default Header;