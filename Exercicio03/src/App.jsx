import Autenticacao from './components/autenticacao'
import './App.css'

function App() {
  const usuario_autenticado = true;

  return (
    <div>
      <Autenticacao autenticado = {usuario_autenticado} />
    </div>
  )
}

export default App