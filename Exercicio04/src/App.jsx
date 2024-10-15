import React from 'react';
import VerificaIdade from './components/VerificarIdade';
import './App.css'

function App() {
  const idadeUsuario = 20; 
  return (
    <div>
      <VerificaIdade idade={idadeUsuario}/>
    </div>
  )
}

export default App