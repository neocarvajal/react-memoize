import React, { useMemo, useCallback, useState }from 'react';

// useMemo --> React.memo() Funciones Creacionales de componentes que deben momorizar algo
// useCallback --> Memorizar valores listados en la dependencia. Funciones en línea

const MiComponente = () => {

    // const getName = React.useCallback(() => {

    // });

    const [name, setName] = useState('');

    const names = [
        'Martin',
        'Erick',
    ];

    const getName = useCallback(
        () => {
        // Obtener un nombre aleatorio
        const random = Math.floor(Math.random() * (names.length -1));
        setName(names[random]);
        }, 
        [name],
    );

    const clearName = useCallback(
        () => {
            setName(null);
        }, []
    )

    return (
        <h1>
            Mi Componente
        </h1>
    )
}


// const Memorization = useMemo(() => MiComponente, [a, b]);