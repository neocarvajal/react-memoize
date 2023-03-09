import React from 'react';
import '../App.css';

function HooksPersonalizados () {
    const names = [
        'Erick',
        'Isabella',
        'Isaura',
        'Diego',
        'Carlos',
    ];

    return (
        <GeneradorNombres names = {names} />
    );
}

function GeneradorNombres (props) {
    const { names } = props;

    const [name, setName] = React.useState(names[0]);

    const getName = React.useCallback(
        () => {
            const index = Math.floor(Math.random() * (names.length));
            console.log(names[index]);
            setName(names[index]);
        },
        [names]
    );


    const clearName = React.useCallback(
        () => {
            setName(null);
        },
        []
    );
    
    // useMemo solo permite que se rendirice el componente si el resultado de name es diferente al actual

    return (
        <div className='app'>
            <h1>Memoize de React con useMemo y useCallback</h1>

            {React.useMemo(
                () => {
                    console.log('Renderización Nombre: ' + name);
                    return (
                        <>
                            <h2>Nombre Generado: {name ? name: 'None'}</h2>
                        </>
                    );
                },
                [name]
            )}

            <Button
                label='Generar Nombre'
                click={getName}
            />

            <Button
                label='Borrar Nombre'
                click={clearName}
            />
        </div>
    );
}

function WrappedButton (props) {
    console.log('Renderización Boton');
    return (
        <button
            onClick={() => {
                props.click();
            }}
        >
            {props.label}
        </button>
    );
}

const Button = React.memo(WrappedButton);

export default HooksPersonalizados;
