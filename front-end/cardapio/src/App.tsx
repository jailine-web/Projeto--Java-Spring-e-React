import './App.css';
import {Card} from './components/card';
import { CriarModal } from './components/criar-modal/modal';
import {useDadosComida} from './hooks/useDadosComida';
import { useState } from 'react';

function App() {
  const {data} = useDadosComida();
  const [modalAberto, setModalAberto] = useState(false);
  
const setarModal= () =>{
  setModalAberto(prev => !prev)
}

  return (
    <div className='container'>
        <h1>Cardápio</h1>
        <div className='card-grid'> 
        
            {data?.map(dadosComida => 
                  <Card
                    preco={dadosComida.preco} 
                    titulo={dadosComida.titulo} 
                    imagem={dadosComida.imagem}
                  />
                )}
        </div>

                {modalAberto && <CriarModal fecharModal={setarModal}/>}
                <button onClick={setarModal}>novo</button>
        </div>
    
    
  )
}

export default App
