import React, { PureComponent } from 'react';

// Memorización de componentes en React

function MiComponente(prevProps, nextProps) {
  return (
    <h1>
        Componente memorizado
    </h1>
  )
}

function propsComparison(prevProps, nextProps) {

}

export const EjemploComponent = React.memo(MiComponente, propsComparison);