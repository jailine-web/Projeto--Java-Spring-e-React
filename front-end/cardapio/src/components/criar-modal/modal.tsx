import {useEffect, useState } from "react"
import {useDadosComida} from '../../hooks/useInserirDados';
import { dadosComida } from "../Interface/dadosComida";
import './modal.css';

interface InputProps{
    label: string,
    valor: string | number,
    atualizarValor (valor: any): void 
}

interface ModalProps{
    fecharModal(): void
}

const Input = ({label, valor, atualizarValor}: InputProps) => {
    return (
        <>
        <label>{label}</label>
        <input value={valor} onChange={event => atualizarValor(event.target.value)}/>
        </>
    )
}

export function CriarModal({fecharModal}: ModalProps){
    const [titulo, setTitulo] = useState("");
    const [imagem, setImagem] = useState("");
    const [preco, setPreco] = useState(0);
    const {mutate, isSuccess, isLoading} = useDadosComida();

    const submit = () => {
        const dados: dadosComida = {
            titulo, 
            imagem,
            preco
        }
        mutate(dados)
    }

    useEffect(() => {
        if(isSuccess) {
            fecharModal();
        } 
    }, [isSuccess])

return(
    <div className="modal-overlay">
        <div className="modal-body">
            <h2>Cadastre uma nova comida no cardápio</h2>
            <form className="input-container">
                <Input label="titulo" valor={titulo} atualizarValor={setTitulo}/>
                <Input label="imagem" valor={imagem} atualizarValor={setImagem}/>
                <Input label="preco" valor={preco} atualizarValor={setPreco}/>
            </form>
            <button onClick={submit} className="btn-secundario">
                {isLoading ? 'cadastrando...':'Cadastrar'}</button>
        </div>
    </div>
)}