import React from 'react';
import BotaoLogin from './components/Login';

function App() {
  const usuarioLogado = false; // Altere para false para testar a ação do botão "Entrar"

  return (
    <div>
      <BotaoLogin logado={usuarioLogado} />
    </div>
  );
}

export default App;