import VerificarUsuario from './components/VerificarUsuario'
import './App.css'

function App() {
  const usuario = true; //Altere para false para testar a funcionalidade do programa.

  return (
    <>
      <VerificarUsuario usuario={usuario}/>
    </>
  )
}

export default App