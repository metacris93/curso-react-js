import React from 'react';
import './TodoCounter.css';

const styles = {
  color: 'red',
  backgroundColor: 'yellow',
};

function TodoCounter() {
  return (
    <h2 className='TodoCounter'>Has completado 2 de 4 TODOS</h2>
  );
}

export { TodoCounter };
